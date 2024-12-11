<template>
  <textarea
    :class="`baseTextarea ${styleClassName ? styleClassName : ''}`"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :style="`${inlineStyle ? inlineStyle : ''}`"
    @input="onInput"
  ></textarea>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  styleClassName: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  inlineStyle: {
    type: String,
  },
  inputValue: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.modelValue)

const onInput = event => {
  emit('update:modelValue', event.target.value)
}

watch(
  () => props.modelValue,
  newVal => {
    inputValue.value = newVal
  },
)
</script>
