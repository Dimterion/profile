import { NavLink } from "react-router";
import { HouseIcon } from "./icons";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <HouseIcon />
      </NavLink>
    </header>
  );
}
