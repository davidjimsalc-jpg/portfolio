import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writeups = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writeups" }),
  schema: z.object({
    title: z.string().optional(),
    platform: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    difficulty: z.string().optional(),
    summary: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    slug: z.string().optional(),
  }),
});

const cheatsheets = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cheatsheets" }),
  schema: z.object({
    title: z.string().optional(),
    certification: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writeups, cheatsheets };
