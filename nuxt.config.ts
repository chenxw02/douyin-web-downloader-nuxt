// import mkcert from 'vite-plugin-mkcert';

export default defineNuxtConfig({
  vite: {},
  components: true,
  css: ['@/assets/css/main.scss'],
  runtimeConfig: {
    public: {
      envName: process.env.VITE_ENV_NAME,
      beBase: process.env.VITE_BE_BASE,
    },
  },
  app: {
    head: {
      title: 'Nuxt-App',
    },
  },
  ssr: false,
  devServer: {
    https: {
      key: 'localhost.key',
      cert: 'localhost.crt',
    },
    port: 8080,
  },
});
