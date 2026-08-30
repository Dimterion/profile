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
    cta: string;
  };
};
