import { FooterStage } from "@/components/footer-stage";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type FooterLink = {
  href: string;
  /** Literal label (brand names). Takes precedence over labelKey. */
  label?: string;
  /** i18n key for translated labels. */
  labelKey?: string;
  /** This site's own pages: rendered with the router, same tab. */
  internal?: boolean;
};

const PARENT = "https://parallax.kr";

const SERVICE_LINKS: FooterLink[] = [
  { label: "The Agent", href: "https://agent.parallax.kr" },
  { label: "Parallax", href: PARENT },
  { label: "Iris", href: "https://iris.parallax.kr" },
  { label: "Soulmate", href: "https://soulmate.parallax.kr" },
  { label: "Storage", href: "https://storage.parallax.kr" },
  { label: "Docs", href: "https://docs.parallax.kr" },
  { label: "Forms", href: "https://forms.parallax.kr" },
  { label: "Cloud", href: "https://cloud.parallax.kr" },
  { label: "Sites", href: "https://p0.parallax.kr" },
  { label: "Board", href: "https://board.parallax.kr" },
  { label: "Calendar", href: "https://calendar.parallax.kr" },
  { label: "Slides", href: "https://slides.parallax.kr" },
  { label: "Blogs", href: "https://blog.parallax.kr" },
  { label: "Launch", href: "https://launch.parallax.kr" },
  { label: "Engage", href: "https://engage.parallax.kr" },
  { label: "Downloader", href: "https://downloader.parallax.kr" },
  { label: "Skills", href: "https://skills.parallax.kr" },
  { label: "Links", href: "https://links.parallax.kr" },
  { label: "DEX", href: "https://dex.parallax.kr" },
  { label: "Playground", href: "https://playground.parallax.kr" },
  { label: "PAN", href: "https://pan.parallax.kr" },
];

const SITE_GROUPS: { id: string; titleKey: string; links: FooterLink[] }[] = [
  {
    id: "products",
    titleKey: "products",
    links: [
      { label: "Graygate", href: "https://graygate.app" },
      { label: "Endkit", href: "https://endkit.app" },
    ],
  },
  {
    id: "developers",
    titleKey: "developers",
    links: [
      { label: "APIs", href: `${PARENT}/en/docs/api` },
      { label: "MCP", href: `${PARENT}/en/docs/mcp` },
      { label: "SDK", href: `${PARENT}/en/docs/sdk` },
    ],
  },
  {
    id: "resources",
    titleKey: "resources",
    links: [
      { labelKey: "aboutUs", href: `${PARENT}/about` },
      { labelKey: "ourStory", href: `${PARENT}/our-story` },
      { labelKey: "pricing", href: `${PARENT}/pricing` },
      { labelKey: "changeLog", href: `${PARENT}/change-log` },
      { labelKey: "territory", href: `${PARENT}/territory` },
      { labelKey: "aiMemory", href: `${PARENT}/memory` },
      { labelKey: "aiStorage", href: `${PARENT}/storage` },
      { labelKey: "investors", href: `${PARENT}/ir` },
      { labelKey: "statusShort", href: "https://status.parallax.kr" },
    ],
  },
  {
    id: "communities",
    titleKey: "communities",
    links: [
      { labelKey: "blog", href: `${PARENT}/blog` },
      { labelKey: "helpCenter", href: "https://cs.parallax.kr" },
      { labelKey: "whatsNew", href: `${PARENT}/en/whats-new` },
      { labelKey: "ideas", href: `${PARENT}/ideas` },
      { labelKey: "contributeLink", href: "/contribute", internal: true },
    ],
  },
  {
    id: "wiki",
    titleKey: "wiki",
    links: [
      { label: "Historical", href: "https://historical.parallax.kr" },
      { label: "Legal", href: "/", internal: true },
      { label: "Truth", href: "https://truth.parallax.kr" },
      { label: "Orb", href: "https://orb.parallax.kr" },
    ],
  },
  {
    id: "policies",
    titleKey: "policies",
    links: [
      { labelKey: "termsLink", href: "/terms-of-service", internal: true },
      { labelKey: "privacyLink", href: "/privacy-policy", internal: true },
      { labelKey: "cookiePolicy", href: `${PARENT}/cookie-policy` },
    ],
  },
];

const headingClass = "font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground";
const linkClass =
  "text-sm leading-relaxed text-foreground/80 no-underline transition-colors hover:text-foreground";

function FooterAnchor({ link, label }: { link: FooterLink; label: string }) {
  return link.internal ? (
    <Link href={link.href} className={linkClass}>
      {label}
    </Link>
  ) : (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {label}
    </a>
  );
}

export function Footer() {
  const tf = useTranslations("footer");
  const label = (link: FooterLink) => link.label ?? tf(link.labelKey!);

  return (
    <footer role="contentinfo" aria-label={tf("footerAriaLabel")} className="relative z-10 bg-background">
      <FooterStage line1={tf("stageLine1")} line2={tf("stageLine2")} cta={tf("goToApp")} href={PARENT} />
      <div className="px-5 pb-6 pt-10 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="flex flex-col items-start gap-6 lg:col-span-4">
            <a href={PARENT} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${PARENT}/logo/icon_512.png`} alt="" width={44} height={44} loading="lazy" className="size-11" />
              <span className="whitespace-nowrap font-serif text-2xl leading-[1.1]">Parallax AI, LLC</span>
            </a>
            <p className="text-sm leading-relaxed text-muted-foreground">
              131 Continental Dr, Suite 305, Newark, DE
              <br />
              {tf("emailLabel")}:{" "}
              <a href="mailto:contact@parallax.kr" className="underline-offset-4 hover:underline">
                contact@parallax.kr
              </a>
            </p>
          </div>

          <nav aria-label={tf("navAriaLabel")} className="flex min-w-0 flex-col gap-10 lg:col-span-7 lg:col-start-6">
            <div className="flex min-w-0 flex-col gap-3">
              <h2 id="footer-nav-services" className={headingClass}>
                {tf("services")}
              </h2>
              <ul aria-labelledby="footer-nav-services" className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 xl:grid-cols-4">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <FooterAnchor link={link} label={label(link)} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="-mb-10 columns-2 gap-x-6 sm:columns-3 xl:columns-4">
              {SITE_GROUPS.map((group) => (
                <div key={group.id} className="mb-10 flex min-w-0 break-inside-avoid flex-col gap-3">
                  <h2 id={`footer-nav-${group.id}`} className={headingClass}>
                    {tf(group.titleKey)}
                  </h2>
                  <ul aria-labelledby={`footer-nav-${group.id}`} className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <FooterAnchor link={link} label={label(link)} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Parallax AI, LLC</p>
          <p>{tf("allRights")}</p>
        </div>
      </div>
    </footer>
  );
}
