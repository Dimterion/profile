import { Link } from "react-router";
import type { Project } from "~/types";
import { ArrowRightIcon } from "../icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card-enter bg-dark-blue flex transform flex-col border transition duration-100 hover:scale-[1.01]"
    >
      <h3 className="p-2 text-center font-semibold">{project.title}</h3>
      <img
        src={project.image.link}
        alt={project.image.description}
        loading="lazy"
        className="w-full object-cover"
      />
      <div className="flex flex-1 items-center">
        <p className="min-w-0 flex-1 p-2">{project.description}</p>
        <ArrowRightIcon className="mr-2 h-5 w-5 shrink-0" />
      </div>
    </Link>
  );
}
