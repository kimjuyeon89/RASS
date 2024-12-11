<template>
  <GisHeader>
    <template v-slot:contents>
      <div class="gisHeaderSearchArea">
        <BaseSelect
          initialSelectValue="통합검색"
          :options="selectList"
          inlineStyle="min-width: 160px;"
        />

        <div class="gisHeaderSearchResult">
          <BaseInput
            inputType="text"
            placeholder="장소,주소 검색"
            styleClassName="gisInput search"
            inlineStyle="max-width: 220px;"
          >
            <template v-slot:prepend>
              <BaseButton styleClassName="i-gis-search" hiddenText="검색" />
            </template>
          </BaseInput>

          <GisPopup name="noDrag" :count="219" inlineStyle="width: 345px;">
            <template v-slot:body>
              <GisSearchResultItem :data="searchData" />

              <Pagination
                :currentPage="pagination.group1.currentPage"
                :totalPages="pagination.group1.totalPages"
                :bothEnd="true"
              />
            </template>
          </GisPopup>
        </div>
      </div>

      <div class="gisHeaderGroup">
        <div class="gisHeaderGroupInner">
          <BaseButton
            styleClassName="gisButton i-gis-check"
            label="검수요청목록"
          />
          <BaseButton
            styleClassName="gisButton i-gis-rotate"
            label="지도초기화"
          />
          <BaseButton
            styleClassName="gisButton i-gis-layer"
            label="레이어보기"
          />
          <BaseButton
            styleClassName="gisButton i-gis-map-marker"
            label="배경맵보기"
          />
        </div>
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

    <GisPopup
      :x="1460"
      :y="65"
      title="레이어 관리"
      :drag="true"
      inlineStyle="width: 360px;"
      v-if="gisPopup"
    >
      <template v-slot:headRight>
        <BaseButton
          @click="gisPopupClose"
          styleClassName="btnGisClose"
          hiddenText="닫기"
        />
      </template>

      <template v-slot:body>
        <GisTree :checkboxPrefix="layerCheckboxPrefix" :data="layerData" />
      </template>
    </GisPopup>
  </ol-map>
</template>

<script setup>
import { ref } from 'vue'
import GisPopup from '@/components/gis/GisPopup.vue'
import GisTree from '@/components/gis/GisTree.vue'
import GisHeader from '@/components/gis/GisHeader.vue'
import GisToolbar from '@/components/gis/GisToolbar.vue'
import GisSearchResultItem from '@/components/gis/GisSearchResultItem.vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const gisPopup = ref(true)

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

const gisPopupClose = () => {
  gisPopup.value = false
}

const layerCheckboxPrefix = {
  prefix1: 'gm101-layer-depth1',
  prefix2: 'gm101-layer-depth2',
  prefix3: 'gm101-layer-depth3',
}

const layerData = ref([
  {
    id: 1,
    title: '참고주제도',
    items: [
      {
        title: '주소',
        items2: [
          { title: '출입구' },
          { title: '연결선' },
          { title: '건물' },
          { title: '기초구간' },
          { title: '도로구간' },
          { title: '자동차전용도로' },
          { title: '실폭도로' },
        ],
      },
      { title: '명예도로' },
      { title: '시설물위치' },
      { title: '기타시설물' },
      {
        title: '배경',
        items2: [
          { title: '철도역사' },
          { title: '철도선로' },
          { title: '지하철출입구' },
          { title: '지하철역사', disabled: true },
          { title: '지하철선로' },
          { title: '교차로' },
          { title: '교량' },
          { title: '터널' },
          { title: '고가도로' },
          { title: '지하차도' },
          { title: '하천호수' },
          { title: '공원' },
        ],
      },
      {
        title: '구역',
        items2: [{ title: '기초구역' }, { title: '기초구역군' }],
      },
      {
        title: '행정구역',
        items2: [
          { title: '법정구역_시도', disabled: true },
          { title: '법정구역_시군구', disabled: true },
          { title: '법정구역_읍면동', disabled: true },
          { title: '법정구역_리' },
          { title: '통리' },
        ],
      },
    ],
  },
  { id: 2, title: '레이어2' },
  { id: 3, title: '레이어3' },
  { id: 4, title: '레이어4' },
])

const searchData = ref([
  {
    id: 1,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
  {
    id: 2,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
  {
    id: 3,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
  {
    id: 4,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
  {
    id: 5,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
  {
    id: 6,
    roadAddress: '경기 안양시 동안구 관양동 1377',
    streetAddress: '경기도 안양시 관양동 1482-3 어린이공원 52호',
  },
])

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 5,
  },
})
</script>
