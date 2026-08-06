import type { ReactNode } from "react";
import { NavLink } from "react-router";

type Position = "top" | "right" | "bottom" | "left";

type DiamondNavLinkProps = {
  to: string;
  position?: Position;
  label: string;
  children: ReactNode;
};

const positionClasses: Record<Position, string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

export default function DiamondNavLink({
  to,
  position,
  label,
  children,
}: DiamondNavLinkProps) {
  return (
    <NavLink
      to={to}
      aria-label={label}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "inline-flex h-7 w-7 rotate-45 items-center justify-center",
          "md:h-10 md:w-10",
          position ? "md:absolute" : "",
          position ? positionClasses[position] : "",
          isActive ? "border-2" : "border",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      <span className="inline-flex -rotate-45">{children}</span>
    </NavLink>
  );
}
