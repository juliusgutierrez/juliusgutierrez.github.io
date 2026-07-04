import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages redirects /sahod to /sahod/; mirror that in the dev server,
// which otherwise falls back to the main page for slash-less paths.
const trailingSlashRedirect = {
  name: "trailing-slash-redirect",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/sahod") {
        res.statusCode = 301;
        res.setHeader("Location", "/sahod/");
        res.end();
        return;
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), trailingSlashRedirect],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sahod: resolve(__dirname, "sahod/index.html"),
      },
    },
  },
  server: {
    port: 5173,
  },
});
