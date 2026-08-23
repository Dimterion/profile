import { NavLink } from "react-router";
import profileImg from "../../assets/images/profile_img.png";
import { HouseIcon } from "../icons";
import type { HeaderProps } from "~/types";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function Header({ showPortrait = false }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-1 p-1 md:justify-start">
      {showPortrait && (
        <div
          className="relative h-10 w-10 shrink-0 md:h-20 md:w-20"
          aria-label="Profile image"
        >
          <div className="absolute inset-0 bg-current" style={diamondClip} />

          <div
            className="absolute inset-px overflow-hidden"
            style={diamondClip}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <NavLink
        to="/"
        className={`mr-1 inline-flex h-5 w-5 rotate-45 items-center justify-center border md:mr-0 md:h-7 md:w-7 ${!showPortrait && "mt-1 ml-1"}`}
      >
        <span className="inline-flex -rotate-45">
          <HouseIcon className="mb-0.5 h-4 w-4 md:mb-0 md:h-5 md:w-5" />
        </span>
      </NavLink>
    </header>
  );
}
