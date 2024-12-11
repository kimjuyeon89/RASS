<template>
  <div :class="`baseTabWrapper ${styleClassName ? styleClassName : ''}`">
    <slot name="tabItem" />

    <div class="baseTabContentList">
      <slot name="tabContent" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  styleClassName: {
    type: String,
  },
})
</script>
