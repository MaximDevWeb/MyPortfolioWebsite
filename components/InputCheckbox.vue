<script setup lang="ts">
/**
 * Компонент для стилизации checkbox
 *
 * @props label - название для label
 * @props value - значение элемента
 * @props modelValue - значения v-model
 */
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Array,
    default: [],
  },
});

/**
 * Регистрируем события
 */
const emit = defineEmits(["update:modelValue"]);

/**
 * Следим за изменние checkbox и обновляем значениия
 *
 * @param event
 */
const changeHandler = (event: InputEvent) => {
  if ((event.target as HTMLInputElement).checked) {
    props.modelValue.push(props.value);
    emit("update:modelValue", props.modelValue);
  } else {
    emit(
      "update:modelValue",
      props.modelValue.filter((item) => item !== props.value)
    );
  }
};
</script>

<template>
  <div class="checkbox">
    <input
      :id="value"
      type="checkbox"
      :value="value"
      :checked="modelValue.includes(value)"
      @change="changeHandler"
    />
    <label :for="value">{{ label }}</label>
  </div>
</template>
