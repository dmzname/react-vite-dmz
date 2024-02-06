import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            app: `${path.resolve(__dirname, './src/app/')}`,
            widgets: `${path.resolve(__dirname, './src/widgets/')}`,
            features: `${path.resolve(__dirname, './src/features/')}`,
            shared: `${path.resolve(__dirname, './src/shared/')}`,
            styles: `${path.resolve(__dirname, './src/app/styles/')}`,
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [svgr({ include: '**/*.svg?react' }), react()],
    server: {
        open: true,
    },
});
