<script setup lang="ts">
import { WayItem } from "assets/types/app";

/**
 *  Компонент для отображения элемента timeLine
 *
 *  @params item - данные элемента
 */

defineProps<{
  item: WayItem;
}>();
</script>

<template>
  <div class="timeline__item">
    <div class="timeline-marker"></div>

    <div class="timeline__date">{{ item.year }}</div>

    <div class="timeline__content">
      <div class="timeline__header">{{ `<${item.header}>` }}</div>

      <div class="timeline__description">{{ item.description }}</div>

      <div class="timeline__tags">
        <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>
