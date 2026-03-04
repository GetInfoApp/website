import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const normalizeBasePath = (value: string) => {
  if (!value) {
    return "/";
  }
  let normalized = value;
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  if (!normalized.endsWith("/")) {
    normalized = `${normalized}/`;
  }
  return normalized;
};

const explicitBase = process.env.VITE_BASE_URL?.trim();
const repository = process.env.GITHUB_REPOSITORY;
const repositoryName = repository?.split("/")[1] ?? "";
const inferredBase =
  repositoryName && !repositoryName.toLowerCase().endsWith(".github.io")
    ? normalizeBasePath(repositoryName)
    : "/";
const basePath = explicitBase ? normalizeBasePath(explicitBase) : inferredBase;

export default defineConfig(({ mode }) => ({
  base: basePath,
  server: {
    host: "::",
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
