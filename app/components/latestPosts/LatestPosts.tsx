import { Link } from "react-router";
import type { LatestPostsProps } from "~/types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function LatestPosts({ posts, limit = 3 }: LatestPostsProps) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latest = sorted.slice(0, limit);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-2xl font-bold">Latest Posts</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latest.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="block border p-4 transition hover:shadow-md"
          >
            <h3 className="mb-1 text-lg font-semibold">{post.title}</h3>

            <p className="text-sm">{post.description}</p>

            <time dateTime={post.date} className="text-sm text-gray-600">
              {dateFormatter.format(new Date(post.date))}
            </time>
          </Link>
        ))}
      </div>
    </section>
  );
}
