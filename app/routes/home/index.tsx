import type { Route } from "./+types/index";
import Hero from "~/components/Hero/Hero";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import type { PostsMeta } from "~/types";
import { postsMeta } from "~/data/blog/posts-meta";
import LatestPosts from "~/components/LatestPosts/LatestPosts";
import SectionConnector from "~/components/SectionConnector/SectionConnector";
import PageNav from "~/components/PageNav/PageNav";
import SectionNav from "~/components/SectionNav/SectionNav";
import ScrollToTopBottom from "~/components/ScrollToTopBottom/ScrollToTopBottom";
import AboutPreview from "~/components/AboutPreview/AboutPreview";
import { en } from "~/data/content/en";
import { siteText } from "~/data/content";

export function meta({}: Route.MetaArgs) {
  return [
    { title: en.meta.title },
    { name: "description", content: en.meta.description },
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
      <SectionNav />
      <ScrollToTopBottom />
      <PageNav />
      <div className="flex flex-col items-center">
        <section id="hero" className="w-full">
          <Hero />
        </section>
        <SectionConnector />
        <section id="work" className="w-full">
          <FeaturedProjects projects={projects} count={2} />
        </section>
        <SectionConnector />
        <section id="blog" className="w-full">
          <LatestPosts posts={posts} limit={4} />
        </section>
        <SectionConnector />
        <section id="about" className="w-full">
          <AboutPreview />
        </section>
      </div>
    </>
  );
}
