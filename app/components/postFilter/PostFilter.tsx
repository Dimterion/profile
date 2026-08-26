import type { PostFilterProps } from "~/types";

export default function PostFilter({
  searchQuery,
  onSearchChange,
}: PostFilterProps) {
  return (
    <div className="bg-blue w-full max-w-96 border p-2 md:max-w-lg md:p-4 lg:max-w-2xl xl:max-w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
        className="bg-grey w-full border px-4 py-2 focus:ring-2 focus:outline-none"
      />
    </div>
  );
}
