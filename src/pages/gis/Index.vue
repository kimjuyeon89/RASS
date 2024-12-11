<template>
  <main class="gisContents">
    <div class="gisContentsInner">
      <GM_101
        v-if="$route.params.id === '101' && $route.params.category === 'gm'"
      />
      <GM_102
        v-else-if="
          $route.params.id === '102' && $route.params.category === 'gm'
        "
      />
      <GM_103
        v-else-if="
          $route.params.id === '103' && $route.params.category === 'gm'
        "
      />
      <GM_104
        v-else-if="
          $route.params.id === '104' && $route.params.category === 'gm'
        "
      />
      <GM_105
        v-else-if="
          $route.params.id === '105' && $route.params.category === 'gm'
        "
      />
    </div>
  </main>
</template>

<script setup>
defineOptions({
  name: 'gisIndex',
})

import { useRoute } from 'vue-router'

import GM_101 from '@/pages/gis/GM/GM_101.vue'
import GM_102 from '@/pages/gis/GM/GM_102.vue'
import GM_103 from '@/pages/gis/GM/GM_103.vue'
import GM_104 from '@/pages/gis/GM/GM_104.vue'
import GM_105 from '@/pages/gis/GM/GM_105.vue'

const route = useRoute()
console.log(route.params)
</script>
