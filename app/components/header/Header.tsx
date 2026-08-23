import type { HeaderProps } from "~/types";
import DiamondNavLink from "../DiamondNavLink/DiamondNavLink";
import { HouseIcon } from "~/components/icons";
import DiamondImg from "../diamondImg/DiamondImg";

export default function Header({ showPortrait = false }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-gray-200 p-2 md:p-4">
      {showPortrait ? <DiamondImg /> : <div aria-hidden="true" />}

      <DiamondNavLink to="/" label="Home">
        <HouseIcon />
      </DiamondNavLink>
    </header>
  );
}
