<template>
  <span class="label blue" v-if="labelType === 'blue'">검수완료</span>
  <span class="label red" v-else-if="labelType === 'red'">검수반려</span>
  <span class="label black" v-else-if="labelType === 'black'">검수대기</span>
  <span class="label search blue" v-else-if="labelType === 'road'">도로명</span>
  <span class="label search green" v-else-if="labelType === 'street'"
    >지번</span
  >
</template>

<script setup>
defineProps({
  labelType: {
    type: String,
    required: true,
  },
})
</script>
