import path from 'path';
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
    resolve: {
        alias: {
            "TalentsPage": path.resolve(__dirname, "./src/ui/pages/TalentsPage"),
            "LegendaryObjectsPage": path.resolve(__dirname, "./src/ui/pages/LegendaryObjectsPage"),
            "CursedObjectsPage": path.resolve(__dirname, "./src/ui/pages/CursedObjectsPage"),
            "HelpPage": path.resolve(__dirname, "./src/ui/pages/HelpPage"),

            "data": path.resolve(__dirname, "./src/data"),
            "ui": path.resolve(__dirname, "./src/ui"),
            "utils": path.resolve(__dirname, "./src/utils"),
            "scripts": path.resolve(__dirname, "./src/scripts"),
        }
    }
});
