import { useEffect, createContext, useContext } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import api from "@/shared/api/ApiClient";
import { useToast } from "@/app/contexts/ToastContext";
import {
  registerAcademicYearSetter,
  registerToast,
} from "@/shared/api/queryClient";

const AcademicYearContext = createContext(null);

export function AcademicYearProvider({ children }) {
  const { addToast } = useToast();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["academic-year"],
    queryFn: async () => {
      const { data } = await api.get("/academic-years/current");
      return data;
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    registerToast(addToast);
  }, [addToast]);

  useEffect(() => {
    registerAcademicYearSetter((data) => {
      queryClient.setQueryData(["academic-year"], (old) => ({
        ...old,
        ...data,
      }));
    });
  }, [queryClient]);

  return (
    <AcademicYearContext.Provider value={{ status: query?.data?.status }}>
      {children}
    </AcademicYearContext.Provider>
  );
}

export function useAcademicYear() {
  return useContext(AcademicYearContext);
}
