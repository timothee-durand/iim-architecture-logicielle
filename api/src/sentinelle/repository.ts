import { PostgreClient } from '../services/PostgreClient';
import { BriefHistory } from './validator';

/**
 * Initialize the database connection and create table if don't exist
 */
export async function initBriefHistoryTable() : Promise<void> {
  const { client } = PostgreClient.getInstance();
  await client.query(`
    CREATE TABLE IF NOT EXISTS briefs_history
    (
      id SERIAL PRIMARY KEY,
      news TEXT NOT NULL,
      creationDate DATE NOT NULL,
      brief json NOT NULL
    );
  `);
}

/**
 * Save the brief history into the database
 * @param brief BriefHistory
 */
export async function saveBriefHistory(brief: Omit<BriefHistory, 'creationDate' | 'id'>): Promise<void> {
  const { client } = PostgreClient.getInstance();
  await client.query(`
    INSERT INTO briefs_history (news, creationDate, brief)
    VALUES ($1, $2, $3)
  `, [brief.news, new Date().toISOString(), JSON.stringify(brief.brief)]);
}

/**
 * List all the brief history from the database
 */
export async function listBriefHistory(): Promise<BriefHistory[]> {
  const { client } = PostgreClient.getInstance();
  const result = await client.query<BriefHistory>(`
    SELECT *
    FROM briefs_history
  `);
  return result.rows;
}
