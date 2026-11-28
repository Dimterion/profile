import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <p className="text-xs text-neutral-600 dark:text-neutral-400">
        {project.role} · {project.year}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-4 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          Read more
        </Link>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400"
          >
            Live site
          </a>
        ) : null}

        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}