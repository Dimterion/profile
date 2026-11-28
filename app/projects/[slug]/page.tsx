import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/#projects"
        className="text-sm text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-400"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {project.title}
      </h1>

      <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-400">
        {project.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-4">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-neutral-500 dark:border-neutral-700 dark:hover:border-neutral-500"
          >
            View live site
          </a>
        ) : null}

        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-neutral-500 dark:border-neutral-700 dark:hover:border-neutral-500"
          >
            View repository
          </a>
        ) : null}
      </div>
    </article>
  );
}