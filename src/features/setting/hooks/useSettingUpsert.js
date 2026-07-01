import { useState } from "react";
import { useToast } from "@/app/contexts/ToastContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSetting, upsertSetting } from "../api/settingApi";

const useSettingUpsert = () => {
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const { data, isLoading } = useQuery({
    queryKey: ["setting"],
    queryFn: () => getSetting(),
    staleTime: 1000 * 60 * 10,
  });

  const mutation = useMutation({
    mutationFn: (payload) => upsertSetting(payload),
    onSuccess: () => {
      addToast("Data berhasil dirubah!");
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
    },
  });

  const handleUpsert = (payload) => mutation.mutate(payload);

  return {
    data,
    isLoading,
    handleUpsert,
    isUpsert: mutation.isPending,
    errors,
  };
};

export default useSettingUpsert;
