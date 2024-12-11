<template>
  <GisHeader :styleClassName="!header ? 'gisHeaderNone' : ''">
    <template v-slot:contents>
      <div class="gisHeaderGroup">
        <div class="gisHeaderGroupInner">
          <BaseButton
            styleClassName="gisButton i-gis-mountain"
            label="등산로"
          />
          <BaseButton
            styleClassName="gisButton i-gis-information"
            label="국립공원탐방로"
          />
          <BaseButton styleClassName="gisButton i-gis-map" label="연속지적도" />
          <BaseButton
            styleClassName="gisButton i-gis-location"
            label="국토정보기본도"
          />
          <BaseButton
            styleClassName="gisButton i-gis-airplane"
            label="항공사진"
          />
        </div>

        <BaseButton
          styleClassName="btnGisClose"
          hiddenText="닫기"
          @click="headerClose"
        />
      </div>
    </template>
  </GisHeader>

  <GisToolbar />

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
      <GisMarker styleClassName="blue redial gisElement" />
    </ol-overlay>

    <ol-interaction-link />
  </ol-map>
</template>

<script setup>
import { ref } from 'vue'

import GisHeader from '@/components/gis/GisHeader.vue'
import GisToolbar from '@/components/gis/GisToolbar.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import GisMarker from '@/components/gis/GisMarker.vue'

const header = ref(true)

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

const headerClose = () => {
  header.value = false
}
</script>
