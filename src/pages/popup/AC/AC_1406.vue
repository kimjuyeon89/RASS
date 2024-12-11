<template>
  <Popup :maxWidth="750" :visible="popupVisible">
    <SectionTitle
      title="검수결과서 - 교량_2"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 80px" />
            <col style="width: 140px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="row" colspan="2" class="text-center">검수의견서</th>
            </tr>
            <tr>
              <th scope="row" class="text-center">검수파일</th>
              <td class="text-left">
              (보완)교량_2-위성위치조정.zip
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">등록자</th>
              <td class="text-left">
              수령자01
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">보완의견</th>
              <td class="text-left" style="height:160px">
                2023년 위성 기준으로 위치 조정
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">오류건수 정정</th>
              <td class="text-left">
                5건
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>
      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)
</script>
