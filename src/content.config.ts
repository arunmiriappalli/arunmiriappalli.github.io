import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Set only if this post's canonical home is elsewhere.
    canonicalUrl: z.string().url().optional(),
    // Cross-post link, e.g. "Also published on Medium".
    mediumUrl: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
