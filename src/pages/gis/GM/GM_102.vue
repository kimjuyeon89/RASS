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
        </div>
      </div>

      <div class="gisHeaderGroup">
        <div class="gisHeaderGroupInner">
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

  <GisSidebar>
    <template v-slot:contents>
      <BaseTab>
        <template v-slot:tabItem>
          <BaseTabItem :data="tabs1" v-model="current1" />
        </template>

        <template v-slot:tabContent>
          <BaseTabContent :current="current1" name="지점번호 관리">
            <div class="searchArea">
              <!-- searchColumnRowContainer -->
              <div class="searchColumnRowContainer">
                <!-- searchColumnRow -->
                <div class="searchColumnRow col3moreSmall">
                  <div class="searchColumn">
                    <span class="searchLabel">처리지사</span>
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList"
                      inlineStyle="min-width: 100px"
                    />
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList"
                      inlineStyle="min-width: 100px"
                    />
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList"
                      inlineStyle="min-width: 100px"
                    />
                    <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
                  </div>
                  <div class="searchColumn">
                    <span class="searchLabel">회계년도</span>
                    <BaseSelect
                      initialSelectValue="전체"
                      inlineStyle="min-width: 100px;"
                      :options="selectList"
                    />
                  </div>
                </div>
                <!-- //searchColumnRow -->

                <div class="searchColumnRow">
                  <div class="searchColumn">
                    <span class="searchLabel">계약일자</span>
                    <div class="searchColumnInputBox">
                      <BaseInput
                        inputType="date"
                        styleClassName="hasCalendar"
                        inputValue="2024-05-09"
                      >
                        <template v-slot:prepend>
                          <button type="button" class="btnCalendar">
                            <span class="hidden">달력</span>
                          </button>
                        </template>
                      </BaseInput>
                      <span class="betweenText">~</span>
                      <BaseInput
                        inputType="date"
                        styleClassName="hasCalendar"
                        inputValue="2024-05-09"
                      >
                        <template v-slot:prepend>
                          <button type="button" class="btnCalendar">
                            <span class="hidden">달력</span>
                          </button>
                        </template>
                      </BaseInput>
                    </div>
                  </div>
                  <BaseButton label="검색" styleClassName="md bgGray" />
                </div>
              </div>
              <!-- //searchColumnRowContainer -->
            </div>

            <section class="sectionContainer col">
              <div class="sectionBox">
                <BaseTable>
                  <colgroup>
                    <col style="width: 50px" />
                    <col style="width: 60px" />
                    <col style="width: 160px" />
                    <col style="width: 160px" />
                    <col style="width: auto" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">index</span>
                      </th>
                      <th scope="col" class="text-center">총계정</th>
                      <th scope="col" class="text-center">본부</th>
                      <th scope="col" class="text-center">지사</th>
                      <th scope="col" class="text-center">계약명</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">18</td>
                      <td class="text-center">전북지역본부</td>
                      <td class="text-center">진안장수지사</td>
                      <td class="text-center">
                        <div class="eps type01">
                          <p>
                            국가지점번호판
                            설치위치에설치위치에설치위치에설치위치에
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center">32</td>
                      <td class="text-center">강원지역본부</td>
                      <td class="text-center">강릉지사</td>
                      <td class="text-center">24년 국가지점번호</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center">123</td>
                      <td class="text-center">강원지역본부</td>
                      <td class="text-center">홍천지사</td>
                      <td class="text-center">
                        <div class="eps type01">
                          <p>
                            국가지점번호판
                            설치위치에설치위치에설치위치에설치위치에
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">4</td>
                      <td class="text-center">123</td>
                      <td class="text-center">강원지역본부</td>
                      <td class="text-center">홍천지사</td>
                      <td class="text-center">
                        <div class="eps type01">
                          <p>
                            국가지점번호판
                            설치위치에설치위치에설치위치에설치위치에
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-center">5</td>
                      <td class="text-center">123</td>
                      <td class="text-center">강원지역본부</td>
                      <td class="text-center">홍천지사</td>
                      <td class="text-center">
                        <div class="eps type01">
                          <p>
                            국가지점번호판
                            설치위치에설치위치에설치위치에설치위치에
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </section>

            <section class="sectionContainer col">
              <div class="sectionBox">
                <SectionTitle :right="true">
                  <template v-slot:right>
                    <BaseButton
                      label="지도초기화"
                      styleClassName="md pd-sm bdGray"
                    />
                    <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
                    <BaseButton label="수정" styleClassName="md pd-sm bdGray" />
                    <BaseButton label="추가" styleClassName="md pd-sm bdGray" />
                    <BaseButton
                      label="전체위치조회"
                      styleClassName="md pd-sm bgBlue"
                    />
                    <BaseButton
                      label="현장확인결과서"
                      styleClassName="md pd-sm bgAqua"
                    />
                  </template>
                </SectionTitle>

                <BaseTable>
                  <colgroup>
                    <col style="width: 50px" />
                    <col style="width: 80px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">INDEX</span>
                      </th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">국가지점번호</th>
                      <th scope="col" class="text-center">소재지</th>
                      <th scope="col" class="text-center">X좌표</th>
                      <th scope="col" class="text-center">Y좌표</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">4</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">5</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                  </tbody>
                </BaseTable>

                <Pagination
                  :currentPage="pagination.group1.currentPage"
                  :totalPages="pagination.group1.totalPages"
                />
              </div>
            </section>
          </BaseTabContent>
          <BaseTabContent :current="current1" name="지점번호 검색">
            <section class="sectionContainer col">
              <div class="sectionBox">
                <SectionTitle title="위경도 위치조회" :right="true">
                  <template v-slot:right>
                    <BaseButton
                      label="초기화"
                      styleClassName="md pd-sm bdGray"
                    />
                    <BaseButton
                      label="양식 다운로드"
                      styleClassName="md pd-sm bdGray"
                    />
                    <BaseButton
                      label="지도표출"
                      styleClassName="md pd-sm bgBlue"
                    />
                  </template>
                </SectionTitle>

                <FileInputWrapper size="wide" label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox
                      :right="true"
                      inputId="f01"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                </FileInputWrapper>
              </div>
            </section>

            <section class="sectionContainer col">
              <div class="sectionBox">
                <SectionTitle title="국가지점번호 검색" :right="true">
                  <template v-slot:right>
                    <BaseButton
                      label="초기화"
                      styleClassName="md pd-sm bdGray"
                    />
                  </template>
                </SectionTitle>

                <BaseTable>
                  <colgroup>
                    <col style="width: 50px" />
                    <col style="width: 80px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                    <col style="width: 142px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">INDEX</span>
                      </th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">국가지점번호</th>
                      <th scope="col" class="text-center">소재지</th>
                      <th scope="col" class="text-center">X좌표</th>
                      <th scope="col" class="text-center">Y좌표</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">4</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                    <tr>
                      <td class="text-center">5</td>
                      <td class="text-center">134499</td>
                      <td class="text-center">마사06579227</td>
                      <td class="text-center">강원특별자치</td>
                      <td class="text-center">1992277.7389</td>
                      <td class="text-center">1106579.585</td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </section>
          </BaseTabContent>
        </template>
      </BaseTab>
    </template>
  </GisSidebar>

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
      title="레이어 관리"
      inlineStyle="width: 360px"
      :drag="true"
      :x="1460"
      :y="65"
      v-if="gisPopup"
    >
      <template v-slot:headRight>
        <BaseButton
          styleClassName="btnGisClose"
          hiddenText="닫기"
          @click="gisPopupClose"
        />
      </template>

      <template v-slot:body>
        <GisTree :checkboxPrefix="layerCheckboxPrefix" :data="layerData" />
      </template>
    </GisPopup>

    <GisPopup name="noDrag" style="top: 65px; left: 1050px">
      <template v-slot:headRight>
        <button type="button" class="btnGisClose">
          <span class="hidden">닫기</span>
        </button>
      </template>

      <template v-slot:body>
        <div class="gisButtonListBox">
          <BaseButton
            styleClassName="btnGisWhite i-gis-yellow-pin"
            label="국가지점 번호"
          />
          <BaseButton styleClassName="btnGisWhite i-gis-grid" label="격자" />
          <BaseButton
            styleClassName="btnGisWhite i-gis-label"
            label="격자라벨"
          />
          <BaseButton
            styleClassName="btnGisWhite i-gis-red-pin"
            label="표기 의무지역"
          />
          <BaseButton
            styleClassName="btnGisWhite i-gis-green-square"
            label="등산로 "
          />
          <BaseButton
            styleClassName="btnGisWhite i-gis-red-square"
            label="국립공원 탐방로"
          />
        </div>
      </template>
    </GisPopup>

    <ol-interaction-link />
  </ol-map>
</template>

<script setup>
import { ref } from 'vue'

import GisPopup from '@/components/gis/GisPopup.vue'
import GisHeader from '@/components/gis/GisHeader.vue'
import GisToolbar from '@/components/gis/GisToolbar.vue'
import GisTree from '@/components/gis/GisTree.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'

import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'

import GisSidebar from '@/components/gis/GisSidebar.vue'

const current1 = ref('지점번호 관리')

const tabs1 = [
  {
    id: 1,
    name: '지점번호 관리',
  },
  {
    id: 2,
    name: '지점번호 검색',
  },
]

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

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
})

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
</script>
