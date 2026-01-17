import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
    plugins: [
        analyzer()
    ],
    server: {
        host: true,
        port: 5173,
    },
});
