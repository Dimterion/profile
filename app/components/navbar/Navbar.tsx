import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import DiamondNavLink from "./DiamondNavLink";
import {
  HammerIcon,
  ScrollIcon,
  PortraitFrameIcon,
  FeatherIcon,
  CloseIcon,
  MenuIcon,
} from "./icons";

const navItems = [
  {
    to: "/projects",
    label: "Projects",
    icon: <HammerIcon />,
    position: "top" as const,
  },
  {
    to: "/posts",
    label: "Posts",
    icon: <ScrollIcon />,
    position: "right" as const,
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
          >
            {item.icon}
          </DiamondNavLink>
        ))}
      </nav>

      {/* Mobile navigation */}
      <div className="m-3 inline-flex gap-1 md:hidden">
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 items-center justify-center border"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="flex flex-row gap-1"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.label}
                className={({ isActive }) =>
                  `inline-flex h-9 w-9 items-center justify-center border ${
                    isActive ? "border-2" : "border"
                  }`
                }
              >
                {item.icon}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
