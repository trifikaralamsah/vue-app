import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    port: 9001,
    host: "0.0.0.0",
  },
  server: {
    port: 9000,
  },
});
