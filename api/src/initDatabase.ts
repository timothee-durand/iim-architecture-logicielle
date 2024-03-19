import { initCharacterTable } from './characters';
import { PostgreClient } from './services/PostgreClient';
import { initBriefHistoryTable } from './sentinelle';


/**
 * Initialize the database connection and create table if they don't exist
 */
export async function initDatabase(){
  // Initialize the Postgre client
  await PostgreClient.initDatabase();
  // Initialize the tables
  await initCharacterTable();
  await initBriefHistoryTable();
}