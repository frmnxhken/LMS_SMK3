import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainRoute from "./routes/MainRoute";
import LoginPage from "@/pages/public/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import ScrollToTop from "@/shared/lib/ScrollToTop";

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
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
