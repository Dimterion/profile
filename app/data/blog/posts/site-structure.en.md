---
id: site-structure
slug: site-structure
label: Site Structure
title: Site Structure
description: Description of the web site structure
date: 2026-09-10
featured: true
stack:
  - React Router
  - TypeScript
  - Tailwind CSS
links:
  - label: GitHub Repo
    href: https://github.com/Dimterion/profile
  - label: Web Site
    href: https://www.dimterion.com
image:
  link: /images/post-01.jpg
  description: Image description
---

# Site Structure

Here is the basic structure for the current site.

```
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
    route("projects/:slug", "./routes/projects/details.tsx"),
    route("blog", "./routes/blog/index.tsx"),
    route("blog/:slug", "./routes/blog/details.tsx"),
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    route("*", "./routes/errors/not-found.tsx"),
  ]),
] satisfies RouteConfig;

```
