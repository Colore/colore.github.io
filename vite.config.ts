import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build'
    },
    plugins: [
        TanStackRouterVite(),
        viteReact(),
        viteTsConfigPaths({
            projects: ['./tsconfig.json']
        })
    ],
    publicDir: './public'
})
