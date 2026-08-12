import { useState } from "react";
import type { Route } from "./+types/index";
import { siteText } from "../../data/content";
import ProjectCard from "~/components/projectCard/ProjectCard";
import Pagination from "~/components/pagination/Pagination";

export async function loader({}: Route.LoaderArgs) {
  return {
    projects: siteText.en.projects.items,
  };
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="font-bold">Projects</h2>
      <section className="my-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
