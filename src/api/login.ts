'use server';
import {request} from "./request";

export interface LoginResponse {
  id_token: string;
}

export const login = async (email: string, password: string) => {
  const data = {
    email,
    password
  };
  return request('POST', '/sessions/create', data)
};