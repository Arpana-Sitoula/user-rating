import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //used to change port number
  // react's default port no. is 3000  
  server: {
    port: 3000,
  },
})
