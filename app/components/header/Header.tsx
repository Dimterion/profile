import { NavLink } from "react-router";
import { HouseIcon } from "./icons";

export default function Header() {
  return (
    <header className="fixed top-1 left-1 z-50 md:top-8 md:left-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `inline-flex h-7 w-7 items-center justify-center md:h-10 md:w-10 ${isActive ? "border-2" : "border"}`
        }
      >
        <HouseIcon />
      </NavLink>
    </header>
  );
}
