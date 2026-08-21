import { NavLink } from "react-router";
import profileImg from "../../assets/images/profile_img.png";
import { HouseIcon } from "../icons";

const diamondClip = {
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
};

export default function Header() {
  return (
    <header className="flex items-center gap-1">
      <div
        className="relative h-20 w-20 shrink-0 "
        aria-label="Profile image"
      >
        <div className="absolute inset-0 bg-current" style={diamondClip} />

        <div className="absolute inset-px overflow-hidden" style={diamondClip}>
          <img
            src={profileImg}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <NavLink
        to="/"
        className="inline-flex h-7 w-7 rotate-45 items-center justify-center border"
      >
        <span className="inline-flex -rotate-45">
          <HouseIcon />
        </span>
      </NavLink>
    </header>
  );
}
