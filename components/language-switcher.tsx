"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "简体中文" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "pt", name: "Português" },
  { code: "ar", name: "العربية" },
  { code: "hi", name: "हिन्दी" },
] as const;

interface LanguageSwitcherProps {
  coverage?: Record<string, number>;
}

export function LanguageSwitcher({ coverage }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const total = coverage?.en ?? 0;
  const available = languages
    .map((lang) => ({
      ...lang,
      count: coverage?.[lang.code] ?? 0,
    }))
    .filter((lang) => !coverage || lang.count > 0)
    .sort((a, b) => b.count - a.count);

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
      </Button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-56 rounded-md border bg-popover p-1 shadow-md z-50">
          {available.map((lang) => {
            const isComplete = total > 0 && lang.count >= total;
            const percent = total > 0 ? Math.round((lang.count / total) * 100) : 0;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  router.replace(pathname, { locale: lang.code });
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground ${
                  locale === lang.code ? "bg-accent text-accent-foreground font-medium" : ""
                }`}
              >
                <span>{lang.name}</span>
                {coverage && (
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {isComplete ? "✓" : `${percent}%`}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
