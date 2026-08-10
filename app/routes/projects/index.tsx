import type { Project } from "~/types";
import { siteText } from "../../data/content";
import ProjectCard from "~/components/projectCard/ProjectCard";

export default function ProjectsPage() {
  const projects: Project[] = siteText.en.projects.items;

  return (
    <>
      <h2 className="font-bold">Projects</h2>

      <section className="my-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
}
