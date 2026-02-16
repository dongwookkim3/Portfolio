import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	project: defineCollection({
		loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}', }),
		schema: z.object({
			title: z.string(),
			projectName: z.string(),
			category: z.enum(['robot', 'embedded', 'software', 'etc']).default('etc'),
			status: z.enum(['완료', '진행중']),
			published: z.boolean().default(true),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			role: z.string().optional(),
			github: z.string().url().optional(),
		}),
	}),
};
