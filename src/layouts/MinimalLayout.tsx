import React from "react";
import { Outlet } from "react-router-dom";

export const MinimalLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
