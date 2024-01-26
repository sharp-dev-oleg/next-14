'use server';
import {request} from "./request";

export interface Transaction {
  id: number
  date: string
  username: string
  amount: number
  balance: number
}

export const getTransactions = async (token: string): Promise<{trans_token: Transaction[]}> => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return request('GET', '/api/protected/transactions', null, headers)
};