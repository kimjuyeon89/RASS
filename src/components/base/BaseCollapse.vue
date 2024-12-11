<template>
  <div :class="`baseCollapseContents ${activeState ? 'active' : ''}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  activeState: {
    type: Boolean,
    required: true,
  },
})
</script>
