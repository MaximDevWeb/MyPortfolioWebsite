<script setup lang="ts">
import { DateTime } from "luxon";
/**
 * Компонент вывода текущего времени
 */

const time = ref<string>("");

/**
 * Функция рендеринга даты
 */
const updateTime = () => {
  const date = DateTime.now();
  time.value = date.toFormat("HH:mm:ss dd/MM/yyyy");
};

/**
 * Задаем интервал вызова функции при первичном рендеринге
 */
onMounted(() => {
  setInterval(updateTime, 1000);
});
</script>

<template>
  <div class="timer">
    {{ time }}
  </div>
</template>
