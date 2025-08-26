import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Remove this line: base : '/portfolio',
  plugins: [react()],
})