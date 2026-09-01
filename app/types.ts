import type { ReactNode } from "react";

export type SiteLayoutProps = {
  children: ReactNode;
  showPortrait?: boolean;
  noTopBottomPadding?: boolean;
};

export type IconProps = {
  className?: string;
};

export type HeaderProps = {
  showPortrait?: boolean;
};

export type Project = {
  id: string;
  slug: string;
  buttonLabel: string;
  featured?: boolean;
  label: string;
  title: string;
  description: string;
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
  image: {
    link: string;
    description: string;
  };
};

export type Position = "top" | "right" | "bottom" | "left";

export type DiamondNavLinkProps = {
  to: string;
  position?: Position;
  label: string;
  end?: boolean;
  children: ReactNode;
};

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

export type PostsMetaLink = {
  label: string;
  href: string;
};

export type PostsMetaImage = {
  link: string;
  description: string;
};

export type PostsMeta = {
  id: string;
  slug: string;
  featured: boolean;
  label: string;
  title: string;
  description: string;
  date: string;
  stack: string[];
  links: PostsMetaLink[];
  image: PostsMetaImage;
};

export type PostsByLanguage = {
  en: PostsMeta[];
  fr: PostsMeta[];
};

export type BlogDetailsPageProps = {
  loaderData: {
    post: PostsMeta;
    content: string;
  };
};

export type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export type LatestPostsProps = {
  posts: PostsMeta[];
  limit?: number;
};

export type DiamondImgProps = {
  link: string;
  alt: string;
  style?: string;
};

export type CornerFrameProps = {
  children: ReactNode;
  className?: string;
};

export type ContentShape = {
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
    items: Project[];
  };
  posts: {
    readMore: string;
    items: PostsMeta[];
    title: string;
    cta: string;
    noPostsFound: string;
  };
};
