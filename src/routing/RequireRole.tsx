import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import type { JSX } from "react";
import type { UserRoleStatusEnum } from "../types/UserRoleStatusEnum";

export const RequireRole = ({
  allowedRoles,
  children,
}: {
  allowedRoles: UserRoleStatusEnum[];
  children: JSX.Element;
}) => {
  const { auth } = useAuth();

  if (!auth.user || !allowedRoles.includes(auth.user.role ?? "Unauthorized")) {
    return <Navigate to="/" replace />;
  }

  return children;
};
