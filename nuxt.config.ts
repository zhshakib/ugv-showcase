// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  }], "@nuxt/image", "@nuxt/icon"]
})