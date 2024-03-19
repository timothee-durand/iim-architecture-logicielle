import { z } from 'zod';

export interface BriefHistory {
  id: number;
  news: string;
  creationDate: Date;
  brief: Brief;
}

let schema = z.object({
  name: z.string(),
  description: z.string(),

});
export const briefValidator = z.object({
  title: z.string(),
  context: z.string(),
  objectives: z.string(),
  stakes: z.string(),
  enemies: z.array(schema),
  allies: z.array(schema),
  resources: z.string(),
  constraints: z.string(),
  rewards: z.string(),
  stages: z.array(z.string()),
});

export type Brief = z.infer<typeof briefValidator>;