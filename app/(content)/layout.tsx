import { getCaseSearchIndex } from "@/lib/cases";
import { SiteLayoutClient } from "@/components/site-layout-client";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const caseIndex = getCaseSearchIndex();

  return <SiteLayoutClient searchIndex={caseIndex}>{children}</SiteLayoutClient>;
}
