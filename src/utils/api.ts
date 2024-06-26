import axios from "axios";
import { webStorage } from "./webStorage";

export const api = (contentType: "json" | "formData" | undefined) => {
  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
  });

  instance.interceptors.request.use(
    (config: any) => {
      const user = webStorage.get("user");

      const newConfig = {
        ...config,
        Headers: {
          ...config.Headers,
          Authorization: user?.token ? `Bearer ${user?.token}` : undefined,
          "Content-Type":
            contentType === "formData"
              ? "multipart/form-data"
              : "application/json",
        },
      };

      return newConfig;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};
