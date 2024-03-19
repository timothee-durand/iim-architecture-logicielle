import { Router } from 'express';
import { generateBrief, generateBriefRequestValidator } from './brief';

export const sentinelleApi = Router()

sentinelleApi.post('/', async (req, res) => {
  try {
    const payload = generateBriefRequestValidator.parse(req.body)
    res.send(await generateBrief(payload))
  } catch (e:any) {
    console.error(e);
    res.status(500).send(e.message);
  }

})