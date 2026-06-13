import axios from "axios";
import { env } from "../lib/Config";

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;
    const status_academic = error.response?.data?.status;

    if (status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    if (status === 403 && message === "invalid academic") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (status_academic === "draft") {
        window.location.href = "/inactive/draft";
      } else {
        window.location.href = "/inactive/completed";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
