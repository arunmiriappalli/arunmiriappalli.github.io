# arunmiriappalli.com

Personal site — blog, résumé, and projects. Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Adding a blog post

Add a new markdown file to `src/content/blog/`:

```md
---
title: Post Title
date: 2026-01-01
description: One or two sentences — used for the index page, meta description, and RSS.
tags: [tag-one, tag-two]
mediumUrl: https://medium.com/@you/post-slug   # optional, if cross-posted
---

Post body in markdown.
```

This site is the canonical source — if you cross-post to Medium, set the canonical URL over there to point back here, and use `mediumUrl` above to link out to the Medium copy.

## Adding a project

Add a markdown file to `src/content/projects/` (see `example-project.md` for the shape).

## Deployment

Pushing to `master` builds and deploys via `.github/workflows/deploy.yml`. One-time setup:

1. In repo Settings → Pages, set source to "GitHub Actions".
2. Point DNS for `arunmiriappalli.com` at GitHub Pages.
3. Once you have a GA4 property, add its Measurement ID as a repo variable named `PUBLIC_GA_MEASUREMENT_ID` (Settings → Secrets and variables → Actions → Variables) to enable analytics.
