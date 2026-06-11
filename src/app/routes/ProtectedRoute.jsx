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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
