import { NavLink } from "react-router";
import { HouseIcon } from "./icons";

export default function Header() {
  return (
    <header className="fixed top-8 left-8 z-50 h-25 w-25">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `inline-flex h-10 w-10 items-center justify-center ${isActive ? "border-2" : "border"}`
        }
      >
        <HouseIcon />
      </NavLink>
    </header>
  );
}
