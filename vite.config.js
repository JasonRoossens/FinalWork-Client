import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base: '/FinalWork-Client/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Use path.resolve to get the absolute path
    }
  }
});