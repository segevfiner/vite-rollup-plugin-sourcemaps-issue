import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sourcemaps from "rollup-plugin-sourcemaps";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), sourcemaps()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
