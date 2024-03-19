import { initCharacterTable } from './characters';
import { PostgreClient } from './services/PostgreClient';

export async function initDatabase(){
  PostgreClient.getInstance();
  await initCharacterTable();
}