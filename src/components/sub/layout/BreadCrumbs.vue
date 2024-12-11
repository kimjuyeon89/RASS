<template>
  <nav class="breadCrumbWrapper">
    <ol class="breadCrumbList">
      <li class="breadCrumbItemHome">
        <router-link to="/">
          <span class="hidden">홈으로 이동</span>
        </router-link>
      </li>
      <li class="breadCrumbItem" v-if="prev">
        <span class="breadCrumbItemText">{{ prev }}</span>
      </li>
      <li class="breadCrumbItem current">
        <span class="breadCrumbItemText">{{ title }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  prev: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
