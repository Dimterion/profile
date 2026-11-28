export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  features: string[];
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    summary:
      "A short description of the project, its purpose, and the problem it solves.",
    description:
      "A longer explanation: what the project does, why it's built, the main challenge, and the result. Concise and focused on the work done.",
    role: "Frontend development",
    year: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive user interface",
      "Component-based architecture",
      "Accessible navigation and forms",
    ],
    imageUrl: "/images/example-project.png",
    imageAlt: "Screenshot of the Example Project interface",
    liveUrl: "https://example.com",
    repositoryUrl: "https://github.com/Dimterion/profile",
  },
];