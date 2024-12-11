<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 결과통보서 파일등록"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">결과통보서</th>
              <td>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:left>
                    <FileInputBox
                      :right="true"
                      inputId="f01"
                      filePlaceholder="선택된 파일없음"
                      inputValue="덕진구_75011_전경사진(근경).jpg"
                    />
                  </template>
                </FileInputWrapper>
              </td>
            </tr>
          </tbody>
        </BaseTable>
        <p class="tableDescription text-color-deep-blue">
          ※ 결과통보서 파일 PDF형식등록 후 확인하실 수 있습니다.
        </p>
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'

const popupVisible = ref(true)
</script>
