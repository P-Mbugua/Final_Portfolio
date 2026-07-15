import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    define: {
      // Injects the build timestamp as a string during 'npm run build'
      // Returns 'Dev Mode' when running 'npm run dev'
      'BUILD_TIMESTAMP': command === 'build' 
        ? JSON.stringify(new Date().toLocaleString('en-US', { 
            dateStyle: 'medium', 
            timeStyle: 'short',
            timeZone: 'UTC' // Optional: Use UTC for consistent timestamps across servers
          })) 
        : '"Dev Mode"',
    },
  }
})   