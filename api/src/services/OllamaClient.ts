import { Ollama } from 'ollama';

export class OllamaClient {
  private static instance: OllamaClient;
  private client: Ollama;

  private constructor() {
    this.client = new Ollama()
  }

  /**
   * Get the configured instance of OllamaClient
   */
  public static getInstance(): OllamaClient {
    if (!OllamaClient.instance) {
      OllamaClient.instance = new OllamaClient();
    }
    return OllamaClient.instance;
  }

  /**
   * Chat with Ollama
   * Take the message in parameter and return the response from Ollama as a string
   * @param message string
   */

  public async chat(message:string): Promise<string> {
    const result = await OllamaClient.getInstance().client.chat({
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      model: 'mistral',
    });
    return result.message.content
  }
}