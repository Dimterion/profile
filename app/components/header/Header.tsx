import { NavLink } from "react-router";
import { HouseIcon } from "../icons";
import type { HeaderProps } from "~/types";
import DiamondImg from "../DiamondImg/DiamondImg";
import profileImg from "../../assets/images/profile_img.png";

export default function Header({ showPortrait = false }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-50 flex flex-col gap-1 p-1 md:flex-row md:items-center">
      {showPortrait && (
        <DiamondImg link={profileImg} alt="Dmitrii's profile picture." />
      )}

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `bg-blue mr-1 ml-1.5 inline-flex h-5 w-5 rotate-45 items-center justify-center border md:mr-0 md:ml-0 md:h-7 md:w-7 ${
            !showPortrait ? "mt-1 md:ml-1" : ""
          } ${isActive ? "border-gold text-gold border-2" : "border-white"}`
        }
      >
        <span className="-rotate-45">
          <HouseIcon className="mb-0.5 h-4 w-4 md:mb-0 md:h-5 md:w-5" />
        </span>
      </NavLink>
    </header>
  );
}
