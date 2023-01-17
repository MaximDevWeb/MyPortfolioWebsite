<script setup lang="ts">
import email from "~/assets/images/email_icon.svg";
import phone from "~/assets/images/phone_icon.svg";
import logo from "~/assets/images/logo.svg";
import { MessageType } from "assets/types/app";
import Message from "~/utils/sendEmail";

const emailSanding = ref(false);

const data = reactive<MessageType>({
  name: "",
  email: "",
  message: "",
});

const errors = reactive({
  name: false,
  email: false,
  message: false,
});

const cleanError = (field: "name" | "email" | "message") => {
  errors[field] = false;
};

const submitMessage = () => {
  errors.name = !data.name.trim();
  errors.email = !data.email.trim();
  errors.message = !data.message.trim();

  if (data.name.trim() && data.email.trim() && data.message.trim()) {
    const message = new Message(data);
    message.send().then(() => {
      emailSanding.value = true;
    });
  }
};

const sendNew = () => {
  data.name = "";
  data.email = "";
  data.message = "";

  emailSanding.value = false;
};
</script>

<template>
  <main class="contact-page">
    <div class="contact-page__wrap">
      <div class="contact-page__form">
        <h1>&lt;My contact&gt;</h1>

        <div class="contact-page__static">
          <a href="mailto:maxim.dev.web@gmail.com">
            <img :src="email" alt="email" />
            maxim.dev.web@gmail.com
          </a>
          <a href="tel:+79026594019">
            <img :src="phone" alt="phone" />
            +7 902 659-40-19
          </a>
        </div>

        <div class="contact-page__sanding" v-if="emailSanding">
          <h3>_email_sanding!</h3>

          <p>
            Ваше сообщение отправлено. Я обязательно его прочту и отвечу Вам в
            ближайшее время!
          </p>

          <div class="contact-page__button">
            <button @click.prevent="sendNew">send-new-message</button>
          </div>
        </div>

        <form class="contact-page__dynamic" v-else>
          <div class="contact-page__input">
            <label for="name">
              _name:
              <span class="contact-page__error" v-if="errors.name">
                ввидите имя
              </span>
            </label>
            <input
              id="name"
              type="text"
              v-model="data.name"
              @input="cleanError('name')"
            />
          </div>

          <div class="contact-page__input">
            <label for="email">
              _email:
              <span class="contact-page__error" v-if="errors.email">
                ввидите email
              </span>
            </label>
            <input
              id="email"
              type="email"
              v-model="data.email"
              @input="cleanError('email')"
            />
          </div>

          <div class="contact-page__input">
            <label for="message">
              _message:
              <span class="contact-page__error" v-if="errors.message">
                ввидите сообщение
              </span>
            </label>
            <textarea
              id="message"
              rows="4"
              v-model="data.message"
              @input="cleanError('message')"
            />
          </div>

          <div class="contact-page__button">
            <button @click.prevent="submitMessage">submit-message</button>
          </div>
        </form>
      </div>

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
    </div>
  </main>
</template>
