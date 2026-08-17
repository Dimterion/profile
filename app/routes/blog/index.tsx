import type { Route } from "./+types";
import { postsMeta } from "~/data/blog/posts-meta";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Dimterion" },
    {
      name: "description",
      content: "Dimterion's blog.",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  return {
    posts: postsMeta.en,
  };
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;
  console.log(posts);

  return <>Blog page</>;
}
