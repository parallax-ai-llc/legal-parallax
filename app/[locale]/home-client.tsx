"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "next-intl";
import { SearchDialog, SearchItem } from "@/components/search-dialog";
import { RecentArticles } from "@/components/recent-articles";
import { Footer } from "@/components/footer";
import { SymbolHero } from "@/components/ascii/symbol-hero";
import { SITE_HERO } from "@/lib/site-identity";
import { CaseMeta } from "@/lib/cases";
import { createRandomStream, take } from "@/lib/lisp/utils";
import Link from "next/link";

interface HomeClientProps {
  cases?: CaseMeta[];
}

export function HomeClient({ cases = [] }: HomeClientProps) {
  const t = useTranslations("common");
  const [mounted, setMounted] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const searchItems: SearchItem[] = React.useMemo(
    () => cases.map((c) => ({ ...c, type: "case" as const })),
    [cases]
  );

  // Picked once after hydration: a random pick during render would differ between server and client.
  const [randomArticles, setRandomArticles] = React.useState<typeof searchItems>([]);

  React.useEffect(() => {
    setMounted(true);
    setRandomArticles(take(createRandomStream(searchItems), 10));
  }, [searchItems]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-40 flex items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" aria-label="Legal Parallax" className="rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand-mark.svg" alt="" width={32} height={32} className="size-8" />
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1">
          <Link
            href="/contribute"
            className="inline-flex h-9 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("contribute")}
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative z-10 mx-auto max-w-3xl px-5 pt-8 text-center md:pt-12">
          <h1 className="text-balance font-serif text-[clamp(3.25rem,8.4vw,6rem)] font-normal leading-none tracking-[-0.02em]">
            Legal Parallax
          </h1>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="mx-auto mt-7 flex h-14 w-full max-w-xl items-center gap-3 rounded-full border border-input bg-background ps-5 pe-3 text-start text-muted-foreground transition-colors hover:border-foreground"
          >
            <Search className="size-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0 flex-1 truncate">{t("searchPlaceholder")}</span>
            <kbd className="hidden h-8 items-center rounded-full border border-border px-3 font-mono text-xs sm:inline-flex">
              Ctrl K
            </kbd>
          </button>
        </section>

        <SymbolHero config={SITE_HERO} className="mt-6" />

        <div className="relative bg-background">
          <section className="mx-auto w-full max-w-[1200px] px-5 pb-24 pt-10 md:px-8">
            <h2 className="mb-6 font-serif text-3xl font-normal tracking-[-0.02em] md:text-4xl">{t("explore")}</h2>
            <RecentArticles articles={randomArticles} />
          </section>
        </div>
      </main>

      <Footer />

      {mounted && (
        <div suppressHydrationWarning>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} items={searchItems} />
        </div>
      )}
    </div>
  );
}
