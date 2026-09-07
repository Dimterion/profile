import { Link } from "react-router";
import { ArrowRightIcon } from "../shared/icons";
import { dateFormatter } from "~/utils";
import CornerFrame from "../shared/CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";
import type { PostsMeta } from "~/types";

export default function LatestPosts({
  posts,
  limit = 3,
}: {
  posts: PostsMeta[];
  limit?: number;
}) {
  const { t } = useContent();

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latest = sorted.slice(0, limit);

  return (
    <CornerFrame className="cornerFrame gradient-bg">
      <h2 className="text-center font-bold sm:text-lg md:text-xl">
        {t.blog.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {latest.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="group bg-dark-blue hover:border-gold hover:text-gold block border p-4 transition"
          >
            <h3 className="mb-1 text-sm font-semibold md:text-lg">
              {post.title}
            </h3>

            <p className="text-sm md:text-base">{post.description}</p>

            <div className="flex items-center justify-between">
              <time dateTime={post.date} className="mt-1 text-xs">
                {dateFormatter.format(new Date(post.date))}
              </time>

              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <Link
        className="bg-dark-blue hover:border-gold hover:text-gold w-fit min-w-0 border px-4 py-2 text-xs transition md:text-sm"
        to="/blog"
      >
        {t.blog.cta}
      </Link>
    </CornerFrame>
  );
}
