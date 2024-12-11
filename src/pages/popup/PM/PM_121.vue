<template>
  <Popup :maxWidth="940" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 일제조사 통계"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <CenterTitle title="지점번호 일제조사 활동 내역">
        <template v-slot:nextRight>
          <span class="popupCenterTitleDate">2006-07-04 ~ 2024-07-01</span>
        </template>
      </CenterTitle>

      <BaseTable styleClassName="sm overflow-y" inlineStyle="max-height: 642px">
        <colgroup>
          <col style="width: 160px" />
          <col style="width: 95px" />
          <col style="width: auto" />
          <col style="width: 94px" />
          <col style="width: 94px" />
          <col style="width: 94px" />
          <col style="width: 94px" />
          <col style="width: 95px" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col" class="text-center" rowspan="2">구분</th>
            <th scope="col" class="text-center" rowspan="2">현장조사합계</th>
            <th scope="col" class="text-center" colspan="5">현장조사</th>
            <th scope="col" class="text-center" rowspan="2">설치제안</th>
          </tr>
          <tr>
            <th scope="col" class="text-center" style="top: 40px">정상</th>
            <th scope="col" class="text-center" style="top: 40px">훼손</th>
            <th scope="col" class="text-center" style="top: 40px">멸실</th>
            <th scope="col" class="text-center" style="top: 40px">오류의심</th>
            <th scope="col" class="text-center" style="top: 40px">미검증</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">서울특별시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">부산광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">대구광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">인천광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">광주광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">대전광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">울산광역시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">세종특별자치시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">경기도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">서울특별시</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">충청북도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">충청남도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">전라남도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">경상북도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">경상북도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">제주특별자치도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">강원특별자치도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">전북특별자치도</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
            <td class="text-center">0</td>
          </tr>
        </tbody>
      </BaseTable>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import CenterTitle from '@/components/popup/CenterTitle.vue'

const popupVisible = ref(true)
</script>
