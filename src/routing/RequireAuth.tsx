import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import type { JSX } from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { auth } = useAuth();

  if (!auth.user) return <Navigate to="/login" replace />;

  return children;
};
