import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    router: {
        options: {
        hashMode: true
        }
    },
    css: ['~/assets/css/main.css'],
    components: [
        {
          path: '~/components',
          extensions: ['.vue'],
        }
    ],
    vite: {
        plugins: [svgLoader()],
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
