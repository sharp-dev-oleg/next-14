'use server';
import {request} from "./request";

export const getUserInfo = async (token: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return request('GET', '/api/protected/user-info', null, headers)
};