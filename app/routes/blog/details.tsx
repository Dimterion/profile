import type { Route } from "./+types";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: "Blog | Dimterion" },
    {
      name: "description",
      content: "Dimterion's blog.",
    },
  ];
}

export default function BlogDetailsPage() {
  return <div>Blog</div>;
}
