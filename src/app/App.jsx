import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainRoute from "./routes/MainRoute";
import LoginPage from "@/features/authentication/pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import AdminRoute from "./routes/AdminRoute";

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
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
