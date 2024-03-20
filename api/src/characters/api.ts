import { Router } from 'express';
import { createCharacter, deleteCharacter, getCharacter, listCharacters, updateCharacter } from './repository';
import { characterValidator } from './validators';

// router for the characters api
// base path: /characters
export const charactersApi = Router();

// GET /characters
// List all the characters from the database
charactersApi.get('/', async (req, res) => {
  try {
    const characters = await listCharacters()
    res.send(characters);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// GET /characters/:id
// Get a character from the database
charactersApi.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const character = await getCharacter(req.params.id);
    if(!character) return res.status(404).send('Character not found');
    res.send(character);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// POST /characters
// Save the character into the database
charactersApi.post('/', async (req, res) => {
  try {
    const character = characterValidator.parse(req.body);
    await createCharacter(character);
    res.status(201).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// PUT /characters/:id
// Update the character in the database
charactersApi.put('/:id', async (req, res) => {
  try {
    const character = characterValidator.parse(req.body);
    await updateCharacter(req.params.id, character);
    res.status(204).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
})

// DELETE /characters/:id
// Delete the character from the database
charactersApi.delete('/:id', async (req, res) => {
  try {
    await deleteCharacter(req.params.id);
    res.status(204).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
})
