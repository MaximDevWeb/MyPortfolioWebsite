<script setup lang="ts">
import { ProjectItem } from "assets/types/app";
import github_link from "~/assets/images/github_icon.svg";
import external_link from "~/assets/images/external_link_icon.svg";

/**
 * Компонент отображения проекта в списке
 *
 * @props repo - объект с данными о реппозитории
 */

const props = defineProps<{
  repo: ProjectItem;
}>();

/**
 * Формируем строку на основании repo
 */
const itemIgnore = ["link", "github_link"];

const code = computed(() => {
  let result = "";

  for (let [key, value] of Object.entries(props.repo)) {
    if (itemIgnore.includes(key)) continue;
    if (Array.isArray(value)) value = value.join(", ");

    result += `<p>@${key}: <span>${value}</span></p>`;
  }

  return result;
});
</script>

<template>
  <div class="project-item">
    <div class="project-item__header">
      <div class="project-item__name">{{ repo.name }}</div>
      <div class="project-item__commit">{{ repo.commits }} commits</div>
    </div>

    <div class="project-item__code code">
      <div class="code_comment" v-html="`/*${code}*/`"></div>
    </div>

    <div class="project-item__links">
      <a :href="repo.github_link" target="_blank" v-if="repo.github_link">
        <img :src="github_link" alt="Github link" />
        Project
      </a>

      <a :href="repo.link" target="_blank" v-if="repo.link">
        <img :src="external_link" alt="Github link" />
        Site
      </a>
    </div>
  </div>
</template>
