<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="이슈 작성"
      titleIcon="megaphone-blue"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 120px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">
              <span class="required center">이슈내용</span>
            </th>
            <td class="text-center">
              <BaseTextarea inlineStyle="height: 180px" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">첨부파일</th>
            <td>
              <div class="tableBox hasFile">
                <FileInputWrapper label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox filePlaceholder="선택된 파일없음" />
                  </template>
                </FileInputWrapper>

                <p class="tableDescription">
                  * 첨부파일 업로드 용량은 10MB 이하
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="닫기" styleClassName="md pd-sm bdGray" />
          <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'

const popupVisible = ref(true)
</script>
