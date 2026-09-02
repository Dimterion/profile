import type { Route } from "./+types/index";
import Hero from "~/components/Hero/Hero";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import LatestPosts from "~/components/LatestPosts/LatestPosts";
import SectionConnector from "~/components/SectionConnector/SectionConnector";
import PageNav from "~/components/PageNav/PageNav";
import SectionNav from "~/components/SectionNav/SectionNav";
import ScrollToTopBottom from "~/components/ScrollToTopBottom/ScrollToTopBottom";
import AboutPreview from "~/components/AboutPreview/AboutPreview";
import { useContent } from "~/hooks/useContent";
import { parsePostsFromGlob } from "~/lib/posts";
import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";

const postFiles = import.meta.glob<string>("../../data/blog/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: en.meta.title },
    { name: "description", content: en.meta.description },
  ];
}

export async function loader() {
  const enPosts = parsePostsFromGlob(postFiles, "en");
  const frPosts = parsePostsFromGlob(postFiles, "fr");

  return {
    projects: {
      en: en.projects.items,
      fr: fr.projects.items,
    },
    posts: {
      en: enPosts,
      fr: frPosts,
    },
  };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { currentLang } = useContent();
  const { projects, posts } = loaderData;

  const lang = currentLang === "fr" ? "fr" : "en";
  const postsForLang = posts[lang];
  const projectsForLang = projects[lang];

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
          <FeaturedProjects count={2} items={projectsForLang} />
        </section>

        <SectionConnector />

        <section id="blog" className="w-full">
          <LatestPosts posts={postsForLang} limit={4} />
        </section>

        <SectionConnector />

        <section id="about" className="w-full">
          <AboutPreview />
        </section>
      </div>
    </>
  );
}
