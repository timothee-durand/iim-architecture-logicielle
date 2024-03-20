import { z } from 'zod';

/**
 * BriefHistory, type of the database stored object
 */
export interface BriefHistory {
  id: number;
  news: string;
  creationDate: Date;
  brief: Brief;
}


/**
 * Zod validator to validate the result of Mistral before store it into the database and return it to the client
 */
// character is a sub-validator to validate characters in the brief
const character = z.object({
  name: z.string(),
  description: z.string(),
});
// briefValidator is the main validator to validate the brief object
export const briefValidator = z.object({
  title: z.string(), // title of the brief
  context: z.string(), // context of the brief
  objectives: z.array(z.string()), // objectives of the brief
  stakes: z.string(), // stakes of the brief
  enemies: z.array(character), // enemies of the brief
  allies: z.array(character), // allies of the brief
  resources: z.string(), // resources of the brief
  constraints: z.string(), // constraints of the brief
  rewards: z.string(), // rewards of the brief
  stages: z.array(z.string()), // stages of the brief
});
// Brief is the inferred type of the briefValidator
export type Brief = z.infer<typeof briefValidator>;