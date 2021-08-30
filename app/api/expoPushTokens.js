import apiClient from "./client";

const register = (pushToken) =>
  apiClient.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
