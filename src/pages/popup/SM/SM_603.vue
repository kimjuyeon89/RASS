<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="메뉴 상세조회/수정"
      titleIcon="list-check"
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
            <th scope="row" class="text-left">메뉴 ID</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">메뉴순서</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">메뉴명</th>
            <td>
              <BaseInput inputValue="" inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">상위메뉴ID</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">파일명</th>
            <td>
              <FileInputWrapper label="프로그램파일명 검색">
                <template v-slot:left>
                  <FileInputBox inputId="f01" filePlaceholder="" />
                </template>
              </FileInputWrapper>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">이미지명</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">이미지 URL</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">메뉴설명</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
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

import BaseTable from '@/components/base/BaseTable.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'

const popupVisible = ref(true)

const caption = {
  name: '메뉴 상세조회/수정',
  cell: '메뉴 ID, 메뉴순서, 메뉴명, 상위메뉴ID, 파일명, 이미지명, 이미지 URL, 메뉴 설명',
}
</script>
