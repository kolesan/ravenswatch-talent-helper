import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                legendary: resolve(__dirname, 'legendary.html'),
                cursed: resolve(__dirname, 'cursed.html'),
            }
        }
    }
});
