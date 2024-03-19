# API

## Setup api
1 - Run docker
```bash
docker compose up -d
```

2 - Install [Ollama](https://github.com/ollama/ollama) and pull mistral model (i'm not using the docker image, its way too slow)
```bash
ollama pull mistral
```

3 - Install dependencies and run the server
```bash
pnpm install
pnpm dev
```

## Endpoints

### GET /characters
Get all characters

### GET /characters/:id
Get a character by id

### POST /characters
Create a character

### PUT /characters/:id
Update a character by id

### DELETE /characters/:id
Delete a character by id

### POST /sentinelle
Generate a mission brief from a news article
