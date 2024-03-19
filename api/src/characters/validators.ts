import { z } from 'zod';

export const characterValidator = z.object({
  name: z.string(),
  description: z.string(),
  clearance: z.string(),
  physical: z.array(z.string()),
  mental: z.array(z.string()),
  social: z.array(z.string()),
});

export type Character = z.infer<typeof characterValidator> & {
  id: number;
};