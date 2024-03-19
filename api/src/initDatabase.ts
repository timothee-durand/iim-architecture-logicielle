import { initCharacterTable } from './characters';
import { PostgreClient } from './services/PostgreClient';
import { initBriefHistoryTable } from './sentinelle';

export async function initDatabase(){
  PostgreClient.getInstance();
  await initCharacterTable();
  await initBriefHistoryTable();
}