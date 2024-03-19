# API

## Setup api
1 - Run docker
```bash
docker-compose up -d
```

2 - Install dependencies and run the server
```bash
pnpm install
pnpm run dev
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