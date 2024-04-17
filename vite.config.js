import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // base: "./",
  resolve: {
    alias: [{ find: "~", replacement: "/src" }]
  }
})
