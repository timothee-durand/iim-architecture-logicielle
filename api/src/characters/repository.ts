import { PostgreClient } from '../services/PostgreClient';
import { Character } from './validators';

export async function initCharacterTable(): Promise<void> {
  const client = PostgreClient.getInstance().client;
  await client.query(`
      CREATE TABLE IF NOT EXISTS characters
      (
          id
          SERIAL
          PRIMARY
          KEY,
          name
          TEXT
          NOT
          NULL,
          description
          TEXT
          NOT
          NULL,
          clearance
          TEXT
          NOT
          NULL,
          physical
          TEXT[]
          NOT
          NULL,
          mental
          TEXT[]
          NOT
          NULL,
          social
          TEXT
      []
          NOT
          NULL
      );
  `);
}

export async function getCharacter(id: string): Promise<Character | undefined> {
  const client = PostgreClient.getInstance().client;
  const result = await client.query<Character>(`
      SELECT *
      FROM characters
      WHERE id = $1
  `, [id]);
  return result.rows[0];
}

export async function listCharacters(): Promise<Character[]> {
  const client = PostgreClient.getInstance().client;
  const result = await client.query<Character>(`
      SELECT *
      FROM characters
  `);
  return result.rows;
}

export async function createCharacter(character: Omit<Character, 'id'>): Promise<void> {
  const client = PostgreClient.getInstance().client;
  await client.query<Character>(`
      INSERT INTO characters (name, description, clearance, physical, mental, social)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `, [character.name, character.description, character.clearance, character.physical, character.mental, character.social]);
}

export async function updateCharacter(id: string, character: Omit<Character, 'id'>): Promise<void> {
  const client = PostgreClient.getInstance().client;
  const result = await client.query<Character>(`
      UPDATE characters
      SET name        = $1,
          description = $2,
          clearance   = $3,
          physical    = $4,
          mental      = $5,
          social      = $6
      WHERE id = $7
  `, [character.name, character.description, character.clearance, character.physical, character.mental, character.social, id]);
  if (result.rowCount === 0) {
    throw new Error('Character not found');
  }
}

export async function deleteCharacter(id: string): Promise<void> {
  const client = PostgreClient.getInstance().client;
  await client.query<Character>(`
      DELETE
      FROM characters
      WHERE id = $1
  `, [id]);
}
