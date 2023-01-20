<script setup lang="ts">
import { menuItems } from "~/models/menu";
import menuOpenIcon from "~/assets/images/menu.svg";
import menuCloseIcon from "~/assets/images/close.svg";

/**
 * Компонент верхней навигационной панели
 */

const marker = ref<HTMLElement | null>(null);
const activeItem = ref<HTMLElement | null>(null);

/**
 * Состояние мобильного меню
 */
const openMobileMenu = ref(false);

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
 * Меняем состояние мобильного меню
 */
const openMenu = () => {
  openMobileMenu.value = !openMobileMenu.value;
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
      <img
        :src="menuCloseIcon"
        alt="menu close"
        class="top-nav__btn"
        v-if="openMobileMenu"
        @click="openMenu"
      />
      <img
        :src="menuOpenIcon"
        alt="menu open"
        class="top-nav__btn"
        v-else
        @click="openMenu"
      />

      <nav class="top-nav__desktop">
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

      <div
        class="top-nav__mobile"
        :class="{ 'top-nav__mobile_visible': openMobileMenu }"
      >
        <RouterLink
          :to="item.path"
          v-for="item in menuItems"
          :key="item.label"
          @click="openMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="top-nav__name">zhukovich_maxim</div>
    </div>
  </div>
</template>
