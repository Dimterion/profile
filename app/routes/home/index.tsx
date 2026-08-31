import type { Route } from "./+types/index";
import Hero from "~/components/Hero/Hero";
import FeaturedProjects from "~/components/FeaturedProjects/FeaturedProjects";
import type { PostsMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts/LatestPosts";
import SectionConnector from "~/components/SectionConnector/SectionConnector";
import PageNav from "~/components/PageNav/PageNav";
import SectionNav from "~/components/SectionNav/SectionNav";
import ScrollToTopBottom from "~/components/ScrollToTopBottom/ScrollToTopBottom";
import AboutPreview from "~/components/AboutPreview/AboutPreview";
import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";

function getCurrentLanguage() {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("language");
  if (saved === "fr") return "fr";
  return "en";
}

export function meta({}: Route.MetaArgs) {
  const lang = getCurrentLanguage();
  const content = lang === "fr" ? fr : en;

  return [
    { title: content.meta.title },
    { name: "description", content: content.meta.description },
  ];
}

export function sortPostsLatestFirst(posts: PostsMeta[]) {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function loader() {
  const lang = getCurrentLanguage();
  const content = lang === "fr" ? fr : en;

  return {
    projects: content.projects.items,
    posts: content.posts.items,
  };
}

export default function HomePage() {
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
          <FeaturedProjects count={2} />
        </section>

        <SectionConnector />

        <section id="blog" className="w-full">
          <LatestPosts limit={4} />
        </section>

        <SectionConnector />

        <section id="about" className="w-full">
          <AboutPreview />
        </section>
      </div>
    </>
  );
}
