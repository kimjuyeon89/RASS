<template>
  <div class="pageResultWrapper">
    <div class="pageResultInfo">
      <span class="pageResultInfoText">페이지당 건수</span>

      <BaseSelect
        styleClassName="pageResultSelect"
        initialSelectValue="10"
        :options="resultSelectList"
      />
    </div>

    <div class="pageResultCount">
      <span class="pageResultInfoText">총건수</span>
      <span class="pageResultInfoText text-bold">{{ count }}</span>
      <span class="pageResultInfoText">건</span>
    </div>
  </div>
</template>

<script setup>
import BaseSelect from '@/components/base/BaseSelect.vue'

defineProps({
  resultSelectList: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
})
</script>
