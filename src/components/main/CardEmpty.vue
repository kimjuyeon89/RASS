<template>
  <button type="button" class="cardItem empty">
    <p class="cardItemFavoriteText">{{ text }}</p>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
