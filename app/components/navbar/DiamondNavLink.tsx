import { NavLink } from "react-router";
import type { ReactNode } from "react";

type DiamondNavItemProps = {
  to: string;
  position: "top" | "right" | "bottom" | "left";
  children: ReactNode;
};

const positionClasses: Record<DiamondNavItemProps["position"], string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

export default function DiamondNavItem({
  to,
  position,
  children,
}: DiamondNavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `absolute inline-flex h-10 w-10 rotate-45 items-center justify-center ${
          positionClasses[position]
        } ${isActive ? "border-2" : "border"}`
      }
    >
      <span className="inline-flex -rotate-45">{children}</span>
    </NavLink>
  );
}
