import { createContext, useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/shared/api/ApiClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user")),
  );
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async (payload) => {
      const response = await api.post("/login", payload);
      return response.data;
    },
    onSuccess: (data) => {
      const { user: userData, token } = data;
      setUser(userData);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
      queryClient.invalidateQueries();
    },
  });

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    queryClient.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login: loginMutation.mutateAsync,
        isLoading: loginMutation.isPending,
        error: loginMutation.error,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
