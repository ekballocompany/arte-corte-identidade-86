import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/arte-corte-identidade-86/', // Caminho base para GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Apenas em dev
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: 'dist',             // Saída do build
    emptyOutDir: true,          // Limpa a pasta antes de gerar
    sourcemap: false,
    assetsDir: 'assets',        // Onde os assets vão ficar

    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Garante que o Vite use seu index.html corretamente
      output: {
        manualChunks: undefined, // Desativa chunks automáticos (útil para projetos pequenos)

        entryFileNames: 'assets/[name]-[hash].js',   // Nome dos JS gerados
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
}));
