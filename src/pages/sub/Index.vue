<template>
  <div class="subInner">
    <TopArea
      :routeId="$route.params.id"
      :routeCategory="$route.params.category"
    />

    <!-- bs -->
    <BS_1101 v-if="$route.params.id === '1101'" />
    <BS_101
      v-else-if="$route.params.id === '101' && $route.params.category === 'bs'"
    />
    <BS_102
      v-else-if="$route.params.id === '102' && $route.params.category === 'bs'"
    />
    <BS_104
      v-else-if="$route.params.id === '104' && $route.params.category === 'bs'"
    />
    <BS_105
      v-else-if="$route.params.id === '105' && $route.params.category === 'bs'"
    />
    <BS_106
      v-else-if="$route.params.id === '106' && $route.params.category === 'bs'"
    />
    <BS_201
      v-else-if="$route.params.id === '201' && $route.params.category === 'bs'"
    />
    <BS_1201
      v-else-if="$route.params.id === '1201' && $route.params.category === 'bs'"
    />
    <BS_901
      v-else-if="$route.params.id === '901' && $route.params.category === 'bs'"
    />
    <BS_901_noData
      v-else-if="
        $route.params.id === '901_noData' && $route.params.category === 'bs'
      "
    />
    <BS_914
      v-else-if="$route.params.id === '914' && $route.params.category === 'bs'"
    />
    <BS_911
      v-else-if="$route.params.id === '911' && $route.params.category === 'bs'"
    />
    <BS_905
      v-else-if="$route.params.id === '905' && $route.params.category === 'bs'"
    />
    <BS_202
      v-else-if="$route.params.id === '202' && $route.params.category === 'bs'"
    />
    <BS_204
      v-else-if="$route.params.id === '204' && $route.params.category === 'bs'"
    />
    <BS_205
      v-else-if="$route.params.id === '205' && $route.params.category === 'bs'"
    />
    <BS_1001
      v-else-if="$route.params.id === '1001' && $route.params.category === 'bs'"
    />
    <BS_801
      v-else-if="$route.params.id === '801' && $route.params.category === 'bs'"
    />
    <BS_704 v-else-if="$route.params.id === '704'" />
    <BS_504
      v-else-if="$route.params.id === '504' && $route.params.category === 'bs'"
    />
    <BS_604
      v-else-if="$route.params.id === '604' && $route.params.category === 'bs'"
    />
    <BS_404
      v-else-if="$route.params.id === '404' && $route.params.category === 'bs'"
    />
    <BS_304
      v-else-if="$route.params.id === '304' && $route.params.category === 'bs'"
    />
    <BS_301
      v-else-if="$route.params.id === '301' && $route.params.category === 'bs'"
    />
    <BS_1501
      v-else-if="$route.params.id === '1501' && $route.params.category === 'bs'"
    />
    <BS_1502
      v-else-if="$route.params.id === '1502' && $route.params.category === 'bs'"
    />

    <!-- sm -->
    <SM_301
      v-else-if="$route.params.id === '301' && $route.params.category === 'sm'"
    />
    <SM_401
      v-else-if="$route.params.id === '401' && $route.params.category === 'sm'"
    />
    <SM_402
      v-else-if="$route.params.id === '402' && $route.params.category === 'sm'"
    />
    <SM_501
      v-else-if="$route.params.id === '501' && $route.params.category === 'sm'"
    />
    <SM_504
      v-else-if="$route.params.id === '504' && $route.params.category === 'sm'"
    />
    <SM_507
      v-else-if="$route.params.id === '507' && $route.params.category === 'sm'"
    />
    <SM_508
      v-else-if="$route.params.id === '508' && $route.params.category === 'sm'"
    />
    <SM_601
      v-else-if="$route.params.id === '601' && $route.params.category === 'sm'"
    />
    <SM_604
      v-else-if="$route.params.id === '604' && $route.params.category === 'sm'"
    />
    <SM_607
      v-else-if="$route.params.id === '607' && $route.params.category === 'sm'"
    />
    <SM_701
      v-else-if="$route.params.id === '701' && $route.params.category === 'sm'"
    />
    <SM_711
      v-else-if="$route.params.id === '711' && $route.params.category === 'sm'"
    />
    <SM_801
      v-else-if="$route.params.id === '801' && $route.params.category === 'sm'"
    />
    <SM_901_page1
      v-else-if="
        $route.params.id === '901_1' && $route.params.category === 'sm'
      "
    />
    <SM_901_page2
      v-else-if="
        $route.params.id === '901_2' && $route.params.category === 'sm'
      "
    />



    
    <!-- pm -->
    <PM_101
      v-else-if="$route.params.id === '101' && $route.params.category === 'pm'"
    />
    <PM_102
      v-else-if="$route.params.id === '102' && $route.params.category === 'pm'"
    />
    <PM_103
      v-else-if="$route.params.id === '103' && $route.params.category === 'pm'"
    />
    <PM_104
      v-else-if="$route.params.id === '104' && $route.params.category === 'pm'"
    />
    <PM_105
      v-else-if="$route.params.id === '105' && $route.params.category === 'pm'"
    />
    <PM_106
      v-else-if="$route.params.id === '106' && $route.params.category === 'pm'"
    />
    <PM_107
      v-else-if="$route.params.id === '107' && $route.params.category === 'pm'"
    />
    <PM_108
      v-else-if="$route.params.id === '108' && $route.params.category === 'pm'"
    />
    <PM_109
      v-else-if="$route.params.id === '109' && $route.params.category === 'pm'"
    />
    <PM_110
      v-else-if="$route.params.id === '110' && $route.params.category === 'pm'"
    />
    <PM_111
      v-else-if="$route.params.id === '111' && $route.params.category === 'pm'"
    />

    <AC_1401
      v-else-if="$route.params.id === '1401' && $route.params.category === 'ac'"
    />
    <AC_1402
      v-else-if="$route.params.id === '1402' && $route.params.category === 'ac'"
    />

    <Temp1 v-else-if="$route.params.id === 'temp1'" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'subIndex',
})

import TopArea from '@/components/sub/layout/TopArea.vue'

import BS_1101 from '@/pages/sub/BS/BS_1101.vue'
import BS_101 from '@/pages/sub/BS/BS_101.vue'
import BS_102 from '@/pages/sub/BS/BS_102.vue'
import BS_104 from '@/pages/sub/BS/BS_104.vue'
import BS_105 from '@/pages/sub/BS/BS_105.vue'
import BS_106 from '@/pages/sub/BS/BS_106.vue'
import BS_201 from '@/pages/sub/BS/BS_201.vue'
import BS_1201 from '@/pages/sub/BS/BS_1201.vue'
import BS_901 from '@/pages/sub/BS/BS_901.vue'
import BS_914 from '@/pages/sub/BS/BS_914.vue'
import BS_901_noData from '@/pages/sub/BS/BS_901_noData.vue'
import BS_911 from '@/pages/sub/BS/BS_911.vue'
import BS_905 from '@/pages/sub/BS/BS_905.vue'
import BS_202 from '@/pages/sub/BS/BS_202.vue'
import BS_204 from '@/pages/sub/BS/BS_204.vue'
import BS_205 from '@/pages/sub/BS/BS_205.vue'
import BS_1001 from '@/pages/sub/BS/BS_1001.vue'
import BS_801 from '@/pages/sub/BS/BS_801.vue'
import BS_704 from '@/pages/sub/BS/BS_704.vue'
import BS_504 from '@/pages/sub/BS/BS_504.vue'
import BS_604 from '@/pages/sub/BS/BS_604.vue'
import BS_404 from '@/pages/sub/BS/BS_404.vue'
import BS_304 from '@/pages/sub/BS/BS_304.vue'
import BS_301 from '@/pages/sub/BS/BS_301.vue'
import BS_1501 from '@/pages/sub/BS/BS_1501.vue'
import BS_1502 from '@/pages/sub/BS/BS_1502.vue'

import SM_301 from '@/pages/sub/SM/SM_301.vue'
import SM_401 from '@/pages/sub/SM/SM_401.vue'
import SM_402 from '@/pages/sub/SM/SM_402.vue'
import SM_501 from '@/pages/sub/SM/SM_501.vue'
import SM_504 from '@/pages/sub/SM/SM_504.vue'
import SM_507 from '@/pages/sub/SM/SM_507.vue'
import SM_508 from '@/pages/sub/SM/SM_508.vue'
import SM_601 from '@/pages/sub/SM/SM_601.vue'
import SM_604 from '@/pages/sub/SM/SM_604.vue'
import SM_607 from '@/pages/sub/SM/SM_607.vue'
import SM_701 from '@/pages/sub/SM/SM_701.vue'
import SM_711 from '@/pages/sub/SM/SM_711.vue'
import SM_801 from '@/pages/sub/SM/SM_801.vue'
import SM_901_page1 from '@/pages/sub/SM/SM_901_page1.vue'
import SM_901_page2 from '@/pages/sub/SM/SM_901_page2.vue'

import PM_101 from '@/pages/sub/PM/PM_101.vue'
import PM_102 from '@/pages/sub/PM/PM_102.vue'
import PM_103 from '@/pages/sub/PM/PM_103.vue'
import PM_104 from '@/pages/sub/PM/PM_104.vue'
import PM_105 from '@/pages/sub/PM/PM_105.vue'
import PM_106 from '@/pages/sub/PM/PM_106.vue'
import PM_107 from '@/pages/sub/PM/PM_107.vue'
import PM_108 from '@/pages/sub/PM/PM_108.vue'
import PM_109 from '@/pages/sub/PM/PM_109.vue'
import PM_110 from '@/pages/sub/PM/PM_110.vue'
import PM_111 from '@/pages/sub/PM/PM_111.vue'

import AC_1401 from '@/pages/sub/AC/AC_1401.vue'
import AC_1402 from '@/pages/sub/AC/AC_1402.vue'

import Temp1 from '@/pages/sub/temp/Temp1.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>
