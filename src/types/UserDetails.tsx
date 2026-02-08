import type { UserRoleStatusEnum } from "./UserRoleStatusEnum";

export interface UserDetails {
  userName: string;
  token?: string;
  role?: UserRoleStatusEnum;
}
