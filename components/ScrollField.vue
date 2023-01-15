<script setup lang="ts">
import pkg from "overlayscrollbars-vue/overlayscrollbars-vue.umd.js";
const { OverlayScrollbarsComponent } = pkg;

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
