import DiamondNavLink from "./DiamondNavLink";
import {
  HammerIcon,
  ScrollIcon,
  PortraitFrameIcon,
  FeatherIcon,
} from "./icons";

export default function Navbar() {
  return (
    <nav className="fixed right-8 bottom-8 z-50 h-25 w-25">
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
