import { z } from 'zod';

// Character validator for the post request
// also used to type the data in the database
export const characterValidator = z.object({
  name: z.string(), // name of the character
  profession: z.string(), // description of the character
  clearance: z.string(), // clearance of the character (public, secret, top secret)
  physical: z.array(z.string()), // physical characteristics of the character
  mental: z.array(z.string()), // mental characteristics of the character
  social: z.array(z.string()), // social characteristics of the character
});

// Inferred type of the character validator
// added id to better handle the data in the database
export type Character = z.infer<typeof characterValidator> & {
  id: number;
};