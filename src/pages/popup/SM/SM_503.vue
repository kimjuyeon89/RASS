<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="프로그램 등록"
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
            <th scope="row" class="text-left">프로그램 파일명</th>
            <td>
              <BaseInput inputValue="EgovAdministCalPopup" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">저장경로</th>
            <td>
              <BaseInput inputValue="/sys/cmm/" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">한글명</th>
            <td>
              <BaseInput inputValue="행정달력" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">URL</th>
            <td>
              <BaseInput
                inputType="text"
                inputValue="/sys/cmm/EgovAdministCalPopup.do"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">프로그램 설명</th>
            <td>
              <BaseTextarea id="t01" inlineStyle="height: 200px" />
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
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)

const caption = {
  name: '신규 사용자 등록',
  cell: '아이디,성명,권한,계정 사용여부, 상위기관, 하위 기관, 직급, 회사전화, 결재권자',
}
</script>
