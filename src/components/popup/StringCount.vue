<template>
  <div class="stringCount">
    <span class="text-color-blue">{{ textLength }}</span>
    <span class="unit">/</span>
    <span>1000</span>
  </div>
</template>

<script setup>
defineProps({
  textLength: {
    type: Number,
    required: true,
  },
})
</script>
