<template>
  <div class="bottomArea">
    <div
      :class="`bottomGroupBox ${left ? 'left' : ''} ${right ? 'right' : ''} ${center ? 'center' : ''}`"
    >
      <div class="bottomGroup" v-if="left || both">
        <slot name="left" />
      </div>
      <div class="bottomGroup" v-if="center">
        <slot name="center" />
      </div>
      <div class="bottomGroup" v-if="right || both">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  left: {
    type: Boolean,
  },
  center: {
    type: Boolean,
  },
  right: {
    type: Boolean,
  },
  both: {
    type: Boolean,
  },
})
</script>
