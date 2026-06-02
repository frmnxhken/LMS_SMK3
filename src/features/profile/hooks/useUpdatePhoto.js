import { useMutation } from "@tanstack/react-query";
import { updatePhotoProfile } from "../api/profileApi";
import { useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";

const useUpdatePhoto = () => {
  const { setUser } = useAuth();
  const [errors, setErrors] = useState(null);

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
      alert(error.response?.data?.errors?.photo?.[0]);
    },
  });

  const handleUpdate = (values, options) => mutation.mutate(values, options);

  return {
    handleUpdate,
    errors,
  };
};

export default useUpdatePhoto;
