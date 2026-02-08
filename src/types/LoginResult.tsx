import type { AxiosResponse } from "axios";
import type { BaseResponse } from "./BaseResponse";

export type LoginResult =
  | { response: AxiosResponse<LoginResponse>; responseStatus: number }
  | InvalidLoginResult;

interface InvalidLoginResult {
  responseStatus: number;
  message: string;
}
export interface LoginResponse extends BaseResponse {
  token: string;
  userName?: string;
}
