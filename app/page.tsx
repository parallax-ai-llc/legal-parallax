import { getAllCases } from "@/lib/cases";
import { HomeClient } from "./home-client";

export default function HomePage() {
  const cases = getAllCases();

  return <HomeClient cases={cases} />;
}
