<template>
  <button
    type="button"
    :class="`baseButton ${styleClassName ? styleClassName : ''}`"
    :disabled="disabled"
  >
    <span v-if="label">{{ label }}</span>
    <span v-if="hiddenText" class="hidden">{{ hiddenText }}</span>
    <slot name="label" />
    <slot name="icon" />
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  styleClassName: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  hiddenText: {
    type: String,
  },
})
</script>
