'use server';
const API_URL = 'http://193.124.114.46:3001';

export const request = async (method: string, url: string) => {
  const res = await fetch(`${API_URL}${url}`, {
    method
  });
  if (res.ok) {
    return res.json();
  }
  return res.text();
};