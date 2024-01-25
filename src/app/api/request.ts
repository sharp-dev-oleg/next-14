'use server';
const API_URL = 'http://193.124.114.46:3001';

export const request = async <T>(method: string, url: string, data: {} | null = {}, headers = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    method,
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    }
  });
  if (res.ok) {
    return res.json() as T;
  }
  throw new Error(await res.text());
};