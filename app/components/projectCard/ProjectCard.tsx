import { Link } from "react-router";
import type { Project } from "~/types";
import { useContent } from "~/hooks/useContent";
import { ArrowRightIcon } from "../icons";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useContent();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card-enter group bg-dark-blue flex transform flex-col border transition duration-100"
      aria-label={`${t.projects.viewProject}: ${project.title}`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image.link}
          alt={project.image.description}
          loading="lazy"
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="p-2 text-center font-semibold md:text-lg">
        {project.title}
      </h3>
      <div className="flex flex-1 items-center">
        <p className="min-w-0 flex-1 p-2">{project.description}</p>
        <ArrowRightIcon className="mr-2 h-5 w-5 shrink-0" />
      </div>
    </Link>
  );
}
