<template>
  <div class="groupBox">
    <div class="groupHead">
      <h2>{{ title }}</h2>
    </div>
    <div class="groupBody" :style="`max-width: ${bodyMaxWidth}`">
      <div class="groupContent">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  bodyMaxWidth: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.groupHead {
  margin-bottom: 30px;

  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    color: #000;
    font-size: 26px;
    font-weight: 700;
  }
}

.groupBody {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
}

.groupContent {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
