// router.tsx
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { RequireRole } from "./RequireRole";
import { UserRoleStatusEnum } from "../types/UserRoleStatusEnum";
import { RequireAuth } from "./RequireAuth";
import { MinimalLayout } from "../layouts/MinimalLayout";
import { MainLayout } from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminPanel from "../pages/admin/adminpanel/AdminPanel";
import Login from "../pages/authorization/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ProductsList from "../pages/products/list/ProductsList";
import ProductDetails from "../pages/products/details/ProductDetails";

export const AppRouter = () => (
  <Routes>
    <Route element={<MinimalLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route element={<MainLayout />}>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/wsparcie" element={<></>} />
      <Route path="/plugin" element={<></>} />
      <Route path="/courses" element={<></>} />
      <Route path="/nasze-realizacje" element={<></>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<LandingPage />} />
    </Route>

    {/* Protected */}
    <Route
      element={
        <RequireAuth>
          <MainLayout />
        </RequireAuth>
      }
    >
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>

    {/* Admin */}
    <Route
      element={
        <RequireAuth>
          <RequireRole allowedRoles={[UserRoleStatusEnum.Admin]}>
            <MainLayout />
          </RequireRole>
        </RequireAuth>
      }
    >
      <Route path="/admin" element={<AdminPanel />} />
    </Route>
  </Routes>
);
