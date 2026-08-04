import DiamondNavLink from "./DiamondNavLink";
import {
  HammerIcon,
  ScrollIcon,
  PortraitFrameIcon,
  FeatherIcon,
} from "./icons";

export default function Navbar() {
  return (
    <nav className="relative m-3 h-18 w-18 md:m-4 md:h-25 md:w-25">
      <DiamondNavLink to="/projects" position="top" label="Projects">
        <HammerIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/posts" position="right" label="Posts">
        <ScrollIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/about" position="bottom" label="About">
        <PortraitFrameIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/contact" position="left" label="Contact">
        <FeatherIcon />
      </DiamondNavLink>
    </nav>
  );
}
