import api from "./apiConfig";

export const login = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
}