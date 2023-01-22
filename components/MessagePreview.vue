<script setup lang="ts">
import { MessageType } from "assets/types/app";
import logo from "~/assets/images/logo.svg";

/**
 * Компонент для вывода превью сообщения
 *
 * @props data - данные сообщения
 */

defineProps<{
  data: MessageType;
}>();
</script>

<template>
  <div class="contact-page__message">
    <h1>&lt;Your message&gt;</h1>

    <div class="message__wrap">
      <img :src="logo" alt="Site logo" />
      <h3 class="message__header">maxim-dev</h3>

      <p>
        Добрый день, меня зовут
        <span>{{ data.name || "${user.name}" }}</span
        >!
      </p>
      <p>
        Меня заинтересовало Ваше резюме. Хотелось уточнить некоторые данные:
      </p>
      <p>{{ data.message || "${user.message}" }}</p>

      <p>
        Ждем Ваш ответ на почтовый ящик:
        <span>{{ data.email || "${user.email}" }}</span>
      </p>

      <div class="message__footer">
        <a href="https://portfolio.maxim-dev.ru">portfolio.maxim-dev.ru</a>
        <p>{{ new Date().getFullYear() }} г.</p>
      </div>
    </div>
  </div>
</template>
