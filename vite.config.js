import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//udsjdjsh
export default defineConfig(({ command }) => {

  const buildDate =
    command === "build"
      ? new Date().toISOString().slice(0,10).replace(/-/g,'')
      : "20250901"; // previous build date

  return {
    plugins: [react()],
    define: {
      __BUILD_DATE__: JSON.stringify(buildDate),
    },
  };
});