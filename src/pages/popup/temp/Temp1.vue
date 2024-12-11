<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="행정구역 약칭 관리 상세"
      titleIcon="clipboard-list-check"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable styleClassName="rowType" :caption="caption">
        <colgroup>
          <col style="width: 140px" />
          <col style="width: 260px" />
          <col style="width: 140px" />
          <col style="width: 260px" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-left">법정동코드</th>
            <td>
              <BaseInput inputType="text" disabled inputValue="51000" />
            </td>
            <th scope="row" class="text-left">행정구역명</th>
            <td>
              <BaseInput
                inputType="text"
                disabled
                inputValue="강원특별자치도"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">행정구역명 약칭</th>
            <td>
              <BaseInput inputType="text" inputValue="강원" />
            </td>
            <th scope="row" class="text-left"></th>
            <td>
              <div class="searchColumnInputBox">
                <BaseRadio
                  styleClassName="sm"
                  name="r01"
                  id="r01"
                  label="Y"
                  :checked="true"
                />
                <BaseRadio styleClassName="sm" name="r01" id="r02" label="N" />
              </div>
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
          <BaseButton label="수정" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
defineOptions({
  name: 'PopupTemp1',
})
import { ref } from 'vue'

import BottomArea from '@/components/sub/section/BottomArea.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)

const caption = {
  name: '신규 사용자 등록',
  cell: '아이디,성명,권한,계정 사용여부, 상위기관, 하위 기관, 직급, 회사전화, 결재권자',
}
</script>
