export type Project = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    summary:
      "A short description of the project, its purpose, and the problem it solves.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/Dimterion/profile",
  },
];