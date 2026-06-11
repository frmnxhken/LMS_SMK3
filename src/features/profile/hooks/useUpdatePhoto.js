import { useMutation } from "@tanstack/react-query";
import { updatePhotoProfile } from "../api/profileApi";
import { useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useToast } from "@/app/contexts/ToastContext";

const useUpdatePhoto = () => {
  const { setUser } = useAuth();
  const [errors, setErrors] = useState(null);
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (payload) => updatePhotoProfile(payload),
    onSuccess: (response) => {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) return;

      const user = JSON.parse(storedUser);
      user.photo = response?.data?.photo_url;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
    onError: (error) => {
      setErrors(error.response?.data?.errors);
      addToast(error.response?.data?.message, "error");
    },
  });

  const handleUpdate = (values, options) => mutation.mutate(values, options);

  return {
    handleUpdate,
    isPending: mutation.isPending,
    errors,
  };
};

export default useUpdatePhoto;
