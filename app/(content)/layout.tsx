import { getSearchIndex } from "@/lib/articles";
import { getCaseSearchIndex } from "@/lib/cases";
import { SiteLayoutClient } from "@/components/site-layout-client";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const articleIndex = getSearchIndex();
  const caseIndex = getCaseSearchIndex();
  const searchIndex = [...articleIndex, ...caseIndex];

  return <SiteLayoutClient searchIndex={searchIndex}>{children}</SiteLayoutClient>;
}
