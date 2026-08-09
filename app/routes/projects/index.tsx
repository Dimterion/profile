import type { Project } from "~/types";
import { siteText } from "../../../data/content";

export default function ProjectsPage() {
  const projects: Project[] = siteText.en.projects.items;

  return (
    <>
      <h2 className="font-bold">Projects</h2>

      <section className="my-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="border">
            <h3 className="font-semibold">{project.title}</h3>

            <img
              src={project.image.link}
              alt={project.image.description}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />

            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
