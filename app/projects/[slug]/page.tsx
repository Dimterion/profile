import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Dmitrii`,
    description: project.summary,
  };
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

      <header className="mt-6">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {project.role} · {project.year}
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {project.title}
        </h1>

        <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-400">
          {project.summary}
        </p>
      </header>

      {project.imageUrl && project.imageAlt ? (
        <div className="mt-8 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            width={1200}
            height={675}
            className="h-auto w-full"
            priority
          />
        </div>
      ) : null}

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          About the project
        </h2>

        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Key features
        </h2>

        <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Technologies
        </h2>

        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 flex flex-wrap gap-4">
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
      </section>
    </article>
  );
}