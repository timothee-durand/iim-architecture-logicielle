import express, { Request, Response } from 'express';
import { charactersApi } from './characters';
import { sentinelleApi } from './sentinelle';
import cors from 'cors';


/**
 * Log all requests to the console
 */
function logRequests(req: Request, res: Response, next: () => void) {
  console.log(req.method, req.url);
  next();
}

/**
 * Initialize the API
 */
export async function initApi() {
  const app = express();
  const port = process.env.PORT || 3000;

  // Log all requests
  app.use(logRequests);

  app.use(cors())
  // Parse JSON bodies
  app.use(express.json());

  // Add the routes
  app.use('/characters', charactersApi);
  app.use('/sentinelle', sentinelleApi);

  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}


