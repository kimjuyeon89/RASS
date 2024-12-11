<template>
  <div class="gisToolbarWrapper">
    <div class="gisToolbarInner">
      <div class="gisToolbarList">
        <BaseButton styleClassName="btnGisTool i-gis-ruler" label="거리" />
        <BaseButton styleClassName="btnGisTool i-gis-area" label="면적" />
        <BaseButton styleClassName="btnGisTool i-gis-reset" label="초기화" />
      </div>
    </div>

    <span class="gisLegend">1:3,693,720</span>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
</script>
