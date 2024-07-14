import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Fast Refresh is enabled by default
      // If you want to explicitly enable it, you can pass `fastRefresh: true`
      // fastRefresh: true,

      // Enable automatic JSX runtime
      // By default, Vite will automatically inject the JSX runtime for React 17+
      // If you're using React 16.9+, this is not necessary but harmless
      // If you need to disable it for some reason, set `jsxRuntime: 'classic'`
      // jsxRuntime: 'automatic',

      // You can configure custom Babel plugins/presets if needed
      // babel: {
      //   plugins: [],
      //   presets: [],
      // },

      // The plugin is designed to have a small installation size by default
    }),
  ],
});
