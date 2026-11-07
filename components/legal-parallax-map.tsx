"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LegalTopic } from "@/lib/legal-stances";
import { getCountryName, getStanceColor, getStanceLabel } from "@/lib/legal-stances";

const StanceGlobe = dynamic(() => import("@/components/globe/stance-globe").then((m) => m.StanceGlobe), {
  ssr: false,
});

interface LegalParallaxMapProps {
  topics: LegalTopic[];
}

export function LegalParallaxMap({ topics }: LegalParallaxMapProps) {
  const t = useTranslations("map");
  const [topicId, setTopicId] = React.useState(topics[0]?.id ?? "");
  const [selected, setSelected] = React.useState<string | null>(null);
  const [focusValue, setFocusValue] = React.useState<number | null>(null);

  const topic = topics.find((item) => item.id === topicId) ?? topics[0];

  const colors = React.useMemo(() => {
    const out: Record<string, string> = {};
    if (topic) {
      for (const [alpha3, entry] of Object.entries(topic.countries)) {
        out[alpha3] = getStanceColor(topic, entry.stance);
      }
    }
    return out;
  }, [topic]);

  const groups = React.useMemo(() => {
    if (!topic) return [];
    return topic.scale.map((level) => ({
      level,
      countries: Object.entries(topic.countries)
        .filter(([, entry]) => entry.stance === level.value)
        .map(([alpha3]) => ({ alpha3, name: getCountryName(alpha3) }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, [topic]);

  const describe = React.useCallback(
    (alpha3: string | undefined, fallbackName: string) => {
      const entry = alpha3 ? topic?.countries[alpha3] : undefined;
      return {
        title: alpha3 ? getCountryName(alpha3) : fallbackName,
        detail: entry && topic ? getStanceLabel(topic, entry.stance) : "No data",
      };
    },
    [topic]
  );

  if (!topic) return null;

  const selectedEntry = selected ? topic.countries[selected] : undefined;
  const focusColor = focusValue === null ? null : topic.scale.find((s) => s.value === focusValue)?.color ?? null;
  const total = Object.keys(topic.countries).length;

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_21rem]">
      <div className="relative">
        <StanceGlobe
          colors={colors}
          selected={selectedEntry ? selected : null}
          onSelect={setSelected}
          focusColor={focusColor}
          describe={describe}
          labels={{ zoomIn: t("zoomIn"), zoomOut: t("zoomOut"), reset: t("resetZoom") }}
          className="aspect-square w-full sm:aspect-auto sm:h-[calc(100svh-13rem)] sm:min-h-[520px]"
        />

        {selected && selectedEntry && (
          <div className="mt-3 rounded-lg border border-border bg-popover p-4 sm:absolute sm:bottom-4 sm:start-4 sm:mt-0 sm:w-[min(22rem,calc(100%-2rem))]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-pretty font-serif text-2xl font-normal leading-tight tracking-[-0.02em]">
                  {getCountryName(selected)}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs">
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: getStanceColor(topic, selectedEntry.stance) }}
                  />
                  {getStanceLabel(topic, selectedEntry.stance)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="-me-1 -mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedEntry.note}</p>
            {topic.caseId && (
              <Link
                href={`/c/${topic.caseId}`}
                className="group mt-3 inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-4 hover:underline"
              >
                Full legal comparison
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        )}
      </div>

      <section className="flex min-h-0 flex-col xl:h-[calc(100svh-13rem)] xl:min-h-[520px]">
        <label htmlFor="legal-topic" className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {t("selectTopic")}
        </label>
        <select
          id="legal-topic"
          value={topicId}
          onChange={(e) => {
            setTopicId(e.target.value);
            setSelected(null);
            setFocusValue(null);
          }}
          className="mt-2 h-11 w-full rounded-full border border-input bg-background px-4 text-sm transition-colors hover:border-foreground focus-visible:border-foreground focus-visible:outline-none"
        >
          {topics.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">{topic.description}</p>
        <p className="mt-2 font-mono text-xs text-muted-foreground">{total} countries</p>

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto border-t border-border">
          {groups.map(({ level, countries }) =>
            countries.length === 0 ? null : (
              <div
                key={level.value}
                onMouseEnter={() => setFocusValue(level.value)}
                onMouseLeave={() => setFocusValue(null)}
                className="border-b border-border py-3"
              >
                <h3 className="flex items-center gap-2 text-sm">
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="min-w-0 flex-1">{level.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{countries.length}</span>
                </h3>
                <ul className="mt-1.5 flex flex-wrap gap-x-2.5 gap-y-0.5 ps-[1.125rem]">
                  {countries.map(({ alpha3, name }) => (
                    <li key={alpha3}>
                      <button
                        type="button"
                        onClick={() => setSelected(alpha3)}
                        onFocus={(e) => {
                          if (e.currentTarget.matches(":focus-visible")) setFocusValue(level.value);
                        }}
                        onBlur={() => setFocusValue(null)}
                        aria-current={selected === alpha3 ? "true" : undefined}
                        className={cn(
                          "text-start text-xs underline-offset-4 transition-colors hover:text-foreground hover:underline",
                          selected === alpha3 ? "text-foreground underline" : "text-muted-foreground"
                        )}
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
