import apiClient from "./client";

const register = (userInfo) => apiClient.post("/users", userInfo);

export default {
  register,
};
