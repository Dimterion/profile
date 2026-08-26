import type { Route } from "./+types/index";
import Hero from "~/components/Hero/Hero";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import { siteText } from "~/data/content";
import AboutPreview from "~/components/AboutPreview/AboutPreview";
import type { PostsMeta } from "~/types";
import { postsMeta } from "~/data/blog/posts-meta";
import LatestPosts from "~/components/LatestPosts/LatestPosts";
import SectionConnector from "~/components/SectionConnector/SectionConnector";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dimterion | Profile" },
    { name: "description", content: "Dimterion's profile" },
  ];
}

export function sortPostsLatestFirst(posts: PostsMeta[]) {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function loader({}: Route.LoaderArgs) {
  return {
    projects: siteText.en.projects.items,
    posts: sortPostsLatestFirst(postsMeta.en),
  };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { projects, posts } = loaderData;

  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SectionConnector />
      <FeaturedProjects projects={projects} count={2} />
      <SectionConnector />
      <LatestPosts posts={posts} limit={4} />
      <SectionConnector />
      <AboutPreview />
    </div>
  );
}
