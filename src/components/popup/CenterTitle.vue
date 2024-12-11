<template>
  <div class="popupCenterTitleArea">
    <h3 class="popupCenterTitleText">{{ title }}</h3>
    <slot name="nextRight" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
