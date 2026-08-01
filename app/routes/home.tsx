import type { Route } from "./+types/home";
import { HomeContent } from "../home-content/home-content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Home content." },
  ];
}

export default function Home() {
  return <HomeContent />;
}
