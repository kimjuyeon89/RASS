<template>
  <aside :class="`gisSidebarWrapper ${sidebar ? 'active' : ''} gisElement`">
    <button type="button" class="btnGisSidebar" @click="toggleSidebar">
      <span class="hidden">{{ sidebar ? '펼치기' : '접기' }}</span>
    </button>

    <div class="gisSidebarContents">
      <slot name="contents" />
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const sidebar = ref(true)

const toggleSidebar = () => {
  sidebar.value = !sidebar.value
}
</script>
