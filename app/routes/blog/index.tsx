import type { Route } from "./+types";
import { postsMeta } from "~/data/blog/posts-meta";
import PostCard from "~/components/postCard/PostCard";
import { useState } from "react";
import Pagination from "~/components/pagination/Pagination";

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
  const sortedPosts = [...postsMeta.en].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return {
    posts: sortedPosts,
  };
}

export default function BlogPage({ loaderData }: Route.ComponentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { posts } = loaderData;

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <section className="mx-auto mt-10 max-w-3xl bg-gray-200 p-6">
      <h2 className="mb-8 text-3xl font-bold">Blog</h2>
      {currentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </section>
  );
}
