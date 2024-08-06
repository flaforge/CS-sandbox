import { defineConfig } from 'vite';
import path from 'path';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig(() => {
    return {
        plugins: [sassGlobImports()],
        build: {
            rollupOptions: {
                input: {
                    'styles': path.resolve(__dirname, 'src/styles/main.scss'),
                    'scripts': path.resolve(__dirname, 'src/scripts/main.js')
                },
                output: {
                    entryFileNames: chunk => {
                        if (chunk.name === 'styles') {
                            return 'styles/styles.scss'; 
                        } else if (chunk.name === 'scripts') {
                            return 'scripts/scripts.js'; 
                        }
                        return '[name]/[name].js';
                    },
                    chunkFileNames: '[name]/[hash].js',
                    assetFileNames: '[name]/[name].[ext]'
                }
            },
            emptyOutDir: false
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/styles/variables.scss";`
                }
            }
        },
        optimizeDeps: {
            include: ['fast-glob']
        },
        server: {
            fs: {
                allow: ['..']
            },
            watch: {
                usePolling: true,
                interval: 100
            }
        }
    };
});
