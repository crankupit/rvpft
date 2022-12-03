import react from '@vitejs/plugin-react';
import windicss from 'vite-plugin-windicss';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), windicss()],
});
