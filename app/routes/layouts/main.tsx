import { Outlet } from "react-router";
import SiteLayout from "./site";
import type { Route } from "../home/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dimterion" },
    { name: "description", content: "Dimterion's profile" },
  ];
}

export default function MainLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
