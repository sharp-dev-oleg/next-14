'use server';
import {request} from "./request";


 interface UserInfoResponse {
   user_info_token: UserInfo
}

export interface UserInfo {
  id: number
  name: string,
  email: string
  balance: number
}

export const getUserInfo = (token: string): Promise<UserInfoResponse> => {
  const headers = {
    Authorization: `Bearer ${token}`
  }
  return request<UserInfoResponse>('GET', '/api/protected/user-info', null, headers)
};