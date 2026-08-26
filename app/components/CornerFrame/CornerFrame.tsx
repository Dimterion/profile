import type { ReactNode } from "react";

type CornerFrameProps = {
  children: ReactNode;
  className?: string;
};

export default function CornerFrame({
  children,
  className = "",
}: CornerFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="border-white pointer-events-none absolute top-1 left-1 h-8 w-8 border-t border-l"
      />

      <span
        aria-hidden="true"
        className="border-white pointer-events-none absolute top-1 right-1 h-8 w-8 border-t border-r"
      />

      <span
        aria-hidden="true"
        className="border-white pointer-events-none absolute bottom-1 left-1 h-8 w-8 border-b border-l"
      />

      <span
        aria-hidden="true"
        className="border-white pointer-events-none absolute right-1 bottom-1 h-8 w-8 border-r border-b"
      />

      {children}
    </div>
  );
}
