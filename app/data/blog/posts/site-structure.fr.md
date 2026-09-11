---
id: site-structure
slug: site-structure
label: Structure du site
title: Structure du site
description: Description de la structure du site web
date: 2026-09-10
featured: true
stack:
  - React Router
  - TypeScript
  - Tailwind CSS
links:
  - label: Dépôt GitHub
    href: https://github.com/Dimterion/profile
  - label: Site web
    href: https://www.dimterion.com
image:
  link: /images/post-01.jpg
  description: Description de l'image
---

# Structure du site

Voici la structure de base du site actuel.

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
