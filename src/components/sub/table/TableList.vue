<template>
  <div class="tableListWrapper">
    <ul class="tableListUl">
      <li v-for="listItem in data" :key="listItem.id" class="tableListItem">
        <p class="tableListText">{{ listItem.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
