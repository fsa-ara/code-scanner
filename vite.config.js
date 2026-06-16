import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss()],
    server: {
        host: true,
        https: {
            cert: readFileSync('localhost+3.pem'),
            key: readFileSync('localhost+3-key.pem'),
        },
        port: 5173,
    },
});
