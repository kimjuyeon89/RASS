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
                <FileInputWrapper label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox
                      :right="true"
                      inputId="f01"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                </FileInputWrapper>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">보완의견</th>
              <td class="text-left" style="height:160px">
                <BaseInput inputType="text" inputValue="" inlineStyle="height: 160px;"/>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">오류건수 정정</th>
              <td class="text-left">
                <div class="td-text">
                  <BaseInput inputType="text" inputValue="" inlineStyle="width: 70px;"/>
                  <p>/7</p>
                </div>
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
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)
</script>
