'use server';
import {request} from "./request";

export const createTransaction = (name: string, amount: string, token: string) => {
  const data = {
    name,
    amount
  };
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return request('POST', '/api/protected/transactions', data, headers)
};