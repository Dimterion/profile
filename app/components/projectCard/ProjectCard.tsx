import type { Project } from "~/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border">
      <h3 className="font-semibold">{project.title}</h3>
      <img
        src={project.image.link}
        alt={project.image.description}
        loading="lazy"
        className="w-full object-cover"
      />
      <p>{project.description}</p>
    </article>
  );
}
