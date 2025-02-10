// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  assetsInclude: ["**/*.JPG"],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  alias: { '@': resolve(__dirname, "/")},
  css: ["~/assets/main.scss"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})
