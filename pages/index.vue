<script setup lang="ts">
import { thisProject } from "~/models/projects";
</script>

<template>
  <main class="index-page">
    <div>
      <h5>Hello, I am</h5>
      <h1>Жукович Максим</h1>
      <h3>Front-end developer</h3>

      <div class="index-page__comments">
        <p>// исходный код данной страницы можно найти на Github</p>

        <p class="code">
          <span class="code_key-word">const</span>

          <span class="code_var"> githubLink</span> =

          <a
            href="https://github.com/MaximDevWeb/ChatFrontVue"
            class="code_string"
          >
            "https://github.com/MaximDevWeb/ChatFrontVue"
          </a>
        </p>
      </div>
    </div>

    <div class="index-page__project">
      <project :repo="thisProject" />
    </div>
  </main>
</template>
