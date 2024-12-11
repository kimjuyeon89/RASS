<template>
  <div class="windowRoot">
    <BS_107 v-if="$route.params.id === '107'" />
    <BS_206 v-if="$route.params.id === '206'" />
    <BS_306 v-if="$route.params.id === '306'" />
    <BS_406 v-if="$route.params.id === '406'" />
    <BS_506 v-if="$route.params.id === '506'" />
    <BS_606 v-if="$route.params.id === '606'" />
    <BS_706 v-if="$route.params.id === '706'" />
    <BS_807 v-if="$route.params.id === '807'" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'WindowIndex',
})

import BS_107 from '@/pages/popup/window/BS/BS_107.vue'
import BS_206 from '@/pages/popup/window/BS/BS_206.vue'
import BS_306 from '@/pages/popup/window/BS/BS_306.vue'
import BS_406 from '@/pages/popup/window/BS/BS_406.vue'
import BS_506 from '@/pages/popup/window/BS/BS_506.vue'
import BS_606 from '@/pages/popup/window/BS/BS_606.vue'
import BS_706 from '@/pages/popup/window/BS/BS_706.vue'
import BS_807 from '@/pages/popup/window/BS/BS_807.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>
