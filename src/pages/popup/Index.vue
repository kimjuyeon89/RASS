<template>
  <div id="popupRoot">
    <BS_1202
      v-if="$route.params.id === '1202' && $route.params.category === 'bs'"
    />
    <BS_1203
      v-else-if="$route.params.id === '1203' && $route.params.category === 'bs'"
    />
    <BS_1204
      v-else-if="$route.params.id === '1204' && $route.params.category === 'bs'"
    />
    <BS_110
      v-else-if="$route.params.id === '110' && $route.params.category === 'bs'"
    />
    <BS_111
      v-else-if="$route.params.id === '111' && $route.params.category === 'bs'"
    />
    <BS_113
      v-else-if="$route.params.id === '113' && $route.params.category === 'bs'"
    />
    <BS_114
      v-else-if="$route.params.id === '114' && $route.params.category === 'bs'"
    />
    <BS_115
      v-else-if="$route.params.id === '115' && $route.params.category === 'bs'"
    />
    <BS_116
      v-else-if="$route.params.id === '116' && $route.params.category === 'bs'"
    />
    <BS_117
      v-else-if="$route.params.id === '117' && $route.params.category === 'bs'"
    />
    <BS_118
      v-else-if="$route.params.id === '118' && $route.params.category === 'bs'"
    />
    <BS_902
      v-else-if="$route.params.id === '902' && $route.params.category === 'bs'"
    />
    <BS_912
      v-else-if="$route.params.id === '912' && $route.params.category === 'bs'"
    />
    <BS_903
      v-else-if="$route.params.id === '903' && $route.params.category === 'bs'"
    />
    <BS_904
      v-else-if="$route.params.id === '904' && $route.params.category === 'bs'"
    />
    <BS_913
      v-else-if="$route.params.id === '913' && $route.params.category === 'bs'"
    />
    <BS_208
      v-else-if="$route.params.id === '208' && $route.params.category === 'bs'"
    />
    <BS_209
      v-else-if="$route.params.id === '209' && $route.params.category === 'bs'"
    />
    <BS_210
      v-else-if="$route.params.id === '210' && $route.params.category === 'bs'"
    />
    <BS_804
      v-else-if="$route.params.id === '804' && $route.params.category === 'bs'"
    />
    <BS_708
      v-else-if="$route.params.id === '708' && $route.params.category === 'bs'"
    />
    <BS_508
      v-else-if="$route.params.id === '508' && $route.params.category === 'bs'"
    />
    <BS_608
      v-else-if="$route.params.id === '608' && $route.params.category === 'bs'"
    />
    <BS_408
      v-else-if="$route.params.id === '408' && $route.params.category === 'bs'"
    />
    <BS_308
      v-else-if="$route.params.id === '308' && $route.params.category === 'bs'"
    />
    <BS_109
      v-else-if="$route.params.id === '109' && $route.params.category === 'bs'"
    />
    <BS_1503
      v-else-if="$route.params.id === '1503' && $route.params.category === 'bs'"
    />

    <SM_102 v-else-if="$route.params.id === '102'" />
    <SM_302 v-else-if="$route.params.id === '302'" />
    <SM_303 v-else-if="$route.params.id === '303'" />
    <SM_502 v-else-if="$route.params.id === '502'" />
    <SM_503 v-else-if="$route.params.id === '503'" />
    <SM_505 v-else-if="$route.params.id === '505'" />
    <SM_506 v-else-if="$route.params.id === '506'" />
    <SM_509 v-else-if="$route.params.id === '509'" />
    <SM_510 v-else-if="$route.params.id === '510'" />
    <SM_602 v-else-if="$route.params.id === '602'" />
    <SM_603 v-else-if="$route.params.id === '603'" />
    <SM_605 v-else-if="$route.params.id === '605'" />
    <SM_606 v-else-if="$route.params.id === '606'" />
    <SM_608 v-else-if="$route.params.id === '608'" />
    <SM_702 v-else-if="$route.params.id === '702'" />
    <SM_703 v-else-if="$route.params.id === '703'" />
    <SM_712 v-else-if="$route.params.id === '712'" />
    <SM_713 v-else-if="$route.params.id === '713'" />
    <SM_721 v-else-if="$route.params.id === '721'" />
    <SM_802 v-else-if="$route.params.id === '802'" />
    <SM_803 v-else-if="$route.params.id === '803'" />
    <SM_902
      v-else-if="$route.params.id === '902' && $route.params.category === 'sm'"
    />
    <SM_903
      v-else-if="$route.params.id === '903' && $route.params.category === 'sm'"
    />
    <SM_904
      v-else-if="$route.params.id === '904' && $route.params.category === 'sm'"
    />
    <SM_905
      v-else-if="$route.params.id === '905' && $route.params.category === 'sm'"
    />

    <PM_112
      v-else-if="$route.params.id === '112' && $route.params.category === 'pm'"
    />
    <PM_113
      v-else-if="$route.params.id === '113' && $route.params.category === 'pm'"
    />
    <PM_114
      v-else-if="$route.params.id === '114' && $route.params.category === 'pm'"
    />
    <PM_115
      v-else-if="$route.params.id === '115' && $route.params.category === 'pm'"
    />
    <PM_116
      v-else-if="$route.params.id === '116' && $route.params.category === 'pm'"
    />
    <PM_117
      v-else-if="$route.params.id === '117' && $route.params.category === 'pm'"
    />
    <PM_118
      v-else-if="$route.params.id === '118' && $route.params.category === 'pm'"
    />
    <PM_119
      v-else-if="$route.params.id === '119' && $route.params.category === 'pm'"
    />
    <PM_120
      v-else-if="$route.params.id === '120' && $route.params.category === 'pm'"
    />
    <PM_121
      v-else-if="$route.params.id === '121' && $route.params.category === 'pm'"
    />

    <AC_1403
      v-else-if="$route.params.id === '1403' && $route.params.category === 'ac'"
    />
    <AC_1404
      v-else-if="$route.params.id === '1404' && $route.params.category === 'ac'"
    />
    <AC_1405
      v-else-if="$route.params.id === '1405' && $route.params.category === 'ac'"
    />
    <AC_1406
      v-else-if="$route.params.id === '1406' && $route.params.category === 'ac'"
    />
    <AC_1408
      v-else-if="$route.params.id === '1408' && $route.params.category === 'ac'"
    />

    <Temp1 v-else-if="$route.params.id === 'temp1'" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'PopupIndex',
})

import BS_1202 from '@/pages/popup/BS/BS_1202.vue'
import BS_1203 from '@/pages/popup/BS/BS_1203.vue'
import BS_1204 from '@/pages/popup/BS/BS_1204.vue'
import BS_902 from '@/pages/popup/BS/BS_902.vue'
import BS_912 from '@/pages/popup/BS/BS_912.vue'
import BS_903 from '@/pages/popup/BS/BS_903.vue'
import BS_904 from '@/pages/popup/BS/BS_904.vue'
import BS_913 from '@/pages/popup/BS/BS_913.vue'

import BS_208 from '@/pages/popup/BS/BS_208.vue'
import BS_209 from '@/pages/popup/BS/BS_209.vue'
import BS_210 from '@/pages/popup/BS/BS_210.vue'
import BS_110 from '@/pages/popup/BS/BS_110.vue'
import BS_111 from '@/pages/popup/BS/BS_111.vue'
import BS_113 from '@/pages/popup/BS/BS_113.vue'
import BS_114 from '@/pages/popup/BS/BS_114.vue'
import BS_115 from '@/pages/popup/BS/BS_115.vue'
import BS_116 from '@/pages/popup/BS/BS_116.vue'
import BS_117 from '@/pages/popup/BS/BS_117.vue'
import BS_118 from '@/pages/popup/BS/BS_118.vue'
import BS_804 from '@/pages/popup/BS/BS_804.vue'
import BS_708 from '@/pages/popup/BS/BS_708.vue'
import BS_508 from '@/pages/popup/BS/BS_508.vue'
import BS_608 from '@/pages/popup/BS/BS_608.vue'
import BS_408 from '@/pages/popup/BS/BS_408.vue'
import BS_308 from '@/pages/popup/BS/BS_308.vue'
import BS_109 from '@/pages/popup/BS/BS_109.vue'
import BS_1503 from '@/pages/popup/BS/BS_1503.vue'

import SM_102 from '@/pages/popup/SM/SM_102.vue'
import SM_302 from '@/pages/popup/SM/SM_302.vue'
import SM_303 from '@/pages/popup/SM/SM_303.vue'
import SM_502 from '@/pages/popup/SM/SM_502.vue'
import SM_503 from '@/pages/popup/SM/SM_503.vue'
import SM_505 from '@/pages/popup/SM/SM_505.vue'
import SM_506 from '@/pages/popup/SM/SM_506.vue'
import SM_509 from '@/pages/popup/SM/SM_509.vue'
import SM_510 from '@/pages/popup/SM/SM_510.vue'
import SM_602 from '@/pages/popup/SM/SM_602.vue'
import SM_603 from '@/pages/popup/SM/SM_603.vue'
import SM_605 from '@/pages/popup/SM/SM_605.vue'
import SM_606 from '@/pages/popup/SM/SM_606.vue'
import SM_608 from '@/pages/popup/SM/SM_608.vue'
import SM_702 from '@/pages/popup/SM/SM_702.vue'
import SM_703 from '@/pages/popup/SM/SM_703.vue'
import SM_712 from '@/pages/popup/SM/SM_712.vue'
import SM_713 from '@/pages/popup/SM/SM_713.vue'
import SM_721 from '@/pages/popup/SM/SM_721.vue'
import SM_802 from '@/pages/popup/SM/SM_802.vue'
import SM_803 from '@/pages/popup/SM/SM_803.vue'
import SM_902 from '@/pages/popup/SM/SM_902.vue'
import SM_903 from '@/pages/popup/SM/SM_903.vue'
import SM_904 from '@/pages/popup/SM/SM_904.vue'
import SM_905 from '@/pages/popup/SM/SM_905.vue'

import PM_112 from '@/pages/popup/PM/PM_112.vue'
import PM_113 from '@/pages/popup/PM/PM_113.vue'
import PM_114 from '@/pages/popup/PM/PM_114.vue'
import PM_115 from '@/pages/popup/PM/PM_115.vue'
import PM_116 from '@/pages/popup/PM/PM_116.vue'
import PM_117 from '@/pages/popup/PM/PM_117.vue'
import PM_118 from '@/pages/popup/PM/PM_118.vue'
import PM_119 from '@/pages/popup/PM/PM_119.vue'
import PM_120 from '@/pages/popup/PM/PM_120.vue'
import PM_121 from '@/pages/popup/PM/PM_121.vue'

import AC_1403 from '@/pages/popup/AC/AC_1403.vue'
import AC_1404 from '@/pages/popup/AC/AC_1404.vue'
import AC_1405 from '@/pages/popup/AC/AC_1405.vue'
import AC_1406 from '@/pages/popup/AC/AC_1406.vue'
import AC_1408 from '@/pages/popup/AC/AC_1408.vue'

import Temp1 from '@/pages/popup/temp/Temp1.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params)
</script>
