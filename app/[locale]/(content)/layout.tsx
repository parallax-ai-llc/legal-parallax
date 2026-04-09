import { getCaseSearchIndex, getLocaleCoverage } from "@/lib/cases";
import { SiteLayoutClient } from "@/components/site-layout-client";

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  const caseIndex = getCaseSearchIndex();
  const localeCoverage = getLocaleCoverage();

  return (
    <SiteLayoutClient searchIndex={caseIndex} localeCoverage={localeCoverage}>
      {children}
    </SiteLayoutClient>
  );
}
