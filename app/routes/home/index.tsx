import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Profile site" },
  ];
}

export default function Home() {
  return <>Profile</>;
}
