import { createClient } from 'microcms-js-sdk'; //ES6

export class CmsClient {
  client;
  constructor() {
    if (!process.env.API_KEY) {
      return;
    }
    this.client = createClient({
      serviceDomain: 'itizaworld',
      apiKey: process.env.API_KEY,
    });
  }
}

export const cmsClient = new CmsClient();
