<template>
  <div
    :class="`baseTextFieldWrapper ${before ? 'hasBeforeText' : ''} ${inputError ? 'error' : ''}`"
  >
    <label :for="inputId" class="beforeText" v-if="before === 'text'">{{
      beforeLabel
    }}</label>
    <input
      :type="inputType"
      :id="inputId"
      :name="inputName"
      :value="inputValue"
      :class="`baseTextField baseInput ${styleClassName ? styleClassName : ''} ${inputError ? 'error' : ''} ${disabled || readonly ? 'grayscale' : ''}`"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :title="disabled ? inputValue : null"
      :style="inlineStyle ? inlineStyle : ''"
      @input="onInput"
    />
    <slot name="prepend" />
    <p class="errorMessage" v-if="inputError">{{ inputErrorMessage }}</p>
    <label :for="inputId" v-if="isLabel" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  before: {
    type: String,
  },
  beforeLabel: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
  },
  inputValue: {
    type: String,
  },
  inputName: {
    type: String,
  },
  inputId: {
    type: String,
  },
  inputError: {
    type: Boolean,
  },
  inputErrorMessage: {
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
  placeholder: {
    type: String,
  },
  isLabel: {
    type: Boolean,
  },
  inlineStyle: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputModelValue = ref(props.modelValue)

const onInput = event => {
  emit('update:modelValue', event.target.value)
}

watch(
  () => props.modelValue,
  newVal => {
    inputModelValue.value = newVal
  },
)
</script>
