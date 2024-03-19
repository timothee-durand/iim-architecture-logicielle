import { Client } from 'pg';

/**
 * Singleton class to manage the connection to the Postgre database
 */
export class PostgreClient {
  // Singleton instance
  private static instance: PostgreClient;
  // The Postgre client
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  static async initDatabase(){
    this.instance = new PostgreClient(new Client({
      user: 'user',
      host: 'localhost',
      database: 'rpg',
      password: 'password',
      port: 5432,
    }))
    await this.instance.client.connect();
  }

  static getInstance(): PostgreClient {
    if (!PostgreClient.instance) {
      throw new Error('PostgreClient not initialized');
    }
    return PostgreClient.instance;
  }
}
