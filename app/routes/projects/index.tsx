import type { Route } from "./+types/index";
import { siteText } from "../../data/content";
import ProjectCard from "~/components/projectCard/ProjectCard";

export async function loader({}: Route.LoaderArgs) {
  return {
    projects: siteText.en.projects.items,
  };
}

export default function ProjectsPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

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
