import ReactMarkdown from "react-markdown";
import { data, Link } from "react-router";
import type { Route } from "./+types/details";
import { postsMeta } from "~/data/blog/posts-meta";
import type { BlogDetailsPageProps } from "~/types";

const postFiles = import.meta.glob<string>("../../data/blog/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function meta({ loaderData }: Route.MetaArgs) {
  const post = loaderData?.post;

  return [
    {
      title: post ? `${post.title} | Dimterion` : "Post not found | Dimterion",
    },
    {
      name: "description",
      content: post?.description ?? "The requested post could not be found.",
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const post = postsMeta.en.find((item) => item.slug === params.slug);

  if (!post) {
    throw data("Post not found", { status: 404 });
  }

  const filePath = `../../data/blog/posts/${post.slug}.md`;
  const content = postFiles[filePath];

  if (!content) {
    throw data("Post content not found", { status: 404 });
  }

  return {
    post,
    content,
  };
}

export default function BlogDetailsPage({ loaderData }: BlogDetailsPageProps) {
  const { post, content } = loaderData;

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <article className="prose mx-auto mt-10 max-w-3xl">
      <Link to="/blog" className="not-prose underline">
        Back to blog
      </Link>

      <header className="not-prose mb-8">
        <p className="text-sm text-gray-600">{post.label}</p>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p>{post.description}</p>
        <time dateTime={post.date} className="mb-2 block text-sm">
          {formattedDate}
        </time>
      </header>

      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
