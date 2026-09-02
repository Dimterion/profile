import ReactMarkdown from "react-markdown";
import { data, Link } from "react-router";
import type { Route } from "./+types/details";
import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";
import { useContent } from "~/hooks/useContent";
import type { BlogDetailsPageProps } from "~/types";

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

export async function loader({ params, context }: Route.LoaderArgs) {
  const postEn = en.posts.items.find((item) => item.slug === params.slug);
  const postFr = fr.posts.items.find((item) => item.slug === params.slug);

  if (!postEn && !postFr) {
    throw data("Post not found", { status: 404 });
  }

  const slug = (postEn ?? postFr)!.slug;

  const filePathEn = `../../data/blog/posts/${slug}.en.md`;
  const filePathFr = `../../data/blog/posts/${slug}.fr.md`;

  const contentEn = postFiles[filePathEn];
  const contentFr = postFiles[filePathFr];

  if (!contentEn && !contentFr) {
    throw data("Post content not found", { status: 404 });
  }

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
    return <div>Post not found</div>;
  }

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(resolvedPost.date));

  return (
    <article className="prose mx-auto w-full max-w-96 p-2 text-white md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <Link to="/blog" className="not-prose underline">
        {t.posts.backToBlog ?? "Back to blog"}
      </Link>

      <header className="not-prose mb-8">
        <p className="text-sm">{resolvedPost.label}</p>
        <h1 className="text-4xl font-bold">{resolvedPost.title}</h1>
        <p>{resolvedPost.description}</p>
        <time dateTime={resolvedPost.date} className="mb-2 block text-sm">
          {formattedDate}
        </time>
      </header>

      <div className="prose mb-12 max-w-none">
        <ReactMarkdown>{resolvedContent}</ReactMarkdown>
      </div>
    </article>
  );
}
