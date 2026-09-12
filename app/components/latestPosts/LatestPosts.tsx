import type { Post } from "~/types";
import { useContent } from "~/hooks/useContent";
import CornerFrame from "../shared/CornerFrame/CornerFrame";
import PostCard from "../shared/PostCard/PostCard";
import PageLinkBtn from "../shared/PageLinkBtn/PageLinkBtn";

export default function LatestPosts({
  posts,
  limit = 3,
}: {
  posts: Post[];
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
      {latest.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <PageLinkBtn link="/blog" label={t.blog.cta} />
    </CornerFrame>
  );
}
