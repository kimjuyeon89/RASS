<template>
  <div
    :class="`markerWrapper ${styleClassName ? styleClassName : ''}`"
    :style="inlineStyle ? inlineStyle : ''"
  >
    <GisTooltip :text="tooltipText" v-if="tooltipText" />
    <div class="markerCircle"></div>
  </div>
</template>

<script setup>
import GisTooltip from './GisTooltip.vue'

defineProps({
  styleClassName: {
    type: String,
  },
  inlineStyle: {
    type: String,
  },
  tooltipText: {
    type: String,
  },
})
</script>
