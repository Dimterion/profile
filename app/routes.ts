import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/home.tsx", [index("./routes/home/index.tsx")]),

  layout("./routes/layouts/main.tsx", [
    route("projects", "./routes/projects/index.tsx"),
    route("posts", "./routes/posts/index.tsx"),
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
  ]),
] satisfies RouteConfig;
