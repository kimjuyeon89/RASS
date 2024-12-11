<template>
  <GisHeader :styleClassName="!header ? 'gisHeaderNone' : ''">
    <template v-slot:contents>
      <div class="gisHeaderGroup">
        <BaseButton
          styleClassName="btnGisClose"
          hiddenText="닫기"
          @click="headerClose"
        />
      </div>
    </template>
  </GisHeader>

  <ol-map
    style="height: 100vh"
    ref="olMap"
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
      @change:center="centerChanged"
      @change:resolution="resolutionChanged"
      @change:rotation="rotationChanged"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-overlay :position="[40, 40]" :autoPan="true">
      <GisMarker styleClassName="red gisElement" tooltipText="다사 5834977" />
    </ol-overlay>

    <ol-interaction-link />
  </ol-map>
</template>

<script setup>
import { ref } from 'vue'

import GisMarker from '@/components/gis/GisMarker.vue'
import GisHeader from '@/components/gis/GisHeader.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const header = ref(true)

const headerClose = () => {
  header.value = false
}

const center = ref([40, 40])
const projection = ref('EPSG:4326')
const zoom = ref(8)
const rotation = ref(0)

const currentCenter = ref(center.value)
const currentZoom = ref(zoom.value)
const currentRotation = ref(rotation.value)
const currentResolution = ref(0)

function resolutionChanged(event) {
  currentResolution.value = event.target.getResolution()
  currentZoom.value = event.target.getZoom()
}
function centerChanged(event) {
  currentCenter.value = event.target.getCenter()
}
function rotationChanged(event) {
  currentRotation.value = event.target.getRotation()
}
</script>
