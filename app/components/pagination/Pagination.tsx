import type { PaginationProps } from "~/types";

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`m-4 cursor-pointer px-3 py-1 text-white ${currentPage === idx + 1 ? "bg-gray-600" : "bg-gray-400"}`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}
