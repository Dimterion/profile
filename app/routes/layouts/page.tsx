import { Outlet } from "react-router";
import SiteLayout from "./site";

export default function PageLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
