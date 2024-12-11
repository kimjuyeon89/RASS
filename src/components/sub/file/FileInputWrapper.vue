<template>
  <div
    :class="`fileInputBoxWrapper ${justify ? justify : ''} ${size ? size : ''}`"
    :style="maxWidth ? `max-width: ${maxWidth}px` : ''"
  >
    <slot name="left" />

    <BaseButton
      :styleClassName="`md pd-sm bgGray fileButton ${buttonStyleClassName ? buttonStyleClassName : ''}`"
    >
      <template v-slot:label>
        <label for="f01">{{ label }}</label>
      </template>
    </BaseButton>

    <slot name="right" />

    <slot name="button" />
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'

defineProps({
  label: {
    type: String,
  },
  maxWidth: {
    type: Number,
  },
  justify: {
    type: String,
  },
  buttonStyleClassName: {
    type: String,
  },
  size: {
    type: String,
  },
})
</script>
