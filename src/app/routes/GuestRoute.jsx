import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const GuestRoute = () => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
