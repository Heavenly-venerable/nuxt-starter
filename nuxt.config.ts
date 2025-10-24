import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@primevue/nuxt-module'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
})
