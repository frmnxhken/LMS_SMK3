import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { AuthProvider } from "./app/contexts/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "./app/contexts/ToastContext";
import { AcademicYearProvider } from "./app/contexts/AcademicYearContext";

// const queryClient = new QueryClient();

import { queryClient } from "@/shared/api/queryClient";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ToastProvider>
        <AcademicYearProvider>
          <App />
        </AcademicYearProvider>
      </ToastProvider>
    </AuthProvider>
  </QueryClientProvider>,
);
