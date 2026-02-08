// layouts/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Box } from "@mui/material";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ maxWidth: "80vw", margin: "auto" }}>
        <main>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
};
