'use server';
import {request} from "./request";

export const login = (email: string, password: string) => {
  const data = {
    email,
    password
  };
  return request('POST', '/sessions/create', data)
};