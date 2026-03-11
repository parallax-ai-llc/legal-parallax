import { Metadata } from "next";
import { getAllTopics } from "@/lib/legal-stances";
import { LegalParallaxMap } from "@/components/legal-parallax-map";

export const metadata: Metadata = {
  title: "Legal Parallax Map | Same Act, Different Laws",
  description:
    "Interactive world map showing how the same act is treated differently across countries. Select a legal topic and see the global parallax.",
};

export default function LegalParallaxMapPage() {
  const topics = getAllTopics();

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
          Legal Parallax Map
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Same act, different laws. Select a topic to see how countries diverge.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden h-[calc(100vh-200px)] min-h-[500px]">
        <LegalParallaxMap topics={topics} />
      </div>
    </div>
  );
}
