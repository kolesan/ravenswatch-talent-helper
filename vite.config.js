import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import { preact } from '@preact/preset-vite'

export default defineConfig({
    plugins: [
        analyzer(),
        preact()
    ],
    server: {
        host: true,
        port: 5173,
    },
});
