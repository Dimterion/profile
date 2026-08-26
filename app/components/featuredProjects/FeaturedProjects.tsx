import type { FeaturedProjectsProps } from "~/types";
import ProjectCard from "../ProjectCard/ProjectCard";
import CornerFrame from "../CornerFrame/CornerFrame";

export default function FeaturedProjects({
  projects,
  count = 4,
}: FeaturedProjectsProps) {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <CornerFrame className="bg-blue w-full max-w-96 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <h2 className="mb-4 text-center text-lg font-bold md:text-xl">Work</h2>
      <div className="grid gap-2 md:mx-2 md:mb-2 md:gap-6 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </CornerFrame>
  );
}
