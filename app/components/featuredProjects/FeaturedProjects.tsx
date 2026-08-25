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
    <section className="bg-blue max-w-96 border p-4 lg:max-w-180 xl:max-w-full">
      <h2 className="mb-4 text-center text-lg font-bold md:text-xl">Work</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
