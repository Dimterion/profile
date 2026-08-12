import type { Route } from "./+types/details";
import { data, Link } from "react-router";
import { siteText } from "../../data/content";
import { ArrowLeftIcon } from "~/components/icons/icons";

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
    <section className="space-y-4">
      <Link to="/projects" className="flex w-fit items-center gap-2 border p-2">
        <ArrowLeftIcon /> Back to projects
      </Link>
      <article className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <img
            src={project.image.link}
            alt={project.image.description}
            className="w-full shadow-md"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
          <div className="mb-4 space-x-2">
            {project.stack.map((item) => (
              <span className="border px-2 py-1">{item}</span>
            ))}
          </div>
          <p className="mb-6">{project.description}</p>
        </div>
      </article>
      <div className="flex gap-2">
        {project.links.map((link) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            className="underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
