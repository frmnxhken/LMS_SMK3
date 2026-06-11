import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useAcademicYear } from "../contexts/AcademicYearContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  const { status } = useAcademicYear();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    if (status === "active") {
      return <Outlet />;
    }
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return <Navigate to="/404" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
