import type { AxiosResponse } from 'axios';

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResult =
  | { response: AxiosResponse<LoginResponse>; responseStatus: number }
  | InvalidLoginResult;

export interface InvalidLoginResult {
  responseStatus: number;
  message: string;
}
export interface LoginResponse extends BaseResponse {
  token: string;
  userName?: string;
}
export interface BaseResponse {
  success?: boolean;
  message?: string;
}
export interface UserDetails {
  userName: string;
  token?: string;
  role?: UserRoleStatusEnum;
}
export const UserRoleStatusEnum = {
  Unauthorized: 'Unauthorized',
  Admin: 'Admin',
  Authorized: 'Authorized',
} as const;

export type UserRoleStatusEnum =
  (typeof UserRoleStatusEnum)[keyof typeof UserRoleStatusEnum];
