import axios from 'axios';

/**
 * Creates an instance of axios with predefined configurations.
 * @see {@link https://axios-http.com/docs/instance} for more information about axios instances.
 */
export const api = axios.create({
  /**
   * The base URL for all the API requests.
   * @type {string}
   */
  baseURL: 'http://localhost:3000',
})