<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="롤 상세조회/수정"
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
            <th scope="row" class="text-left">롤 ID</th>
            <td>
              <BaseInput inputValue="ROLE_1234567890" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">롤명</th>
            <td>
              <BaseInput inputValue="QnA삭제권한" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">롤타입</th>
            <td>
              <BaseSelect initialSelectValue="URL" :options="selectOption1" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">롤Sort</th>
            <td>
              <BaseInput inputType="text" inputValue="1" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">등록일자</th>
            <td>
              <BaseInput inputType="text" inputValue="2024-07-02" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">롤 설명</th>
            <td>
              <BaseTextarea inlineStyle="height: 200px;" />
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
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

const popupVisible = ref(true)

const caption = {
  name: '롤 상세조회/수정',
  cell: '롤 ID, 롤명, 롤패턴, 롤타입, 롤 Sort, 등록일자, 롤설명',
}

const selectOption1 = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
