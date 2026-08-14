import type { FeaturedProjectsProps } from "~/types";
import ProjectCard from "../projectCard/ProjectCard";

export default function FeaturedProjects({
  projects,
  count = 4,
}: FeaturedProjectsProps) {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
