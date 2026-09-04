import { data, Link } from "react-router";

import type { Route } from "./+types/details";

import { useContent } from "~/hooks/useContent";

import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";

import { ArrowLeftIcon } from "~/components/icons/icons";

export function meta({ loaderData }: Route.MetaArgs) {
  const { projectEn, projectFr } = loaderData || {};

  const project = projectEn ?? projectFr;

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
  const projectEn = en.projects.items.find((item) => item.slug === params.slug);
  const projectFr = fr.projects.items.find((item) => item.slug === params.slug);

  if (!projectEn && !projectFr) {
    throw data("Project not found", { status: 404 });
  }

  return {
    projectEn,
    projectFr,
    backToProjectsEn: en.projects.backToProjects,
    backToProjectsFr: fr.projects.backToProjects,
  };
}

export default function ProjectDetailsPage({
  loaderData,
}: Route.ComponentProps) {
  const { t, currentLang } = useContent();
  const { projectEn, projectFr, backToProjectsEn, backToProjectsFr } =
    loaderData;

  const project = currentLang === "fr" ? projectFr : projectEn;
  const backToProjects =
    currentLang === "fr" ? backToProjectsFr : backToProjectsEn;

  const resolvedProject = project ?? projectEn ?? projectFr;

  if (!resolvedProject) {
    return (
      <div className="space-y-2 text-center">
        <div className="text-lg">Project not found.</div>
        <Link to="/projects" className="underline">
          Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full max-w-96 space-y-4 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <Link
        to="/projects"
        className="md:text-md flex w-fit items-center gap-2 border p-2 text-sm"
      >
        <ArrowLeftIcon /> {backToProjects}
      </Link>

      <article className="bg-blue grid items-start gap-8 border p-2 md:grid-cols-2">
        <div>
          <img
            src={resolvedProject.image.link}
            alt={resolvedProject.image.description}
            className="w-full shadow-md"
          />
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold md:text-2xl">
            {resolvedProject.title}
          </h1>
          <div className="mb-4 flex flex-wrap gap-2 space-x-2">
            {resolvedProject.stack.map((item) => (
              <span key={item} className="border px-2 py-1">
                {item}
              </span>
            ))}
          </div>
          <p className="mb-6">{resolvedProject.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {resolvedProject.links.map((link) => (
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
      </article>
    </section>
  );
}
