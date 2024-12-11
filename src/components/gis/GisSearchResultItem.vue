<template>
  <ul class="searchResultItemList">
    <li class="searchResultItem" v-for="result in data" :key="result.id">
      <button type="button" class="searchResultRowItemBox">
        <span class="searchResultItemRow">
          <StateLabel labelType="road" />
          <span class="searchResultAddress">{{ result.roadAddress }}</span>
        </span>
        <span class="searchResultItemRow">
          <StateLabel labelType="street" />
          <span class="searchResultAddress">{{ result.streetAddress }}</span>
        </span>
      </button>
    </li>
  </ul>
</template>

<script setup>
import StateLabel from '@/components/sub/table/StateLabel.vue'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
