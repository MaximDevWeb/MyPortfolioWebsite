// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000/api/v1"
          : "api.maxim-dev.ru/api/v1",
    },
  },
});
