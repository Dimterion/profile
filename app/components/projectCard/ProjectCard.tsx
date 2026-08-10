import { Link } from "react-router";
import type { Project } from "~/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block transform border transition duration-100 hover:scale-[1.01]"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <img
        src={project.image.link}
        alt={project.image.description}
        loading="lazy"
        className="w-full object-cover"
      />
      <p>{project.description}</p>
    </Link>
  );
}
