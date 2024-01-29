'use server';
import {request} from "./request";

export const register = (username: string, email: string, password: string) => {
  const data = {
    username,
    email,
    password
  };
  return request('POST', '/users', data)
};