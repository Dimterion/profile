import { Link } from "react-router";
import type { PostsMeta } from "~/types";

export default function PostCard({ post }: { post: PostsMeta }) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="bg-dark-blue border p-6 shadow">
      <h3 className="text-2xl font-semibold">{post.title}</h3>
      <time dateTime={post.date} className="mb-2 block text-sm">
        {formattedDate}
      </time>
      <p className="mb-4">{post.description}</p>
      <Link to={`/blog/${post.slug}`} className="text-sm hover:underline">
        Read More
      </Link>
    </article>
  );
}
