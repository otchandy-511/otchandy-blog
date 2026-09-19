import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // One of the four recurring formats. Keep this list in sync with
    // FORMAT_LABELS in src/lib/formats.ts.
    format: z.enum(['letter', 'mistake', 'built-upon', 'tool']),
    theme: z.enum(['leading-self', 'leading-others']),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
