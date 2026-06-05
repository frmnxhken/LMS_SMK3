import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainRoute from "./routes/MainRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";
import AdminRoute from "./routes/AdminRoute";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import LoginPage from "@/features/authentication/pages/LoginPage";
import { useIsFetching } from "@tanstack/react-query";
import TopLoader from "@/shared/ui/Feedback/TopLoader";
import NotFoundPage from "@/shared/pages/NotFoundPage";

const App = () => {
  const isFetching = useIsFetching();
  const isLoading = isFetching > 0;
  return (
    <BrowserRouter>
      <TopLoader isLoading={isLoading} />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
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
