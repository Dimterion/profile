import type { HeaderProps } from "~/types";
import profileImg from "../../assets/images/profile_img.png";
import DiamondNavLink from "../diamondNavLink/DiamondNavLink";
import { HouseIcon } from "./icons";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function Header({ showPortrait = false }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gray-200 p-2 md:p-4">
      {showPortrait ? (
        <div
          className="relative h-20 w-20 shrink-0 md:h-30 md:w-30"
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
      ) : (
        <div aria-hidden="true" />
      )}

      <DiamondNavLink to="/" label="Home">
        <HouseIcon />
      </DiamondNavLink>
    </header>
  );
}
