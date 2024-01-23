'use server';
import {request} from "./request";

export const register = () => (
  request('POST', '/users')
);