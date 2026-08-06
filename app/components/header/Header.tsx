import profileImg from "../../assets/images/profile_img.png";
import DiamondNavLink from "../navbar/DiamondNavLink";
import { HouseIcon } from "./icons";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-2 md:p-4">
      {/* Profile image */}
      <div
        className="relative h-20 w-20 shrink-0 md:h-30 md:w-30"
        aria-label="Profile image"
      >
        {/* Diamond border/background */}
        <div className="absolute inset-0 bg-current" style={diamondClip} />

        {/* Diamond-shaped image */}
        <div className="absolute inset-0.5 overflow-hidden" style={diamondClip}>
          <img
            src={profileImg}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <DiamondNavLink to="/" label="Home">
        <HouseIcon />
      </DiamondNavLink>
    </header>
  );
}
