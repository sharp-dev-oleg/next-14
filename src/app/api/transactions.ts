'use server';
import {request} from "./request";

export interface LoginResponse {
  id_token: string;
}

export const getTransactions = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return request('GET', '/api/protected/transactions', null, headers)
};