import type { PostFilterProps } from "~/types";

export default function PostFilter({
  searchQuery,
  onSearchChange,
}: PostFilterProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
        className="w-full border bg-gray-200 px-4 py-2 focus:ring-2 focus:outline-none"
      />
    </div>
  );
}
