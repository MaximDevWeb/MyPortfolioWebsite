<script setup lang="ts">
import PerfectScrollbar from "perfect-scrollbar";
/**
 * Компонент для создания кастомной полосы прокрутки
 */

const scroll = ref(null);
/**
 * Параметры настройки библиотеки overlayScrollBars
 */
const params = reactive({
  scrollbars: {
    autoHide: "leave",
    theme: "os-theme-light",
  },
});

onMounted(() => {
  if (scroll.value) new PerfectScrollbar(scroll.value);
});
</script>

<template>
  <div class="scrolling" ref="scroll">
    <slot />
  </div>
</template>
