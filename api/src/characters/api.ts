import { Router } from 'express';
import { createCharacter, deleteCharacter, getCharacter, listCharacters, updateCharacter } from './repository';
import { characterValidator } from './validators';

export const charactersRouter = Router();

charactersRouter.get('/', async (req, res) => {
  try {
    const characters = await listCharacters()
    res.send(characters);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

charactersRouter.get('/:id', async (req, res) => {
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

charactersRouter.post('/', async (req, res) => {
  try {
    const character = characterValidator.parse(req.body);
    await createCharacter(character);
    res.status(201).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

charactersRouter.put('/:id', async (req, res) => {
  try {
    const character = characterValidator.parse(req.body);
    await updateCharacter(req.params.id, character);
    res.status(204).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
})

charactersRouter.delete('/:id', async (req, res) => {
  try {
    await deleteCharacter(req.params.id);
    res.status(204).send(undefined);
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
})
