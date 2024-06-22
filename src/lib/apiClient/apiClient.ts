'use server';
import urlJoin from 'url-join';

import { cookies } from 'next/headers';

export const handler = async <T>(path: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE', options?: RequestInit): Promise<T> => {
  const cookieStore = cookies();
  const cookie = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(';');

  const url = urlJoin(process.env.NEXT_PUBLIC_ROOT_URL || 'http://localhost:3000', path);
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': 'true',
    cookie,
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
    return data;
  }

  console.error('ERROR:', { statusCode: response.status, statusText: response.statusText, url, method, options });
  throw new Error(response.statusText);
};

export const apiGet = async <T>(url: string, option?: RequestInit): Promise<T> => {
  return await handler(url, 'GET', option);
};

export const apiPost = async <T>(url: string, option?: RequestInit): Promise<T> => {
  return await handler(url, 'POST', option);
};

export const apiPatch = async <T>(url: string, option?: RequestInit): Promise<T> => {
  return await handler(url, 'PATCH', option);
};

export const apiDelete = async <T>(url: string, option?: RequestInit): Promise<T> => {
  return await handler(url, 'DELETE', option);
};
