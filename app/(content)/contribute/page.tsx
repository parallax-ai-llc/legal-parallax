import { ExternalLink, GitFork, GitPullRequest, FileEdit, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contribute",
  description: "Learn how to contribute to Legal Parallax by creating or editing articles.",
};

const GITHUB_REPO = "https://github.com/parallax-ai-llc/legal-parallax";

export default function ContributePage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <main className="container max-w-4xl py-12 px-4">
        <div className="space-y-2 mb-8">
          <h1 className="font-sans text-4xl font-bold tracking-tight">
            Contribute to Legal Parallax
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us build a comprehensive, balanced resource on legal cases and comparative law across jurisdictions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button asChild>
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`${GITHUB_REPO}/fork`} target="_blank" rel="noopener noreferrer">
              <GitFork className="mr-2 h-4 w-4" />
              Fork Repository
            </a>
          </Button>
        </div>

        <Separator className="my-8" />

        {/* Getting Started */}
        <section className="space-y-4 mb-12">
          <h2 className="font-sans text-2xl font-semibold">Getting Started</h2>
          <p className="text-muted-foreground">
            We accept contributions in the form of Markdown files located in the{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">
              content/cases/
            </code>{" "}
            directory. You can either create new legal case comparisons or improve existing ones.
          </p>
        </section>

        {/* How to Create a New Article */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans text-2xl font-semibold flex items-center gap-2">
            <FileEdit className="h-6 w-6" />
            Creating a New Case Comparison
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                1
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Fork the Repository</h3>
                <p className="text-muted-foreground">
                  Go to our{" "}
                  <a
                    href={GITHUB_REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub repository
                  </a>{" "}
                  and click the &quot;Fork&quot; button to create your own copy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="font-semibold">Clone Your Fork</h3>
                <pre className="p-3 rounded-lg bg-muted overflow-x-auto text-sm max-w-full">
                  <code>git clone https://github.com/parallax-ai-llc/legal-parallax.git</code>
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="font-semibold">Create a New Branch</h3>
                <pre className="p-3 rounded-lg bg-muted overflow-x-auto text-sm max-w-full">
                  <code>git checkout -b feature/add-article-name</code>
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                4
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="font-semibold">Create Your Case File</h3>
                <p className="text-muted-foreground">
                  Create a new file in{" "}
                  <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">
                    content/cases/
                  </code>{" "}
                  with the naming format:
                </p>
                <pre className="p-3 rounded-lg bg-muted overflow-x-auto text-sm max-w-full">
                  <code>topic-law-comparison.md</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  Example:{" "}
                  <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">
                    murder-law-comparison.md
                  </code>
                  ,{" "}
                  <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">
                    fraud-law-comparison.md
                  </code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                5
              </div>
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="font-semibold">Commit and Push</h3>
                <pre className="p-3 rounded-lg bg-muted overflow-x-auto text-sm max-w-full">
                  <code>{`git add content/cases/your-case.md
git commit -m "Add case comparison on [Topic]"
git push origin feature/add-case-topic`}</code>
                </pre>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                6
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Open a Pull Request</h3>
                <p className="text-muted-foreground">
                  Go to your fork on GitHub and click &quot;Compare & pull request&quot;. Provide a
                  clear description of your contribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Article Format */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans text-2xl font-semibold">Case Comparison Format</h2>
          <p className="text-muted-foreground">
            Every case comparison must follow this exact Markdown structure:
          </p>

          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm leading-relaxed max-w-full">
            <code>{`---
id: "topic-law-comparison"
name: "Topic: Cross-Jurisdictional Comparison"
date: "YYYY-MM-DD"
nationality: "Global"
occupation: ["Legal Analysis", "Criminal Law", "Comparative Law"]
image: ""
socialLinks:
  wikipedia: "https://en.wikipedia.org/wiki/..."
lastUpdated: "YYYY-MM-DD"
---

## Summary
A 3-4 sentence overview comparing approaches across jurisdictions.

## South Korea
Legal framework, key cases, penalties [^1].

## United States
Federal/state laws, landmark cases [^2].

## Germany
StGB provisions, penalties, key cases [^3].

## European Framework
ECHR/EU directives, landmark rulings [^4].

## Comparative Analysis
| Aspect | South Korea | United States | Germany | ECHR |
|--------|-----------|---------------|---------|------|
| Max Penalty | ... | ... | ... | ... |

## Career Timeline
| Year | Event |
|------|-------|
| YYYY | Description |

## References
[^1]: Source with URL
[^2]: Source with URL`}</code>
          </pre>
        </section>

        <Separator className="my-8" />

        {/* Guidelines */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans text-2xl font-semibold">Content Guidelines</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Do</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Write all content in English</li>
                <li>• Include multiple jurisdictions (KR, US, DE, EU minimum)</li>
                <li>• Cite every legal provision and case with footnotes</li>
                <li>• Use official legal sources (court databases, statutes)</li>
                <li>• Include a comparative analysis table</li>
                <li>• Use ISO date format (YYYY-MM-DD)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                  ✕
                </span>
                <h3 className="font-semibold">Don&apos;t</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Modify code or configuration files</li>
                <li>• Provide legal advice or opinions</li>
                <li>• Include unsourced legal claims</li>
                <li>• Cover only one jurisdiction</li>
                <li>• Include promotional material</li>
                <li>• Add personal legal interpretations without citation</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Editing Existing Articles */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans text-2xl font-semibold flex items-center gap-2">
            <GitPullRequest className="h-6 w-6" />
            Editing Existing Cases
          </h2>

          <p className="text-muted-foreground">To edit an existing case comparison:</p>

          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">1.</span>
              Navigate to the case page on our website
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">2.</span>
              Click the &quot;Edit this page on GitHub&quot; link at the bottom of the page
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">3.</span>
              Click the pencil icon on GitHub to edit the file
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-foreground">4.</span>
              Make your changes and submit a pull request
            </li>
          </ol>

          <div className="p-4 rounded-lg bg-muted/50 border">
            <p className="text-sm">
              <strong>Tip:</strong> You can also browse all case comparisons directly at{" "}
              <a
                href={`${GITHUB_REPO}/tree/main/content/cases`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {GITHUB_REPO}/tree/main/content/cases
              </a>
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Review Process */}
        <section className="space-y-4 mb-12">
          <h2 className="font-sans text-2xl font-semibold">Review Process</h2>
          <p className="text-muted-foreground">After you submit a pull request:</p>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Your PR will be reviewed for formatting compliance</li>
            <li>Content will be verified for accuracy using AI-powered fact-checking</li>
            <li>An editorial review will check for balance and quality</li>
            <li>Once approved, your contribution will be merged and deployed</li>
          </ol>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <h2 className="font-sans text-2xl font-semibold">Ready to Contribute?</h2>
          <p className="text-muted-foreground max-w-md">
            Your contributions help create a more comprehensive understanding of law across jurisdictions.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Go to GitHub
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
