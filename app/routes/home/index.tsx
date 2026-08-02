import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dimterion | Profile" },
    { name: "description", content: "Dimterion's profile" },
  ];
}

export default function Home() {
  return <>Profile</>;
}
