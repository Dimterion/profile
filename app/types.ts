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
