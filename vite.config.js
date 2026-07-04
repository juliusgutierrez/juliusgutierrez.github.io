import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The sahod PWA lives in public/sahod/ and is served as-is in production.
// GitHub Pages redirects /sahod to /sahod/ and resolves the directory index;
// Vite's dev server does neither, so mirror both here.
const sahodStaticApp = {
  name: "sahod-static-app",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/sahod") {
        res.statusCode = 301;
        res.setHeader("Location", "/sahod/");
        res.end();
        return;
      }
      if (req.url === "/sahod/") {
        req.url = "/sahod/index.html";
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), sahodStaticApp],
  base: "/",
  server: {
    port: 5173,
  },
});
