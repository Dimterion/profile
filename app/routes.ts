import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("projects", "./routes/projects/index.tsx"),
  route("posts", "./routes/posts/index.tsx"),
  route("about", "./routes/about/index.tsx"),
  route("contact", "./routes/contact/index.tsx"),
] satisfies RouteConfig;
