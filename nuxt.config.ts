// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }

  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [["@nuxtjs/google-fonts", {
    families: {
      'Poppins': [400, 500, 600, 700],
      'Raleway': [400, 500, 600, 700],
    }
  }], "@nuxt/icon"],

  compatibilityDate: "2024-07-04"
})