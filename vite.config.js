import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/feature/new-design",
  server: {
    port: 5173,
  },
});
