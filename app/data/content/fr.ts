import type { ContentShape, PostsMeta } from "~/types";

import ispMainImg from "~/assets/images/isp_main_img.png";
import personalSiteMainImg from "~/assets/images/personal_site_main_img.png";
import storiesSiteMainImg from "~/assets/images/stories_site_main_img.png";
import mediumProfileMainImg from "~/assets/images/medium_profile_main_img.png";
import githubProfileMainImg from "~/assets/images/github_profile_main_img.png";
import potwMainImg from "~/assets/images/potw_main_img.png";

export const fr: ContentShape = {
  meta: {
    title: "Dimterion | Profil",
    description: "Profil de Dimterion",
  },
  hero: {
    name: "Dmitrii | Dimterion",
    bio: "Consultant technique, spécialiste du support produit et développeur avec plus de 10 ans d'expérience dans les industries du jeu vidéo et de la finance.",
    links: {
      work: "Travaux",
      posts: "Articles",
      about: "À propos",
      contact: "Contact",
    },
  },
  work: {
    title: "Travaux",
    cta: "Tous les projets",
  },
  blog: {
    title: "Derniers articles",
    cta: "Tous les articles",
  },
  about: {
    title: "Profil",
    overviewTitle: "Aperçu",
    overviewText:
      "Je contribue à GitHub quotidiennement, je publie sur Medium chaque semaine, je suis tout ce que je lis, regarde et joue, et je prends le temps chaque jour d'apprendre et d'écrire.",
    highlightsTitle: "Points forts",
    highlights: [
      "Séquence de contributions GitHub quotidiennes : plus de 4 ans.",
      "Articles Medium hebdomadaires tous les vendredis : plus de 4 ans.",
      "Séquence Duolingo : plus de 4 400 jours.",
    ],
    skillsTitle: "Compétences",
    skills: [
      "Développement web",
      "Consulting technique",
      "QA",
      "Tests",
      "Conception web",
      "Rédaction technique",
      "Documentation",
    ],
    cta: "À propos",
  },
  contact: {
    title: "Contact",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    subjectLabel: "Objet",
    messageLabel: "Message",
    sendButton: "Envoyer le message",
    successMessage: "Formulaire envoyé",
    errors: {
      nameRequired: "Le nom est requis",
      emailRequired: "L’e-mail est requis",
      emailInvalid: "Format d’e-mail invalide",
      subjectRequired: "L’objet est requis",
      messageRequired: "Le message est requis",
    },
  },
  projects: {
    viewProject: "Voir le projet",
    backToProjects: "Retour aux projets",
    items: [
      {
        id: "project-01",
        slug: "interactive-stories-platform",
        buttonLabel: "1",
        featured: true,
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
        featured: true,
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
  posts: {
    title: "Derniers articles",
    cta: "Tous les articles",
    noPostsFound: "Aucun article trouvé.",
    readMore: "Lire la suite",
    backToBlog: "Retour aux articles",
  },
};
