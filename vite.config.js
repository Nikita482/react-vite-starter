import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/react-vite-starter/",
  plugins: [react()],
});
