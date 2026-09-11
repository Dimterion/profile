import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import type { HeaderProps } from "~/types";
import { ChevronUpIcon, HouseIcon } from "../shared/icons";
import DiamondImg from "../shared/DiamondImg/DiamondImg";
import profileImg from "~/assets/images/profile_img.png";

export default function Header({ showPortrait = false }: HeaderProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleHomeClick = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-col gap-1 px-1 md:flex-row md:items-center md:p-1">
      {showPortrait && (
        <DiamondImg link={profileImg} alt="Dmitrii's profile picture." />
      )}

      <NavLink
        to="/"
        end
        aria-label={isScrolled ? "Scroll to top" : "Home page"}
        onClick={handleHomeClick}
        className={({ isActive }) =>
          `bg-blue hover:border-gold hover:text-gold mr-1 ml-1.5 inline-flex h-5 w-5 rotate-45 items-center justify-center border md:mr-0 md:ml-0 md:h-7 md:w-7 ${
            !showPortrait ? "mt-1 md:ml-1" : ""
          } ${isActive ? "border-gold text-gold border-2" : "border-white"}`
        }
      >
        <span className="-rotate-45">
          {isScrolled ? (
            <ChevronUpIcon className="mt-0.5 h-4 w-4 md:h-5 md:w-5" />
          ) : (
            <HouseIcon className="mb-0.5 h-4 w-4 md:mb-0 md:h-5 md:w-5" />
          )}
        </span>
      </NavLink>
    </header>
  );
}
