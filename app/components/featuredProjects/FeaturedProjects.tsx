import { Link } from "react-router";
import ProjectCard from "../shared/ProjectCard/ProjectCard";
import CornerFrame from "../shared/CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";
import type { Project } from "~/types";
import PageLinkBtn from "../shared/PageLinkBtn/PageLinkBtn";

export default function FeaturedProjects({
  count = 4,
  items,
}: {
  count?: number;
  items?: Project[];
}) {
  const { t } = useContent();

  const featured = t.projects.items
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <CornerFrame className="cornerFrame gradient-bg">
      <h2 className="text-center font-bold sm:text-lg md:text-xl">
        {t.work.title}
      </h2>

      <div className="grid gap-2 md:mx-2 md:mb-2 md:gap-8 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <PageLinkBtn link="/projects" label={t.work.cta} />
    </CornerFrame>
  );
}
