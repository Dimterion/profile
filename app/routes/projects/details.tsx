import { useParams } from "react-router";
import type { Project } from "~/types";
import { siteText } from "../../data/content";

export default function ProjectDetailsPage() {
  const { slug } = useParams();

  const projects: Project[] = siteText.en.projects.items;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <article>
      <h1>{project.title}</h1>

      <img src={project.image.link} alt={project.image.description} />

      <p>{project.description}</p>
    </article>
  );
}
