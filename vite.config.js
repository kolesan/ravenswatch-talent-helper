import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                talents: resolve(__dirname, 'talents.html'),
                legendary: resolve(__dirname, 'legendary-objects.html'),
                cursed: resolve(__dirname, 'cursed-objects.html'),
            },
        }
    }
});
