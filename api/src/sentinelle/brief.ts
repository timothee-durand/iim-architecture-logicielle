import { z } from 'zod';
import { OllamaClient } from '../services/OllamaClient';

// validator for the request
export const generateBriefRequestValidator = z.object({
  news: z.string(), // the news to generate the brief
  characterNumber: z.number(), // the number of character in the brief
});

// inferred type of the request validator
export type GenerateBriefRequest = z.infer<typeof generateBriefRequestValidator>


/**
 * Return an invented story from the given news
 * @param news string
 * @returns string
 */
async function getNewsAsStory(news: string): Promise<string> {
  const prompt = `
  Using the news item given below, invent a story to make it extraordinary. 
  The story must involve spies from an agency outside France. 
  It can be about an assassination, a theft of goods or information, an infiltration of an agent, a story about influence, fake news... 
  It can take place at any point in real history. 
  Your answer should contain only the invented story, avoiding stylistic effects.
  Here's the story: ${news}`;
  return await OllamaClient.getInstance().chat(prompt);
}

/**
 * Return a brief for a JDR from the given story
 * @param story string
 * @param characterNumber number
 * @returns string
 */
async function getStoryAsBrief(story: string, characterNumber: number): Promise<string> {
  const prompt = `
    From the story below, create a brief for a JDR. 
    The brief should be complete and detailed. 
    The response should strictly follow this JSON schema:
 {
 "title": string,
    "context": string,
    "objectives": string,
    "stakes": string,
    "enemies": {name:string, description: string}[],
    "allies": {name:string, description:string}[],
    "resources": string,
    "constraints": string,
    "rewards": string,
    "stages": string[]
  }
    
    There should be at least ${characterNumber} protagonist in the brief.
    
    Here's the story: ${story}`;
  return await OllamaClient.getInstance().chat(prompt);
}

/**
 * Generate a brief from the given news
 * @param request GenerateBriefRequest
 * @returns string
 */
export async function generateBrief(request: GenerateBriefRequest) {
  const story = await getNewsAsStory(request.news);
  const result = await getStoryAsBrief(story, request.characterNumber);
  return result;
}