import type { Project } from "~/types";
import { siteText } from "../../../data/content";

export default function ProjectsPage() {
  const projects: Project[] = siteText.en.projects.items;

  return (
    <>
      <h2 className="font-bold">Projects</h2>
      <section className="grid gap-6 sm:grid-cols-3 my-6">
        {projects.map((project) => (
          <article key={project.id} className="border">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
