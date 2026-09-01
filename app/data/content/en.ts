import type { ContentShape, PostsMeta } from "~/types";

import ispMainImg from "~/assets/images/isp_main_img.png";
import personalSiteMainImg from "~/assets/images/personal_site_main_img.png";
import storiesSiteMainImg from "~/assets/images/stories_site_main_img.png";
import mediumProfileMainImg from "~/assets/images/medium_profile_main_img.png";
import githubProfileMainImg from "~/assets/images/github_profile_main_img.png";
import potwMainImg from "~/assets/images/potw_main_img.png";

export const en: ContentShape = {
  meta: {
    title: "Dimterion | Profile",
    description: "Dimterion's profile",
  },
  hero: {
    name: "Dmitrii | Dimterion",
    bio: "Technical consultant, product support specialist, and developer with 10+ years of experience in the video game and financial industries.",
    links: {
      work: "Work",
      posts: "Posts",
      about: "About",
      contact: "Contact",
    },
  },
  work: {
    title: "Work",
    cta: "All projects",
  },
  blog: {
    title: "Latest Posts",
    cta: "All posts",
  },
  about: {
    title: "Profile",
    overviewTitle: "Overview",
    overviewText:
      "I contribute to GitHub daily, publish on Medium weekly, track everything I read, watch, and play, and make time every day to learn and write.",
    highlightsTitle: "Highlights",
    highlights: [
      "Daily GitHub contribution streak: 4+ years.",
      "Weekly Medium posts every Friday: 4+ years.",
      "Duolingo streak: 4,400+ days.",
    ],
    skillsTitle: "Skills",
    skills: [
      "Web Development",
      "Tech Consultations",
      "QA",
      "Testing",
      "Web Design",
      "Tech Writing",
      "Documentation",
    ],
    cta: "About",
  },
  contact: {
    title: "Contact",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendButton: "Send message",
    successMessage: "Form submitted",
    errors: {
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Invalid email format",
      subjectRequired: "Subject is required",
      messageRequired: "Message is required",
    },
  },
  projects: {
    viewProject: "View project",
    backToProjects: "Back to projects",
    items: [
      {
        id: "project-01",
        slug: "interactive-stories-platform",
        buttonLabel: "1",
        featured: true,
        label: "Interactive Storytelling",
        title: "Interactive Stories Platform",
        description:
          "A tool for creating interactive branching stories with multiple choices and outcomes.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        links: [
          {
            label: "Live Version",
            href: "https://stories-platform.dimterion.com/",
          },
          {
            label: "GitHub Repo",
            href: "https://github.com/Dimterion/stories-platform",
          },
        ],
        image: {
          link: ispMainImg,
          description: "Interactive Stories Platform cover image",
        },
      },
      {
        id: "project-02",
        slug: "dimterion-com",
        buttonLabel: "2",
        featured: true,
        label: "Personal Site",
        title: "dimterion.com",
        description: "Personal website, blog, project space, and contact hub.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: [
          {
            label: "Live Version",
            href: "https://www.dimterion.com/",
          },
          {
            label: "GitHub Repo",
            href: "https://github.com/Dimterion/personal-site",
          },
        ],
        image: {
          link: personalSiteMainImg,
          description: "Dimterion personal site cover image",
        },
      },
      {
        id: "project-03",
        slug: "dimterions-stories",
        buttonLabel: "3",
        featured: true,
        label: "Storytelling",
        title: "Dimterion's Stories",
        description: "A website hosting a collection of personal stories.",
        stack: ["React", "JavaScript", "CSS"],
        links: [
          {
            label: "Live Version",
            href: "https://stories.dimterion.com/",
          },
          {
            label: "GitHub Repo",
            href: "https://github.com/Dimterion/stories-db",
          },
        ],
        image: {
          link: storiesSiteMainImg,
          description: "Dimterion's stories site",
        },
      },
      {
        id: "project-04",
        slug: "medium-blog",
        buttonLabel: "4",
        label: "Tech Writing",
        title: "Medium Blog",
        description: "200+ posts published weekly on Medium over 4+ years.",
        stack: [],
        links: [
          {
            label: "Blog",
            href: "https://medium.com/@dimterion",
          },
        ],
        image: {
          link: mediumProfileMainImg,
          description: "Dimterion's Medium blog cover image",
        },
      },
      {
        id: "project-05",
        slug: "daily-contributions-and-ongoing-work",
        buttonLabel: "5",
        label: "Coding and Development",
        title: "Daily Contributions and Ongoing Work",
        description:
          "4+ years of daily contributions across multiple projects, with a focus on steady learning and improvement.",
        stack: [],
        links: [
          {
            label: "GitHub Profile",
            href: "https://github.com/Dimterion",
          },
        ],
        image: {
          link: githubProfileMainImg,
          description: "Dimterion's GitHub profile cover image",
        },
      },
      {
        id: "project-06",
        slug: "poets-of-tomorrows-world",
        buttonLabel: "6",
        label: "Interactive Text Adventures",
        title: "Poets of Tomorrow’s World",
        description:
          "Interactive fiction projects with multiple choices and branching outcomes.",
        stack: ["React", "JavaScript", "CSS"],
        links: [
          {
            label: "Live Version - 01",
            href: "https://poets-of-tomorrows-world.vercel.app/",
          },
          {
            label: "GitHub Repo - 01",
            href: "https://github.com/Dimterion/PoTW",
          },
          {
            label: "Live Version - 02",
            href: "https://profound-cat-a609de.netlify.app/",
          },
          {
            label: "GitHub Repo - 02",
            href: "https://github.com/Dimterion/PoTW-GO/",
          },
        ],
        image: {
          link: potwMainImg,
          description: "Interactive text adventures cover image",
        },
      },
    ],
  },
  posts: {
    title: "Latest Posts",
    cta: "All posts",
    noPostsFound: "No posts found.",
    readMore: "Read more",
    items: [
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
      {
        id: "post-03",
        slug: "post-03",
        featured: true,
        label: "Post 03 Label",
        title: "Post 03 Title",
        description: "Post 03 description.",
        date: "2026-03-28",
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
        id: "post-04",
        slug: "post-04",
        featured: true,
        label: "Post 04 Label",
        title: "Post 04 Title",
        description: "Post 04 description.",
        date: "2026-04-28",
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
    ] satisfies PostsMeta[],
  },
};
