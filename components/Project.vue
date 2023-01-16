<script setup lang="ts">
import { ProjectItem } from "assets/types/app";

/**
 * Компонент отображения проекта
 *
 * @props repo - объект с данными о реппозитории
 */

const props = defineProps<{
  repo: ProjectItem;
}>();

/**
 * Формируем строку на основании repo
 */
const code = computed(() => {
  let result = "";

  for (let [key, value] of Object.entries(props.repo)) {
    if (key === "link" || key === "github_link") continue;
    if (Array.isArray(value)) value = value.join(", ");

    result += `\n  @${key}: ${value}`;
  }
  return result;
});
</script>

<template>
  <div class="project">
    <div class="project__header">
      <div class="project__name">{{ repo.name }}</div>
      <div class="project__commit">{{ repo.commits }} commits</div>
    </div>

    <div class="project__code code">
      <pre class="code_comment">{{ `/** ${code} \n  */` }}</pre>

      <a :href="repo.link" class="project__link" target="_blank">
        see this project
      </a>
    </div>
  </div>
</template>
