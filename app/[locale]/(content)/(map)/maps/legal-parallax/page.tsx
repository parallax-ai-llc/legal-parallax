import { Metadata } from "next";
import { getAllTopics } from "@/lib/legal-stances";
import { LegalParallaxMap } from "@/components/legal-parallax-map";

export const metadata: Metadata = {
  title: "Legal Parallax Map | Same Act, Different Laws",
  description:
    "Interactive globe showing how the same act is treated differently across countries. Select a legal topic and see the global parallax.",
};

export default function LegalParallaxMapPage() {
  const topics = getAllTopics();

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h1 className="font-serif text-4xl font-normal leading-none tracking-[-0.02em] md:text-5xl">
          Legal Parallax Map
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground">
          Same act, different laws. Select a topic to see how countries diverge.
        </p>
      </div>
      <LegalParallaxMap topics={topics} />
    </div>
  );
}
