<script setup lang="ts">
import email from "~/assets/images/email_icon.svg";
import phone from "~/assets/images/phone_icon.svg";
import { MessageType } from "assets/types/app";
import MessagePreview from "~/components/MessagePreview.vue";
import { sendMessage } from "~/utils/sendEmail";

/**
 * Задаем заголовки страницы
 */
useHead({
  title: "Контакты",
});

const emailSanding = ref(false);
const sanding = ref(false);

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

const submitMessage = async () => {
  errors.name = !data.name.trim();
  errors.email = !data.email.trim();
  errors.message = !data.message.trim();

  if (data.name.trim() && data.email.trim() && data.message.trim()) {
    sanding.value = true;

    const response = await sendMessage(data);
    sanding.value = false;

    if (response.ok) {
      emailSanding.value = true;
    }
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
            <button
              @click.prevent="submitMessage"
              :class="{ inactive: sanding }"
            >
              {{ sanding ? "sanding" : "submit-message" }}
            </button>
          </div>
        </form>
      </div>

      <message-preview :data="data" />
    </div>
  </main>
</template>
