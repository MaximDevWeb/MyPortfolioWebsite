<script setup lang="ts">
import { menuItems } from "~/models/menu";

/**
 * Компонент верхней навигационной панели
 */

const marker = ref<HTMLElement | null>(null);
const activeItem = ref<HTMLElement | null>(null);

/**
 * Следим за изменением активного элемента
 * и обновляем позицию маркера
 */
watchEffect(() => {
  if (marker.value && activeItem.value) {
    marker.value.style.minWidth = activeItem.value.offsetWidth + "px";
    marker.value.style.left = activeItem.value.offsetLeft + "px";
  }
});

/**
 * Обновляем активный элемент при клике по меню
 *
 * @param e
 */
const itemHandler = (e: MouseEvent) => {
  activeItem.value = e.target as HTMLElement;
};

/**
 * Задаем активный элемент при первичном рендеринге
 */
onMounted(() => {
  activeItem.value = document.querySelector(".router-link-exact-active");
});
</script>

<template>
  <div class="top-nav">
    <div class="container">
      <nav>
        <div class="top-nav__marker" ref="marker"></div>

        <RouterLink
          :to="item.path"
          v-for="item in menuItems"
          :key="item.label"
          @click="itemHandler"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="top-nav__name">zhukovich_maxim</div>
    </div>
  </div>
</template>
