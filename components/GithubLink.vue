<script setup lang="ts">
import github from "@/assets/images/github.svg";

/**
 * Компонент ссылки на Github профиль
 *
 * @props name - название ссылки
 * @props link - адрес ссылки
 */

defineProps({
  name: String,
  link: String,
});
</script>

<template>
  <a class="github-link" :href="link" target="_blank">
    @{{ name }}
    <img :src="github" alt="Github link" />
  </a>
</template>
