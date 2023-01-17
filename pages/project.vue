<script setup lang="ts">
import { projects } from "~/models/projects";

/**
 * Задаем заголовки страницы
 */
useHead({
  title: "Мои проекты",
});
</script>

<template>
  <main class="project-page">
    <h1>&lt;My project&gt;</h1>

    <scroll-field class="project__wrap">
      <div class="project__list">
        <project-item v-for="project in projects" :repo="project" />
      </div>
    </scroll-field>
  </main>
</template>
