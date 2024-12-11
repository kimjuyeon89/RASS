<template>
  <div :class="`emptyArea ${className ? className : ''}`" :style="`height: ${height ? height : 'auto'}`">
    <img :src="src" :alt="alt" :width="imageWidth ? imageWidth : 113" :height="imageHeight ? imageHeight : 187" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
  className: {
    type: String,
  },
  height: {
    type: String,
  },
  imageWidth: {
    type: Number,
  },
  imageHeight: {
    type: Number,
  },
});

console.log(props.src);
</script>
