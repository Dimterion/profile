import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";
import FeaturedProjects from "~/components/featuredProjects/FeaturedProjects";
import { siteText } from "~/data/content";
import AboutPreview from "~/components/aboutPreview/AboutPreview";
import type { PostsMeta } from "~/types";
import { postsMeta } from "~/data/blog/posts-meta";
import LatestPosts from "~/components/latestPosts/LatestPosts";

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
    <>
      <Hero />
      <FeaturedProjects projects={projects} count={2} />
      <LatestPosts posts={posts} limit={3} />
      <AboutPreview />
    </>
  );
}
