<script setup lang="ts">
import { SkillType } from "assets/types/app";
import { skills } from "~/models/skills";

/**
 * Задаем заголовки страницы
 */
useHead({
  title: "Мои навыки",
});

const skillsFilter = ref<Array<string>>([
  SkillType.BACKEND,
  SkillType.FRONTEND,
  SkillType.TOOLS,
]);

skills.sort(() => (Math.random() > 0.5 ? 1 : -1));
</script>

<template>
  <main class="skills-page">
    <h1>&lt;My skills&gt;</h1>

    <div class="skills__nav">
      <input-checkbox
        label="_frontend"
        :value="SkillType.FRONTEND"
        v-model="skillsFilter"
      />
      <input-checkbox
        label="_backend"
        :value="SkillType.BACKEND"
        v-model="skillsFilter"
      />
      <input-checkbox
        label="_tools"
        :value="SkillType.TOOLS"
        v-model="skillsFilter"
      />
    </div>

    <client-only>
      <scroll-field class="skills__list">
        <div
          class="skills__item"
          :class="{ skills__item_inactive: !skillsFilter.includes(skill.type) }"
          v-for="skill in skills"
          :key="skill.name"
        >
          <img :src="`/images/skills/${skill.image}`" :alt="skill.name" />
          <p>{{ skill.name }}</p>
        </div>
      </scroll-field>
    </client-only>
  </main>
</template>
