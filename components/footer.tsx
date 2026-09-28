import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const SERVICES = [
  { label: "Sites", href: "https://parallax.kr/sites" },
  { label: "Iris", href: "https://iris.parallax.kr" },
  { label: "Soulmate", href: "https://soulmate.parallax.kr" },
  { label: "Storage", href: "https://storage.parallax.kr" },
  { label: "Docs", href: "https://docs.parallax.kr" },
  { label: "Forms", href: "https://forms.parallax.kr" },
  { label: "Cloud", href: "https://cloud.parallax.kr" },
  { label: "DEX", href: "https://dex.parallax.kr" },
  { label: "Playground", href: "https://playground.parallax.kr" },
  { label: "graygate", href: "https://graygate.app" },
];

const WIKIS = [
  { label: "Law", href: "https://legal.parallax.kr" },
  { label: "Truth", href: "https://truth.parallax.kr" },
  { label: "History", href: "https://historical.parallax.kr" },
  { label: "News", href: "https://news.parallax.kr" },
  { label: "Orb", href: "https://orb.parallax.kr" },
];

const DOCUMENTS = [
  { key: "contribute", href: "/contribute" },
  { key: "termsOfService", href: "/terms-of-service" },
  { key: "privacyPolicy", href: "/privacy-policy" },
] as const;

const linkClass =
  "hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

function ExternalLinks({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <NextLink
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            aria-label={`${item.label} (opens in new tab)`}
          >
            {item.label}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border/40 py-10" role="contentinfo" aria-label="Site footer">
      <div className="container flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="space-y-3">
          <NextLink
            href="https://parallax.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            aria-label="Parallax AI, LLC (opens in new tab)"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand-mark.svg" alt="" width={24} height={24} className="h-6 w-6" />
            Legal Parallax
          </NextLink>
          <p className="text-sm text-muted-foreground">
            {t("poweredBy")}{" "}
            <NextLink
              href="https://parallax.kr"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium ${linkClass}`}
            >
              Parallax AI, LLC
            </NextLink>
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 text-sm text-muted-foreground sm:grid-cols-3 md:gap-16"
        >
          <div>
            <h2 className="mb-3 font-medium text-foreground">{t("services")}</h2>
            <ExternalLinks items={SERVICES} />
          </div>
          <div>
            <h2 className="mb-3 font-medium text-foreground">{t("wiki")}</h2>
            <ExternalLinks items={WIKIS} />
          </div>
          <div>
            <h2 className="mb-3 font-medium text-foreground">{t("documents")}</h2>
            <ul className="space-y-2">
              {DOCUMENTS.map((doc) => (
                <li key={doc.href}>
                  <Link href={doc.href} className={linkClass}>
                    {t(doc.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
