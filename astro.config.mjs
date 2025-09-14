// @ts-check
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        expressiveCode({
            themes: ['dark-plus'],
        })
    ],
    vite: {
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    },
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    })
});