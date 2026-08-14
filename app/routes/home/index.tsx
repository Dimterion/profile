import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";
import FeaturedProjects from "~/components/featuredProjects/FeaturedProjects";
import { siteText } from "~/data/content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dimterion | Profile" },
    { name: "description", content: "Dimterion's profile" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  return {
    projects: siteText.en.projects.items,
  };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <>
      <Hero />
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
}
