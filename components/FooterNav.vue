<script setup lang="ts">
import { GithubItem } from "@/assets/types/app";

/**
 * Компонент нижней навигационной панели
 */

/**
 * Список ссылок на Github профили
 */
const githubItems: Array<GithubItem> = [
  { link: "https://github.com/MaximDevWeb", name: "MaximDevWeb" },
  { link: "https://github.com/Makkssimka", name: "Makkssimka" },
];
</script>

<template>
  <div class="footer_nav">
    <div class="container">
      <div class="footer__find">
        <span>find me in:</span>

        <github-link
          v-for="item in githubItems"
          :name="item.name"
          :link="item.link"
        />
      </div>

      <footer-time />
    </div>
  </div>
</template>
