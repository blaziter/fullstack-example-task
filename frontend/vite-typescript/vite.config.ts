import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import i18nextLoader from 'vite-plugin-i18next-loader';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        TanStackRouterVite(),
        i18nextLoader({ paths: ['./src/locales'] }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
