import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useAcademicYear } from "../contexts/AcademicYearContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  const { status, isLoading } = useAcademicYear();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return null;
  }

  if (user.role !== "admin") {
    if (status === "active") {
      return <Outlet />;
    }
    if (status === "draft") {
      return <Navigate to="/inactive/draft" replace />;
    }
    return <Navigate to="/inactive/completed" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
