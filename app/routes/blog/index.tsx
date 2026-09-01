import { useEffect, useMemo, useState } from "react";
import type { Route } from "./+types";
import { useContent } from "~/hooks/useContent";
import PostCard from "~/components/PostCard/PostCard";
import Pagination from "~/components/pagination/Pagination";
import PostFilter from "~/components/postFilter/PostFilter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Dimterion" },
    {
      name: "description",
      content: "Dimterion's blog.",
    },
  ];
}

export default function BlogPage() {
  const { t, currentLang } = useContent();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  const posts = useMemo(() => {
    return [...t.posts.items].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [t.posts.items]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentLang]);

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();

    return (
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="font-bold">{t.posts.title}</h2>

      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      <div className="bg-blue w-full max-w-96 space-y-4 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
        {currentPosts.length === 0 ? (
          <p className="text-center">{t.posts.noPostsFound}</p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
