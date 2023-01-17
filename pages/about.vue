<script setup lang="ts">
import { wayItems } from "@/models/way";

/**
 * Задаем заголовки страницы
 */
useHead({
  title: "Обо мне",
});
</script>

<template>
  <main class="about-page">
    <div class="about-page__content code code_comment">
      <pre>1   /**</pre>
      <pre>2     * Обо Мне</pre>
      <pre>3     * Мой стаж разработки более 5 лет.</pre>
      <pre>4     * Все началось в далеком 2014 году, когда я запустил свой</pre>
      <pre>5     * первый сайт на CMS Joomla. И хотя разработки там</pre>
      <pre>6     * было минимум, это было первым шагом на моем пути</pre>
      <pre>
7     * Web-разработки. Далее было несколько проектов на чистом php</pre
      >
      <pre>8     * и с использованием фреймворков (Kohana, потом Laravel).</pre>
      <pre>
9     * Изучая более подробно JS, мне понравилась идея SPA приложений.</pre
      >
      <pre>
10    * Я начал изучать Vue.js. Интересным мне показался компонентный</pre
      >
      <pre>
11    * подход написаня приложения. Так же добавил к своим навыкам</pre
      >
      <pre>12    * модульное тестирование, системы сборки и TypeScript.</pre>
      <pre>
13    * Все стало более интересно. На данный момент активно изучаю React.</pre
      >
      <pre>14    */</pre>
    </div>

    <div class="timeline__wrapper">
      <scroll-field class="about-page__timeline">
        <div class="timeline">
          <timeline-item
            v-for="item in wayItems"
            :item="item"
            :key="item.year"
          />
        </div>
      </scroll-field>
    </div>
  </main>
</template>
