import { Link } from "react-router";
import type { LatestPostsProps } from "~/types";

export default function LatestPosts({ posts, limit = 3 }: LatestPostsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-bold">Latest Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="block border p-4 transition hover:shadow-md"
          >
            <h3 className="mb-1 text-lg font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
