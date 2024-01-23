'use server';
const API_URL = 'http://193.124.114.46:3001';

export const request = async (method: string, url: string, data = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  if (res.ok) {
    return res.json();
  }
  return res.text();
};