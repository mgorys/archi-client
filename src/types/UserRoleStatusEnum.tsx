export const UserRoleStatusEnum = {
  Unauthorized: "Unauthorized",
  Admin: "Admin",
  Authorized: "Authorized",
} as const;

export type UserRoleStatusEnum =
  (typeof UserRoleStatusEnum)[keyof typeof UserRoleStatusEnum];
