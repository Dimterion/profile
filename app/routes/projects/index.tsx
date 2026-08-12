import { useState } from "react";
import type { Route } from "./+types/index";
import { siteText } from "../../data/content";
import ProjectCard from "~/components/projectCard/ProjectCard";

export async function loader({}: Route.LoaderArgs) {
  return {
    projects: siteText.en.projects.items,
  };
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  const renderPagination = () => (
    <div>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`m-4 cursor-pointer px-3 py-1 ${currentPage === idx + 1 ? "bg-gray-600 text-white" : "bg-gray-400"}`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <h2 className="font-bold">Projects</h2>
      <section className="my-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
      {totalPages > 1 && renderPagination()}
    </>
  );
}
