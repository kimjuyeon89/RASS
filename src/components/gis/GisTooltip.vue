<template>
  <div class="gisTooltip">
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
