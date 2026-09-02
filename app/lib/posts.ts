import matter from "gray-matter";
import type { PostsMeta } from "~/types";

type PostFiles = Record<string, string>;

export function parsePostsFromGlob(
  postFiles: PostFiles,
  lang: "en" | "fr",
): PostsMeta[] {
  const posts: PostsMeta[] = [];

  Object.entries(postFiles).forEach(([path, raw]) => {
    if (!path.endsWith(`.${lang}.md`)) return;

    const { data } = matter(raw as string);
    const post = data as unknown as PostsMeta;

    if (!post || !post.date) return;

    const time = new Date(post.date as any).getTime();
    if (Number.isNaN(time)) return;

    posts.push(post);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
