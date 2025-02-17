import axiosInstance from "./instance";

export const login = async (name: string, password: string) => {
  const response = await axiosInstance.post("/login", { name, password });
  return response.data;
};

export const register = async (
  name: string,
  password: string,
  number: string
) => {
  const response = await axiosInstance.post("/register", {
    name,
    password,
    number,
  });
  return response.data;
};
