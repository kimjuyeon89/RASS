<template>
  <Popup :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="업무현황 상세정보"
      titleIcon="bag"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle titleType="dot" title="성과물 첨부파일" :right="true">
        <template>
          <BaseButton
            styleClassName="md pd-sm bdBlue i-download"
            label="다운로드"
          />
        </template>
      </SubSectionTitle>
      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 60px" />
          <col style="width: 175px" />
          <col style="width: 175px" />
          <col style="width: 175px" />
          <col style="width: 175px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <BaseCheckbox id="check1" />
            </th>
            <th scope="col" class="text-center">번호</th>
            <th scope="col" class="text-center">파일구분</th>
            <th scope="col" class="text-center">파일명</th>
            <th scope="col" class="text-center">파일확장자</th>
            <th scope="col" class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check2" />
            </td>
            <td class="text-center">1</td>
            <td class="text-center">장소지능정보</td>
            <td class="text-center">om_lii_1000_cntc</td>
            <td class="text-center">shp,shx,dbf</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check3" />
            </td>
            <td class="text-center">2</td>
            <td class="text-center">장소지능정보</td>
            <td class="text-center">om_lii_1000_cntc</td>
            <td class="text-center">shp,shx,dbf</td>
            <td class="text-center"></td>
          </tr>
        </tbody>
      </BaseTable>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'

const popupVisible = ref(true)
</script>
