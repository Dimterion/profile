import DiamondNavLink from "./DiamondNavLink";
import {
  HammerIcon,
  ScrollIcon,
  PortraitFrameIcon,
  FeatherIcon,
} from "./icons";

export default function Navbar() {
  return (
    <nav className="fixed right-4 bottom-4 z-50 md:h-25 md:w-25 h-18 w-18 md:right-8 md:bottom-8">
      <DiamondNavLink to="/projects" position="top">
        <HammerIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/posts" position="right">
        <ScrollIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/about" position="bottom">
        <PortraitFrameIcon />
      </DiamondNavLink>
      <DiamondNavLink to="/contact" position="left">
        <FeatherIcon />
      </DiamondNavLink>
    </nav>
  );
}
