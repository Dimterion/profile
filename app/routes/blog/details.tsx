import { data, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

import type { Route } from "./+types/details";
import type { BlogDetailsPageProps, PostsMeta } from "~/types";

import { useContent } from "~/hooks/useContent";
import { ArrowLeftIcon } from "~/components/icons";

const postFiles = import.meta.glob<string>("../../data/blog/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function meta({ loaderData }: Route.MetaArgs) {
  const { postEn, postFr } = loaderData || {};
  const post = postEn ?? postFr;

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
  const slug = params.slug;

  const filePathEn = `../../data/blog/posts/${slug}.en.md`;
  const filePathFr = `../../data/blog/posts/${slug}.fr.md`;

  const rawEn = postFiles[filePathEn] as string | undefined;
  const rawFr = postFiles[filePathFr] as string | undefined;

  if (!rawEn && !rawFr) {
    throw data("Post not found", { status: 404 });
  }

  const parsePost = (raw: string): PostsMeta => {
    const { data, content } = matter(raw);
    return {
      ...(data as unknown as PostsMeta),
    };
  };

  const postEn = rawEn ? parsePost(rawEn) : undefined;
  const postFr = rawFr ? parsePost(rawFr) : undefined;

  const contentEn = rawEn ? matter(rawEn).content : "";
  const contentFr = rawFr ? matter(rawFr).content : "";

  return {
    postEn,
    postFr,
    contentEn,
    contentFr,
  };
}

export default function BlogDetailsPage({ loaderData }: BlogDetailsPageProps) {
  const { t, currentLang } = useContent();
  const { postEn, postFr, contentEn, contentFr } = loaderData;

  const post = currentLang === "fr" ? postFr : postEn;
  const content = currentLang === "fr" ? contentFr : contentEn;

  const resolvedPost = post ?? postEn ?? postFr;
  const resolvedContent = content ?? contentEn ?? contentFr;

  if (!resolvedPost || !resolvedContent) {
    return (
      <div className="space-y-2 text-center">
        <div className="text-lg">Post not found.</div>
        <Link to="/blog" className="underline">
          Back to blog
        </Link>
      </div>
    );
  }

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(resolvedPost.date));

  return (
    <section className="w-full max-w-96 space-y-4 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <Link
        to="/blog"
        className="md:text-md flex w-fit items-center gap-2 border p-2 text-sm"
      >
        <ArrowLeftIcon /> {t.posts.backToBlog ?? "Back to blog"}
      </Link>

      <article className="bg-blue grid items-start gap-2 border p-2">
        <header className="not-prose mb-8 space-y-2 border-b">
          <p className="text-sm">{resolvedPost.label}</p>
          <h1 className="text-4xl font-bold">{resolvedPost.title}</h1>
          <p>{resolvedPost.description}</p>
          <time dateTime={resolvedPost.date} className="mb-2 block text-sm">
            {formattedDate}
          </time>
        </header>

        <div className="prose prose-invert mb-12 max-w-none">
          <ReactMarkdown>{resolvedContent}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
}
