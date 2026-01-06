import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                talents: resolve(__dirname, 'talents.html'),
                legendary: resolve(__dirname, 'legendary.html'),
                cursed: resolve(__dirname, 'cursed.html'),
            },
        }
    }
});
