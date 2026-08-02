import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "Profile site" }];
}

export default function AboutPage() {
  return <>About page</>;
}
