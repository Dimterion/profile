import { NavLink } from "react-router";
import { HouseIcon } from "./icons";
import profileImg from "../../assets/images/profile_img.png";

export default function Header() {
  return (
    <header className="inline-flex justify-between">
      <img src={profileImg} alt="Profile image" className="h-40 w-40" />
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
