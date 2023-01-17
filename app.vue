<script lang="ts" setup>
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "@/assets/styles/app.scss";

/**
 * Установка мета-данных в head
 */
useHead({
  link: [
    {
      rel: "apple-touch-icon",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: '#5bbad5"',
    },
  ],
  meta: [
    { name: "msapplication-TileColor", content: "#2d89ef" },
    { name: "theme-color", content: "#ffffff" },
  ],
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | Maxim Web Developer` : "Maxim Web Developer",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
