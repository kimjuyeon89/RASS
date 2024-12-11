<template>
  <Popup :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="준공도면 첨부파일 등록"
      titleIcon="add-document"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <ExplanationBox styleType="noList" :data="explanationData" />

      <FileInputWrapper justify="end" label="파일 선택">
        <template v-slot:left>
          <FileInputBox :maxWidth="350" filePlaceholder="선택된 파일없음" />
        </template>
        <template v-slot:button>
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray i-remove" />
        </template>
      </FileInputWrapper>
      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 60px" />
          <col style="width: auto" />
          <col style="width: 200px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <BaseCheckbox id="check1" />
            </th>
            <th scope="col">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">파일명</th>
            <th scope="col" class="text-center">확장자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check2" />
            </td>
            <td class="text-center">1</td>
            <td class="text-center">도로구간 현황도</td>
            <td class="text-center">jpg</td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
          <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import Popup from '@/components/popup/Popup.vue'

const popupVisible = ref(true)

const explanationData = ref([
  {
    id: 1,
    title: null,
    items: [
      {
        text: '등록할 이미지파일을 끌어넣기(Drag&Drop)를 통해서 추가 할 수 있습니다.',
      },
      {
        text: '※ 첨부가능 확장자 : 필수[jpg, jpeg, gif, png, bmp]',
      },
      {
        text: '※ 총 10개파일 등록 가능',
      },
    ],
  },
])
</script>
