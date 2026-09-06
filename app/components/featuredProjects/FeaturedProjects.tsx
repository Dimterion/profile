import { Link } from "react-router";
import ProjectCard from "../ProjectCard/ProjectCard";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";
import type { Project } from "~/types";

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
    <CornerFrame className="cornerFrame">
      <h2 className="text-center font-bold sm:text-lg md:text-xl">
        {t.work.title}
      </h2>

      <div className="grid gap-2 md:mx-2 md:mb-2 md:gap-8 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link
        className="bg-dark-blue hover:border-gold hover:text-gold w-fit min-w-0 border px-4 py-2 text-xs transition md:text-sm"
        to="/projects"
      >
        {t.work.cta}
      </Link>
    </CornerFrame>
  );
}
