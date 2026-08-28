import { Outlet } from "react-router";
import SiteLayout from "./site";

export default function HomeLayout() {
  return (
    <SiteLayout showPortrait noTopBottomPadding>
      <Outlet />
    </SiteLayout>
  );
}
