import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainRoute from "./routes/MainRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import AdminRoute from "./routes/AdminRoute";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import LoginPage from "@/features/authentication/pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          element={<ProtectedRoute allowedRoles={["student", "teacher"]} />}
        >
          {MainRoute()}
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          {AdminRoute()}
        </Route>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
