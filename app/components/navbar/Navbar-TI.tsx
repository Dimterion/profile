import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DiamondNavLink from "../diamondNavLink/DiamondNavLink";
import {
  HammerIcon,
  ScrollIcon,
  PortraitFrameIcon,
  FeatherIcon,
  CloseIcon,
  MenuIcon,
} from "~/components/icons";

const navItems = [
  {
    to: "/projects",
    label: "Projects",
    icon: <HammerIcon />,
    position: "top" as const,
    end: true,
  },
  {
    to: "/blog",
    label: "Blog",
    icon: <ScrollIcon />,
    position: "right" as const,
    end: true,
  },
  {
    to: "/about",
    label: "About",
    icon: <PortraitFrameIcon />,
    position: "bottom" as const,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: <FeatherIcon />,
    position: "left" as const,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop navigation */}
      <nav
        aria-label="Primary navigation"
        className="relative m-3 hidden h-18 w-18 md:m-4 md:flex md:h-25 md:w-25"
      >
        {navItems.map((item) => (
          <DiamondNavLink
            key={item.to}
            to={item.to}
            position={item.position}
            label={item.label}
            end={item.end}
          >
            {item.icon}
          </DiamondNavLink>
        ))}
      </nav>

      {/* Mobile navigation */}
      <div className="mb-2 ml-2 inline-flex flex-col-reverse items-center gap-2.5 md:hidden">
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="inline-flex h-7 w-7 shrink-0 rotate-45 items-center justify-center border"
        >
          <span className="-rotate-45">
            {menuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </span>
        </button>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-col items-center gap-2.5"
          >
            {navItems.map((item) => (
              <DiamondNavLink
                key={item.to}
                to={item.to}
                label={item.label}
                end={item.end}
              >
                {item.icon}
              </DiamondNavLink>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
