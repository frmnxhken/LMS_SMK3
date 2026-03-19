import { useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useNavigate } from "react-router";
import Button from "@/shared/ui/buttons/Button";
import FormInput from "@/shared/ui/forms/FormInput";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/");
    } catch (err) {
      console.error("Login gagal", err);
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center w-full">
      <div className="bg-white max-w-[600px] w-full flex items-center gap-4 p-8 shadow-lg">
        <div className="w-1/2">
          <h1 className="text-text-heading text-3xl font-bold mb-6">Masuk</h1>

          {error && (
            <p className="text-red-500 text-sm mb-2">
              {error?.response?.data?.message || "Login Gagal"}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="username"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <FormInput
              label="Password"
              type="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Memproses..." : "Masuk"}
            </Button>
          </form>
        </div>
        <div className="w-1/2">
          <img
            src="https://i.pinimg.com/1200x/6f/52/bd/6f52bd37979f385174d5370dae9b6c33.jpg"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
