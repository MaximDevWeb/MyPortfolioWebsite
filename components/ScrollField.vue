<script setup lang="ts">
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

/**
 * Компонент для создания кастомной полосы прокрутки
 */

/**
 * Параметры настройки библиотеки overlayScrollBars
 */
const params = reactive({
  scrollbars: {
    autoHide: "leave",
    theme: "os-theme-light",
  },
});
</script>

<template>
  <OverlayScrollbarsComponent defer :options="params">
    <slot />
  </OverlayScrollbarsComponent>
</template>
