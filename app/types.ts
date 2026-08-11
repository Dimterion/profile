import type { ReactNode } from "react";

export type SiteLayoutProps = {
  children: ReactNode;
  showPortrait?: boolean;
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
