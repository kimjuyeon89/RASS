<template>
  <div class="sectionDescriptionBox">
    <div
      v-for="(descGroup, descGroupIndex) in descGroupData"
      :key="descGroupIndex"
      class="sectionDescriptionGroup"
    >
      <strong class="sectionDescriptionGroupTitle">{{
        descGroup.title
      }}</strong>
      <span class="sectionDescriptionGroupText">{{ descGroup.text }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  descGroupData: {
    type: Object,
  },
})
</script>
