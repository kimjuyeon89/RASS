<template>
  <div class="baseTabContentBox" v-if="current === name">
    <div
      :class="`baseTabContentGroup ${direction ? direction : ''}`"
      v-if="inButton"
    >
      <div class="baseTabContentButtonGroup">
        <slot name="button" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  current: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  inButton: {
    type: Boolean,
  },
  direction: {
    type: String,
  },
})
</script>
