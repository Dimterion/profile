import type { Route } from "./+types";
import { postsMeta } from "~/data/blog/posts-meta";
import PostCard from "~/components/postCard/PostCard";

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

  return (
    <section className="mx-auto mt-10 max-w-3xl bg-gray-200 p-6">
      <h2 className="mb-8 text-3xl font-bold">Blog</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
