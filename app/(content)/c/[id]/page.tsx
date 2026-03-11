import { notFound } from "next/navigation";
import { getCase, getAllCaseIds } from "@/lib/cases";
import { SidebarToc } from "@/components/sidebar-toc";
import { ArticleContent } from "@/components/article-content";

const GITHUB_REPO = "https://github.com/parallax-ai-llc/historical-parallax";

export const revalidate = 0;

interface CasePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllCaseIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: CasePageProps) {
  const { id } = await params;
  const caseData = await getCase(id);

  if (!caseData) {
    return { title: "Not Found" };
  }

  const { name, nationality, date } = caseData.meta;
  const description = `${name}${nationality ? ` (${nationality})` : ""}${date ? ` - ${date}` : ""} - Explore multiple legal perspectives across jurisdictions.`;

  return {
    title: name,
    description,
    openGraph: { title: name, description, type: "article" },
    twitter: { card: "summary_large_image", title: name, description },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;
  const caseData = await getCase(id);

  if (!caseData) {
    notFound();
  }

  const editUrl = `${GITHUB_REPO}/edit/main/content/cases/${caseData.meta.id}.md`;

  return (
    <div className="flex flex-1 py-8 px-4 md:px-6 lg:pl-96 2xl:pl-0">
      <SidebarToc items={caseData.toc} articleTitle={caseData.meta.name} />
      <div className="mx-auto w-full max-w-4xl">
        <ArticleContent meta={caseData.meta} content={caseData.content} />
        <div className="mt-8 pt-4 border-t text-sm text-muted-foreground">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-foreground transition-colors"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
