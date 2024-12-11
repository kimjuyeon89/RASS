<template>
  <div class="groupContentBox">
    <h3 v-if="title">{{ title }}</h3>

    <div class="groupContentInnerBox">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.groupContentInnerBox {
  display: flex;

  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 5px;
}

.groupContentBox {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  h3 {
    font-size: 18px;
    font-weight: var(--fw500);
  }
}
</style>
