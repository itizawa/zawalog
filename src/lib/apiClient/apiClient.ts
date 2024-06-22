'use server';
import { deserialize } from 'superjson';
import urlJoin from 'url-join';
import { APISchema } from '~/schema/schema';

export const apiClient = async <Schema extends APISchema>({
  path,
  method,
  options,
}: {
  path: Schema['path'];
  method: Schema['method'];
  options?: RequestInit;
}): Promise<Schema['responseBody']> => {
  const url = urlJoin(process.env.NEXT_PUBLIC_ROOT_URL || 'http://localhost:3000', path);
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': 'true',
  };

  const init: RequestInit = {
    ...options,
    method,
    headers,
    credentials: 'include',
  };

  const response = await fetch(url, init).catch((error) => {
    console.error(error);
    throw new Error(error);
  });
  const data = await response.json();

  if (response.ok) {
    return deserialize(data);
  }

  console.error('ERROR:', { statusCode: response.status, statusText: response.statusText, url, method, options });
  throw new Error(response.statusText);
};
