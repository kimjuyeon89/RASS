<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="공통코드상세 등록"
      titleIcon="display-code"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable :caption="caption" class="rowType">
        <colgroup>
          <col style="width: 140px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-left">코드분류코드</th>
            <td>
              <BaseInput inputValue="001" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">코드분류명</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">상세코드길이</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">사용여부</th>
            <td>
              <div class="searchColumnInputBox">
                <BaseRadio
                  styleClassName="sm"
                  name="r01"
                  id="r01"
                  label="사용"
                  :checked="true"
                />
                <BaseRadio
                  styleClassName="sm"
                  name="r01"
                  id="r02"
                  label="미사용"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">비고</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
          <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
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
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)

const caption = {
  name: '공통코드상세 상세조회/수정 등록',
  cell: '코드분류코드,코드분류명,상세코드길이,사용여부,비고',
}
</script>
