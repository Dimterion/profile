import ispMainImg from "../assets/images/isp_main_img.png";
import personalSiteMainImg from "../assets/images/personal_site_main_img.png";
import storiesSiteMainImg from "../assets/images/stories_site_main_img.png";
import mediumProfileMainImg from "../assets/images/medium_profile_main_img.png";
import githubProfileMainImg from "../assets/images/github_profile_main_img.png";
import potwMainImg from "../assets/images/potw_main_img.png";

export const siteText = {
  en: {
    projects: {
      aria: {
        openDetails: "Open {{title}} details",
        closeModal: "Close modal",
      },

      stackLabel: "Tech stack",

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
          description:
            "Personal website, blog, project space, and contact hub.",
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
  },

  fr: {
    projects: {
      aria: {
        openDetails: "Ouvrir les détails de {{title}}",
        closeModal: "Fermer la fenêtre",
      },

      stackLabel: "Pile technique",

      items: [
        {
          id: "project-01",
          slug: "interactive-stories-platform",
          buttonLabel: "1",
          label: "Narration interactive",
          title: "Plateforme d’histoires interactives",
          description:
            "Un outil pour créer des histoires interactives à embranchements avec plusieurs choix et plusieurs issues.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "Version en ligne",
              href: "https://stories-platform.dimterion.com/",
            },
            {
              label: "Repo GitHub",
              href: "https://github.com/Dimterion/stories-platform",
            },
          ],
          image: {
            link: ispMainImg,
            description:
              "Image de couverture de la plateforme d'histoires interactives",
          },
        },
        {
          id: "project-02",
          slug: "dimterion-com",
          buttonLabel: "2",
          label: "Site personnel",
          title: "dimterion.com",
          description:
            "Site personnel, blog, espace projets et point de contact.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "Version en ligne",
              href: "https://www.dimterion.com/",
            },
            {
              label: "Repo GitHub",
              href: "https://github.com/Dimterion/personal-site",
            },
          ],
          image: {
            link: personalSiteMainImg,
            description: "Image de couverture du site personnel de Dimterion",
          },
        },
        {
          id: "project-03",
          slug: "dimterions-stories",
          buttonLabel: "3",
          label: "Histoires",
          title: "Les histoires de Dimterion",
          description:
            "Un site qui regroupe une collection d’histoires personnelles.",
          stack: ["React", "JavaScript", "CSS"],
          links: [
            {
              label: "Version en ligne",
              href: "https://stories.dimterion.com/",
            },
            {
              label: "Repo GitHub",
              href: "https://github.com/Dimterion/stories-db",
            },
          ],
          image: {
            link: storiesSiteMainImg,
            description: "Image de couverture du site d’histoires de Dimterion",
          },
        },
        {
          id: "project-04",
          slug: "medium-blog",
          buttonLabel: "4",
          label: "Rédaction technique",
          title: "Blog Medium",
          description:
            "Plus de 200 articles publiés chaque semaine sur Medium depuis plus de 4 ans.",
          stack: [],
          links: [
            {
              label: "Blog",
              href: "https://medium.com/@dimterion",
            },
          ],
          image: {
            link: mediumProfileMainImg,
            description: "Image de couverture du blog Medium de Dimterion",
          },
        },
        {
          id: "project-05",
          slug: "daily-contributions-and-ongoing-work",
          buttonLabel: "5",
          label: "Code et développement",
          title: "Contributions quotidiennes et travail en continu",
          description:
            "Plus de 4 ans de contributions quotidiennes sur plusieurs projets, avec une attention constante à l’apprentissage et à l’amélioration.",
          stack: [],
          links: [
            {
              label: "Profil GitHub",
              href: "https://github.com/Dimterion",
            },
          ],
          image: {
            link: githubProfileMainImg,
            description: "Image de couverture du profil GitHub de Dimterion",
          },
        },
        {
          id: "project-06",
          slug: "poets-of-tomorrows-world",
          buttonLabel: "6",
          label: "Aventures textuelles interactives",
          title: "Poets of Tomorrow’s World",
          description:
            "Des projets de fiction interactive avec plusieurs choix et des embranchements narratifs.",
          stack: ["React", "JavaScript", "CSS"],
          links: [
            {
              label: "Version en ligne - 01",
              href: "https://poets-of-tomorrows-world.vercel.app/",
            },
            {
              label: "Repo GitHub - 01",
              href: "https://github.com/Dimterion/PoTW",
            },
            {
              label: "Version en ligne - 02",
              href: "https://profound-cat-a609de.netlify.app/",
            },
            {
              label: "Repo GitHub - 02",
              href: "https://github.com/Dimterion/PoTW-GO/",
            },
          ],
          image: {
            link: potwMainImg,
            description:
              "Image de couverture des aventures textuelles interactives",
          },
        },
      ],
    },
  },
};
