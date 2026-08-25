import { Link } from "react-router";
import type { LatestPostsProps } from "~/types";
import { ArrowRightIcon } from "../icons";
import { dateFormatter } from "~/utils";

export default function LatestPosts({ posts, limit = 3 }: LatestPostsProps) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latest = sorted.slice(0, limit);

  return (
    <section className="bg-blue mx-auto mt-4 w-full max-w-96 border p-2 md:p-4 lg:max-w-180 xl:max-w-full">
      <h2 className="mb-4 text-center text-lg font-bold md:text-xl">
        Latest Posts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {latest.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="bg-dark-blue block border p-4 transition hover:shadow-md"
          >
            <h3 className="mb-1 font-semibold md:text-lg">{post.title}</h3>

            <p className="text-sm">{post.description}</p>

            <div className="flex items-center justify-between">
              <time dateTime={post.date} className="text-grey text-sm">
                {dateFormatter.format(new Date(post.date))}
              </time>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
