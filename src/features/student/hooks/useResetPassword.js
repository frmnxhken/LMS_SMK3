import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/studentApi";
import { useToast } from "@/app/contexts/ToastContext";
import { useNavigate } from "react-router";

const useResetPassword = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const mutation = useMutation({
    mutationFn: (id) => resetPassword(id),
    onSuccess: () => {
      addToast("Password berhasil direset!");
      navigate(-1);
    },
  });

  const handleReset = (id) => {
    let confirmed = confirm("Anda yakin untuk mereset password?");
    if (confirmed) mutation.mutate(id);
  };

  return { handleReset };
};

export default useResetPassword;
