import { NavLink } from "react-router";
import type { DiamondNavLinkProps, Position } from "~/types";

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
  end = false,
  children,
}: DiamondNavLinkProps) {
  return (
    <NavLink
      to={to}
      end={end || to === "/"}
      aria-label={label}
      className={({ isActive }) =>
        [
          "inline-flex h-5 w-5 rotate-45 items-center justify-center",
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
