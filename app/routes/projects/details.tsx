import type { Route } from "./+types/details";
import { data, Link } from "react-router";
import { siteText } from "../../data/content";

export async function loader({ params }: Route.LoaderArgs) {
  const project = siteText.en.projects.items.find(
    (item) => item.slug === params.slug,
  );

  if (!project) {
    throw data("Project not found", { status: 404 });
  }

  return { project };
}

export default function ProjectDetailsPage({
  loaderData,
}: Route.ComponentProps) {
  const { project } = loaderData;

  return (
    <article>
      <Link to="/projects">Back</Link>
      <h1>{project.title}</h1>
      <img src={project.image.link} alt={project.image.description} />
      <p>{project.description}</p>
    </article>
  );
}
