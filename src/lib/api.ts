import { createClient } from 'microcms-js-sdk'; //ES6

export const cmsClient = createClient({
  serviceDomain: 'itizaworld',
  apiKey: (process.env.API_KEY as string) || '',
});
