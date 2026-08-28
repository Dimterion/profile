import { Link } from "react-router";
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
    <CornerFrame className="bg-blue flex min-h-screen w-full max-w-96 flex-col items-center justify-center gap-8 border px-2 py-4 md:max-w-lg md:p-10 lg:max-w-2xl xl:max-w-full">
      <h2 className="text-center text-lg font-bold uppercase md:text-xl">
        Work
      </h2>
      <div className="grid gap-2 md:mx-2 md:mb-2 md:gap-8 lg:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        className="bg-dark-blue hover:text-gold hover:border-gold mx-auto w-fit border px-4 pt-0.5 pb-1 text-center text-sm uppercase transition"
        to="/projects"
      >
        All projects
      </Link>
    </CornerFrame>
  );
}
