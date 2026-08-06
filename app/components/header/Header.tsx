import profileImg from "../../assets/images/profile_img.png";
import DiamondNavLink from "../navbar/DiamondNavLink";
import { HouseIcon } from "./icons";

export default function Header() {
  return (
    <header className="inline-flex justify-between p-2 md:p-4">
      <img
        src={profileImg}
        alt="Profile image"
        className="h-20 w-20 md:h-30 md:w-30"
      />
      <DiamondNavLink to="/" label="Home">
        <HouseIcon />
      </DiamondNavLink>
    </header>
  );
}
