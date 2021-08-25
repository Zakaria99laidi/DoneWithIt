import apiClient from "./client";

const login = (email, password) => apiClient.post("/auth", { email, password });

export default {
  login,
};
