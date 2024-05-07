import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    port: 6000,
  },
  server: {
    port: 9000,
  },
});
