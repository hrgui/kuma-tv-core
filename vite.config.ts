import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    !process.env.STORYBOOK &&
      legacy({
        targets: ["defaults", "chrome >= 47"],
      }),
  ].filter(Boolean),
  base: "./",
});
