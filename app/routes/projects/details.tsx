import type { Route } from "./+types/details";
import { data, Link } from "react-router";
import { siteText } from "../../data/content";
import { ArrowLeftIcon } from "~/components/icons/icons";

export function meta({ loaderData }: Route.MetaArgs) {
  const project = loaderData?.project;

  if (!project) {
    return [
      { title: "Project not found | Dimterion" },
      {
        name: "description",
        content: "The requested project could not be found.",
      },
    ];
  }

  return [
    { title: `${project.title} | Dimterion` },
    {
      name: "description",
      content: project.description,
    },
  ];
}

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
    <section className="w-full max-w-96 space-y-4 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <Link
        to="/projects"
        className="md:text-md flex w-fit items-center gap-2 border p-2 text-sm"
      >
        <ArrowLeftIcon /> Back to projects
      </Link>
      <article className="bg-blue grid items-start gap-8 border p-2 md:grid-cols-2">
        <div>
          <img
            src={project.image.link}
            alt={project.image.description}
            className="w-full shadow-md"
          />
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold md:text-2xl">
            {project.title}
          </h1>
          <div className="mb-4 flex flex-wrap gap-2 space-x-2">
            {project.stack.map((item) => (
              <span key={item} className="border px-2 py-1">
                {item}
              </span>
            ))}
          </div>
          <p className="mb-6">{project.description}</p>
        </div>
      </article>
      <div className="flex gap-2">
        {project.links.map((link) => (
          <a
            key={link.href}
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
