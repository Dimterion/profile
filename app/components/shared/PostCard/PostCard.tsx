import { Link } from "react-router";
import type { PostsMeta } from "~/types";
import { useContent } from "~/hooks/useContent";
import { ArrowRightIcon } from "../icons";

export default function PostCard({ post }: { post: PostsMeta }) {
  const { t } = useContent();

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="bg-dark-blue w-full border p-6 shadow">
      <h3 className="text-sm font-semibold md:text-base">{post.title}</h3>
      <time dateTime={post.date} className="mt-2 mb-2 block text-xs">
        {formattedDate}
      </time>
      <p className="mt-4 mb-6 text-sm">{post.description}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-4 text-sm hover:underline"
      >
        {t.posts.readMore} <ArrowRightIcon className="h-3 w-3 md:h-5 md:w-5" />
      </Link>
    </article>
  );
}
