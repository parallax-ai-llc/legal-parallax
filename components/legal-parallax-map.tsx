"use client";

import * as React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useTheme } from "next-themes";
import { Plus, Minus, RotateCcw, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { LegalTopic } from "@/lib/legal-stances";
import {
  numericToAlpha3,
  getCountryName,
  getStanceColor,
  getStanceLabel,
} from "@/lib/legal-stances";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface GeoFeature {
  type: "Feature";
  properties: { name: string; [key: string]: unknown };
  geometry: { type: string; coordinates: number[][][] | number[][] };
  id?: string | number;
  rsmKey: string;
}

interface LegalParallaxMapProps {
  topics: LegalTopic[];
}

export function LegalParallaxMap({ topics }: LegalParallaxMapProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedTopicId, setSelectedTopicId] = React.useState(topics[0]?.id ?? "");
  const [hoveredCountry, setHoveredCountry] = React.useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
  const [position, setPosition] = React.useState({
    coordinates: [10, 20] as [number, number],
    zoom: 1,
  });

  const topic = topics.find((t) => t.id === selectedTopicId) ?? topics[0];

  function getCountryFill(geoId: string | number | undefined): string {
    if (!geoId || !topic) return isDark ? "#1e293b" : "#cbd5e1";
    const alpha3 = numericToAlpha3(String(geoId).padStart(3, "0"));
    if (!alpha3) return isDark ? "#1e293b" : "#cbd5e1";
    const countryData = topic.countries[alpha3];
    if (!countryData) return isDark ? "#1e293b" : "#cbd5e1";
    return getStanceColor(topic, countryData.stance);
  }

  function getGeoAlpha3(geoId: string | number | undefined): string | undefined {
    if (!geoId) return undefined;
    return numericToAlpha3(String(geoId).padStart(3, "0"));
  }

  const selectedAlpha3 = selectedCountry
    ? numericToAlpha3(selectedCountry.padStart(3, "0"))
    : null;
  const selectedData =
    selectedAlpha3 && topic ? topic.countries[selectedAlpha3] : null;

  return (
    <div className="flex flex-col h-full">
      {/* Topic Selector */}
      <div className="px-4 py-3 border-b bg-background/95 backdrop-blur">
        <select
          value={selectedTopicId}
          onChange={(e) => {
            setSelectedTopicId(e.target.value);
            setSelectedCountry(null);
          }}
          className="w-full h-10 px-3 rounded-md border bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        {topic && (
          <p className="mt-1.5 text-xs text-muted-foreground">{topic.description}</p>
        )}
      </div>

      {/* Map */}
      <div className="flex-1 relative bg-slate-100 dark:bg-slate-950 min-h-[400px]">
        {/* Legend */}
        {topic && (
          <div className="absolute top-3 left-3 z-10 bg-background/90 backdrop-blur rounded-lg border p-3 max-w-[200px]">
            <p className="text-xs font-semibold mb-2">Legend</p>
            <div className="space-y-1">
              {topic.scale.map((level) => (
                <div key={level.value} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm flex-shrink-0 border border-border/50"
                    style={{ backgroundColor: level.color }}
                  />
                  <span className="text-[11px] text-muted-foreground leading-tight">
                    {level.label}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0 border border-border/50"
                  style={{ backgroundColor: isDark ? "#1e293b" : "#cbd5e1" }}
                />
                <span className="text-[11px] text-muted-foreground">No data</span>
              </div>
            </div>
          </div>
        )}

        {/* Hover tooltip */}
        {hoveredCountry && !selectedCountry && (
          <div className="absolute top-3 right-16 z-10 bg-background/90 backdrop-blur rounded-lg border px-3 py-2 pointer-events-none">
            {(() => {
              const alpha3 = getGeoAlpha3(hoveredCountry);
              const countryName = alpha3
                ? getCountryName(alpha3)
                : hoveredCountry;
              const countryData = alpha3 ? topic?.countries[alpha3] : null;
              return (
                <>
                  <p className="text-sm font-medium">{countryName}</p>
                  {countryData && topic ? (
                    <p className="text-xs text-muted-foreground">
                      {getStanceLabel(topic, countryData.stance)}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">No data</p>
                  )}
                </>
              );
            })()}
          </div>
        )}

        {/* Zoom controls */}
        <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              position.zoom < 4 &&
              setPosition((p) => ({ ...p, zoom: p.zoom * 2 }))
            }
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              position.zoom > 1 &&
              setPosition((p) => ({ ...p, zoom: p.zoom / 2 }))
            }
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8"
            onClick={() =>
              setPosition({ coordinates: [10, 20], zoom: 1 })
            }
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Country detail panel */}
        {selectedAlpha3 && selectedData && topic && (
          <div className="absolute bottom-4 left-3 z-10 bg-background/95 backdrop-blur rounded-lg border p-4 max-w-[280px] shadow-lg">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-sm">
                  {getCountryName(selectedAlpha3)}
                </h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: getStanceColor(topic, selectedData.stance),
                    }}
                  />
                  <span className="text-xs font-medium">
                    {getStanceLabel(topic, selectedData.stance)}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 -mt-1 -mr-1"
                onClick={() => setSelectedCountry(null)}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {selectedData.note}
            </p>
            {topic.caseId && (
              <Link
                href={`/c/${topic.caseId}`}
                className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" />
                Full legal comparison
              </Link>
            )}
          </div>
        )}

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140 }}
          height={600}
          width={800}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={(p) => setPosition(p)}
            maxZoom={4}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: GeoFeature[] }) =>
                geographies.map((geo) => {
                  const isSelected =
                    selectedCountry === String(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={getCountryFill(geo.id)}
                      stroke={
                        isSelected
                          ? isDark
                            ? "#ffffff"
                            : "#000000"
                          : isDark
                            ? "#0f172a"
                            : "#ffffff"
                      }
                      strokeWidth={isSelected ? 1.5 : 0.5}
                      onClick={() => {
                        const alpha3 = getGeoAlpha3(geo.id);
                        if (alpha3 && topic?.countries[alpha3]) {
                          setSelectedCountry(String(geo.id));
                        }
                      }}
                      onMouseEnter={() =>
                        setHoveredCountry(String(geo.id))
                      }
                      onMouseLeave={() => setHoveredCountry(null)}
                      className={cn(
                        getGeoAlpha3(geo.id) &&
                          topic?.countries[getGeoAlpha3(geo.id)!]
                          ? "cursor-pointer"
                          : ""
                      )}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          outline: "none",
                          opacity: 0.8,
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Stats bar */}
      {topic && (
        <div className="px-4 py-2 border-t bg-muted/30 text-xs text-muted-foreground flex items-center justify-between">
          <span>
            {Object.keys(topic.countries).length} countries mapped
          </span>
          <span>Click a colored country for details</span>
        </div>
      )}
    </div>
  );
}
