<template>
  <div :class="`popup ${styleClassName ? styleClassName : ''}`" v-if="visible">
    <div class="popupInner" :style="`max-width: ${maxWidth}px `">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CommonPopup',
})

defineProps({
  maxWidth: {
    type: Number,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
  styleClassName: {
    type: String,
  },
})
</script>
