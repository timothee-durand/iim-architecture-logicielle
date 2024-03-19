import express from 'express';
import { charactersRouter } from './characters';
import { sentinelleApi } from './sentinelle';

export async function initApi() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
  });

  app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
  app.use('/characters', charactersRouter)
  app.use('/sentinelle', sentinelleApi)

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}


