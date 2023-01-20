<script setup lang="ts">
import { wayItems } from "@/models/way";

/**
Задаем заголовки страницы
 */
useHead({
  title: "Обо мне",
});
</script>

<template>
  <main class="about-page">
    <div class="about-page__content code code_comment">
      <p><span>1 </span><span> /*</span></p>
      <p><span>2 </span><span> Обо Мне</span></p>
      <p><span>3 </span><span> Мой стаж разработки более 5 лет.</span></p>
      <p>
        <span>4 </span>
        <span> Все началось в далеком 2014 году, когда я запустил свой</span>
      </p>
      <p>
        <span>5 </span>
        <span> первый сайт на CMS Joomla. И хотя разработки там</span>
      </p>
      <p>
        <span>6 </span>
        <span>было минимум, это было первым шагом на моем пути</span>
      </p>
      <p>
        <span>7 </span>
        <span>
          Web-разработки. Далее было несколько проектов на чистом php
        </span>
      </p>
      <p>
        <span>8 </span>
        <span>и с использованием фреймворков (Kohana, потом Laravel).</span>
      </p>
      <p>
        <span>9 </span>
        <span>
          Изучая более подробно JS, мне понравилась идея SPA приложений.
        </span>
      </p>
      <p>
        <span>10 </span>
        <span>
          Я начал изучать Vue.js. Интересным мне показался компонентный
        </span>
      </p>
      <p>
        <span>11 </span>
        <span>
          подход написаня приложения. Так же добавил к своим навыкам
        </span>
      </p>
      <p>
        <span>12 </span>
        <span>модульное тестирование, системы сборки и TypeScript.</span>
      </p>
      <p>
        <span>13 </span>
        <span>
          Все стало более интересно. На данный момент активно изучаю React.
        </span>
      </p>
      <p><span>14 </span><span> */</span></p>
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
