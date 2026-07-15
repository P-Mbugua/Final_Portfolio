// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   return {
//     plugins: [react()],
//     define: {
//       // Injects the build timestamp as a string during 'npm run build'
//       // Returns 'Dev Mode' when running 'npm run dev'
//       'BUILD_TIMESTAMP': command === 'build' 
//         ? JSON.stringify(new Date().toLocaleString('en-US', { 
//             dateStyle: 'medium', 
//             timeStyle: 'short',
//             timeZone: 'UTC' // Optional: Use UTC for consistent timestamps across servers
//           })) 
//         : '"Dev Mode"',
//     },
//   }
// })   



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

// Helper to safely get the last commit date
const getCommitDate = () => {
  try {
    // Runs: git log -1 --format=%cI (ISO 8601 format)
    return execSync('git log -1 --format=%cI').toString().trim();
  } catch (error) {
    // Fallback if not in a git repo (e.g., local dev without git)
    return new Date().toISOString();
  }
};

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    define: {
      // Inject the git commit date into the app
      'import.meta.env.VITE_COMMIT_DATE': JSON.stringify(getCommitDate()),
      
      // Optional: Keep your existing logic for dev mode indication if desired, 
      // but usually, the commit date is sufficient.
      'BUILD_TIMESTAMP': command === 'build' 
        ? JSON.stringify(new Date().toLocaleString('en-US', { 
            dateStyle: 'medium', 
            timeStyle: 'short',
            timeZone: 'UTC'
          })) 
        : '"Dev Mode"',
    },
  };
});   