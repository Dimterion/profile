import { useState } from "react";
import type { Route } from "./+types/index";
import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";
import { useContent } from "~/hooks/useContent";
import ProjectCard from "~/components/ProjectCard/ProjectCard";
import Pagination from "~/components/Pagination/Pagination";

function getCurrentLanguage() {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("language");
  if (saved === "fr") return "fr";
  return "en";
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Dimterion" },
    {
      name: "description",
      content: "A selection of Dimterion's web development projects.",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const lang = getCurrentLanguage();
  const content = lang === "fr" ? fr : en;

  return {
    projects: content.projects.items,
  };
}

export default function ProjectsPage() {
  const { t } = useContent();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;
  const projects = t.projects.items;

  const categories = [
    "All",
    ...new Set(projects.flatMap((project) => project.stack)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(selectedCategory));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="font-bold">{t.work.title}</h2>
      <div className="bg-blue flex w-full max-w-96 flex-wrap justify-center gap-2 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`cursor-pointer px-3 py-1 text-sm text-white ${
              selectedCategory === category ? "bg-dark-blue" : "bg-grey"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <section
        key={`${selectedCategory}-${currentPage}`}
        className="projects-grid-enter bg-blue grid w-full max-w-96 gap-6 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl lg:grid-cols-2 xl:max-w-full xl:grid-cols-3"
      >
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
