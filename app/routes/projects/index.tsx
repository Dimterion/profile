import type { Project } from "~/types";
import { siteText } from "../../../data/content";

export default function ProjectsPage() {
  const project: Project = siteText.en.projects.items[0];
  console.log(project);

  return <>Projects page</>;
}
