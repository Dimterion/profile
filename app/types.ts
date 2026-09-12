import type { ReactNode } from "react";

// =====
// UI Component Props
// =====

export interface IconProps {
  className?: string;
}

export interface HeaderProps {
  showPortrait?: boolean;
}

export interface SiteLayoutProps {
  children: ReactNode;
  showPortrait?: boolean;
  noTopBottomPadding?: boolean;
}

export interface PageLinkBtnProps {
  link: string;
  label: string;
}

export interface DiamondNavLinkProps {
  to: string;
  position?: Position;
  label: string;
  end?: boolean;
  children: ReactNode;
}

export interface DiamondImgProps {
  link: string;
  alt: string;
  style?: string;
}

export interface CornerFrameProps {
  children: ReactNode;
  className?: string;
}

// =====
// Feature-Specific Props
// =====

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface PostFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

// =====
// Domain Models (Data Structures)
// =====

export interface Project {
  id: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  buttonLabel: string;
  featured?: boolean;
  stack: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
  image: {
    link: string;
    description: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  label: string;
  title: string;
  description: string;
  date: string;
  featured: boolean;
  stack: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
  image: {
    link: string;
    description: string;
  };
}

// =====
// Component-Specific Props (using domain models)
// =====

export interface FeaturedProjectsProps {
  projects: Project[];
  count: number;
}

export interface LatestPostsProps {
  posts: Post[];
  limit?: number;
}

export interface BlogDetailsPageProps {
  loaderData: {
    postEn: Post | undefined;
    postFr: Post | undefined;
    contentEn: string;
    contentFr: string;
  };
}

// =====
// Content & Localization
// =====

export type Language = "en" | "fr";

export type Position = "top" | "right" | "bottom" | "left";

export interface ContentShape {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    bio: string;
    links: {
      work: string;
      posts: string;
      about: string;
      contact: string;
    };
  };
  work: {
    title: string;
    cta: string;
  };
  blog: {
    title: string;
    cta: string;
  };
  about: {
    title: string;
    overviewTitle: string;
    overviewText: string;
    highlightsTitle: string;
    highlights: string[];
    skillsTitle?: string;
    skills: string[];
    cta: string;
  };
  contact: {
    title: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButton: string;
    successMessage: string;
    errors: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      messageRequired: string;
    };
  };
  projects: {
    viewProject: string;
    backToProjects: string;
    items: Project[];
  };
  posts: {
    title: string;
    cta: string;
    readMore: string;
    noPostsFound: string;
    backToBlog: string;
    items?: Post[];
  };
}
