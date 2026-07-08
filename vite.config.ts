import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '127.0.0.1',
    port: 3003,
    allowedHosts: ['lukeshort.dev', 'www.lukeshort.dev'],
  },
})
