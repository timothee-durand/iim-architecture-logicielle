import { Router } from 'express';
import { generateBrief, generateBriefRequestValidator } from './brief';
import { listBriefHistory, saveBriefHistory } from './repository';
import { briefValidator } from './validator';

// router for the sentinelle api
// base path: /sentinelle
export const sentinelleApi = Router()


// POST /briefs
// Generate a brief from the given news
sentinelleApi.post('/briefs', async (req, res) => {
  try {
    const payload = generateBriefRequestValidator.parse(req.body)
    const brief = await generateBrief(payload)
    console.log('brief', brief);
    await saveBriefHistory({
      news: payload.news,
      brief: briefValidator.parse(JSON.parse(brief))
    })
    res.send(brief)
  } catch (e:any) {
    console.error(e);
    res.status(500).send(e.message);
  }
})

// GET /briefs
// List all the brief history from the database
sentinelleApi.get('/briefs', async (req, res) => {
  try {
    const briefs = await listBriefHistory()
    res.send(briefs)
  } catch (e:any) {
    console.error(e);
    res.status(500).send(e.message);
  }
})