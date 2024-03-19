import { Client } from 'pg';

export class PostgreClient {
  private static instance: PostgreClient;
  public client: Client;

  private constructor() {
    this.client = new Client({
      user: 'user',
      host: 'localhost',
      database: 'rpg',
      password: 'password',
      port: 5432,
    });
    this.client.connect();
  }

  static getInstance(): PostgreClient {
    if (!PostgreClient.instance) {
      PostgreClient.instance = new PostgreClient();
    }
    return PostgreClient.instance;
  }
}
