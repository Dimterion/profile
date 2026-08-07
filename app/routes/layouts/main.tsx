import { Outlet } from "react-router";
import SiteLayout from "./site";

export default function MainLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
