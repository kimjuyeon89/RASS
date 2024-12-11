<template>
  <div
    :id="sheetId"
    :class="`ibsheetRoot ${styleClassName ? styleClassName : ''}`"
    :style="inlineStyle"
  />
</template>

<script setup>
defineProps({
  sheetId: {
    type: String,
    required: true,
  },
  styleClassName: {
    type: String,
  },
  inlineStyle: {
    type: String,
  },
})

defineOptions({
  name: 'SubIbsheet',
})
</script>
