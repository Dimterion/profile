import { NavLink } from "react-router";
import type { ReactNode } from "react";

type DiamondNavLinkProps = {
  to: string;
  position: "top" | "right" | "bottom" | "left";
  children: ReactNode;
};

const positionClasses: Record<DiamondNavLinkProps["position"], string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  left: "top-1/2 left-0 -translate-y-1/2",
};

export default function DiamondNavLink({
  to,
  position,
  children,
}: DiamondNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={`absolute inline-flex h-10 w-10 rotate-45 items-center justify-center border ${positionClasses[position]}`}
    >
      <span className="inline-flex -rotate-45">{children}</span>
    </NavLink>
  );
}
