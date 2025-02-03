import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['d15b3307-c68a-4020-8563-e0cb82a897cd-00-2pf64zdqvpouq.pike.replit.dev']
  }
})