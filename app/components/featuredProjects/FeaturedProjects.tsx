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
    <div className="grid max-w-100 gap-6 lg:max-w-full lg:grid-cols-2">
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
