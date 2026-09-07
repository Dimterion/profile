import type { CornerFrameProps } from "~/types";

export default function CornerFrame({
  children,
  className = "",
}: CornerFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1 left-1 h-8 w-8 border-t border-l border-white"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1 right-1 h-8 w-8 border-t border-r border-white"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 left-1 h-8 w-8 border-b border-l border-white"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-1 bottom-1 h-8 w-8 border-r border-b border-white"
      />

      {children}
    </div>
  );
}
