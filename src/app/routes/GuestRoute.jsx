import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const GuestRoute = () => {
  const { user } = useAuth();
  if (!user) return <Outlet />;
  if (user?.role === "admin") {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/" replace />;
};

export default GuestRoute;
