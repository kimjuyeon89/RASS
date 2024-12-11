<template>
  <div class="resultArea">
    <span>총</span>
    <span class="text-color-blue">{{ count }}</span>
    <span>{{ unit ? unit : '건' }}</span>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TableResult',
})

defineProps({
  count: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
  },
})
</script>
