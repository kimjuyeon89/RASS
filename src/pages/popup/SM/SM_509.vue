<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="권한 상세조회/수정"
      titleIcon="system-folder"
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
            <th scope="row" class="text-left">권한 ID</th>
            <td>
              <BaseInput inputValue="ROLE_USER" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">권한명</th>
            <td>
              <BaseInput inputValue="사용자" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">설명</th>
            <td>
              <BaseInput
                inputValue="행정일반 RASS 사용자 권한을 지정하는 권한달력"
                inputType="text"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">등록일자</th>
            <td>
              <BaseInput inputType="text" inputValue="2024-07-02" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
          <BaseButton label="수정" styleClassName="md pd-sm bgBlue" />
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

import BaseTable from '@/components/base/BaseTable.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)

const caption = {
  name: '권한 상세조회/수정',
  cell: '권한 id, 권한명, 설명, 등록일자',
}
</script>
