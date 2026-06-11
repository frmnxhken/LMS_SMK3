import api from "@/shared/api/ApiClient";
import { useEffect, createContext, useContext } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/app/contexts/ToastContext";

const AcademicYearContext = createContext(null);

export function AcademicYearProvider({ children }) {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["academic-year"],
    queryFn: async () => {
      const { data } = await api.get("/academic-years/current");
      return data;
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    const handleGlobalError = (error) => {
      const data = error?.response?.data;

      if (["active", "draft", "complete"].includes(data?.status)) {
        queryClient.setQueryData(["academic-year"], (old) => ({
          ...old,
          status: data.status,
        }));
        addToast(data.message, "error");
      }
    };

    const mutateSubs = queryClient.getMutationCache().subscribe((event) => {
      if (event?.action?.type === "error") {
        handleGlobalError(event.action.error);
      }
    });

    return () => mutateSubs();
  }, [queryClient, addToast]);

  return (
    <AcademicYearContext.Provider value={{ status: data?.status, isLoading }}>
      {children}
    </AcademicYearContext.Provider>
  );
}

export function useAcademicYear() {
  return useContext(AcademicYearContext);
}
