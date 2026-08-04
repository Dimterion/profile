import { NavLink } from "react-router";
import { HouseIcon } from "./icons";

export default function Header() {
  return (
    <header>
      <NavLink
        to="/"
        end
        aria-label="Home"
        className={({ isActive }) =>
          `m-1 inline-flex h-7 w-7 items-center justify-center md:h-10 md:w-10 ${isActive ? "border-2" : "border"}`
        }
      >
        <HouseIcon />
      </NavLink>
    </header>
  );
}
