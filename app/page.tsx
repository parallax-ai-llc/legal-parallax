import { getAllArticles } from "@/lib/articles";
import { getAllCases } from "@/lib/cases";
import { HomeClient } from "./home-client";

export default function HomePage() {
  const articles = getAllArticles();
  const cases = getAllCases();

  return <HomeClient articles={articles} cases={cases} />;
}
