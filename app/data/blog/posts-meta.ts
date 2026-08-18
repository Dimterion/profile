import type { PostsByLanguage } from "~/types";

export const postsMeta = {
  en: [
    {
      id: "post-01",
      slug: "post-01",
      featured: true,
      label: "Post 01 Label",
      title: "Post 01 Title",
      description: "Post 01 description.",
      date: "2026-01-31",
      stack: ["stackItem01", "stackItem02", "stackItem03"],
      links: [
        {
          label: "Link 01",
          href: "https://example.com/",
        },
        {
          label: "Link 02",
          href: "https://example.com/",
        },
      ],
      image: {
        link: "imageLink",
        description: "Image description",
      },
    },
    {
      id: "post-02",
      slug: "post-02",
      featured: true,
      label: "Post 02 Label",
      title: "Post 02 Title",
      description: "Post 02 description.",
      date: "2026-02-28",
      stack: ["stackItem01", "stackItem02", "stackItem03"],
      links: [
        {
          label: "Link 01",
          href: "https://example.com/",
        },
        {
          label: "Link 02",
          href: "https://example.com/",
        },
      ],
      image: {
        link: "imageLink",
        description: "Image description",
      },
    },
  ],
  fr: [],
} satisfies PostsByLanguage;
