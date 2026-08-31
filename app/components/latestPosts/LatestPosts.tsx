import { Link } from "react-router";
import { ArrowRightIcon } from "../icons";
import { dateFormatter } from "~/utils";
import CornerFrame from "../CornerFrame/CornerFrame";
import { useContent } from "~/hooks/useContent";

export default function LatestPosts({ limit = 3 }: { limit?: number }) {
  const { t } = useContent();

  const sorted = [...t.posts.items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latest = sorted.slice(0, limit);

  return (
    <CornerFrame className="bg-blue flex min-h-screen w-full max-w-96 flex-col items-center justify-center gap-8 border px-2 py-4 md:max-w-lg md:p-10 lg:max-w-2xl xl:max-w-full">
      <h2 className="text-center text-lg font-bold uppercase md:text-xl">
        {t.blog.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {latest.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.id}
            className="bg-dark-blue hover:border-gold hover:text-gold block border p-4 transition"
          >
            <h3 className="mb-1 font-semibold md:text-lg">{post.title}</h3>

            <p>{post.description}</p>

            <div className="flex items-center justify-between">
              <time dateTime={post.date} className="mt-1 text-sm">
                {dateFormatter.format(new Date(post.date))}
              </time>

              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>

      <Link
        className="bg-dark-blue hover:text-gold hover:border-gold mx-auto w-fit border px-4 pt-0.5 pb-1 text-center text-sm uppercase transition"
        to="/blog"
      >
        {t.blog.cta}
      </Link>
    </CornerFrame>
  );
}
