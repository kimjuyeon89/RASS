<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="질의응답"
      titleIcon="question"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable class="rowType" :caption="caption">
        <colgroup>
          <col style="width: 120px" />
          <col style="width: 280px" />
          <col style="width: 120px" />
          <col style="width: 280px" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center">제목</th>
            <td colspan="5" class="text-center">
              <BaseInput inputType="text" />
            </td>
          </tr>

          <tr>
            <th scope="row" class="text-center">내용</th>
            <td colspan="3">
              <BaseTextarea inlineStyle="height: 180px" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">첨부파일</th>
            <td class="tdHasTable" colspan="3">
              <div class="tableBox col hasTable">
                <div class="rowTableItem btnWd90">
                  <FileInputWrapper label="파일 선택 ">
                    <template v-slot:right>
                      <FileInputBox
                        inputId="f01"
                        filePlaceholder="선택된 파일없음"
                      />
                    </template>
                    <template v-slot:button>
                      <BaseButton
                        label="삭제"
                        styleClassName="md pd-sm bdGray"
                      />
                    </template>
                  </FileInputWrapper>
                </div>

                <BaseTable>
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: auto" />
                    <col style="width: 100px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">
                        <BaseCheckbox id="check1" />
                      </th>
                      <th scope="col" class="text-center">파일명</th>
                      <th scope="col" class="text-center">용량</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <BaseCheckbox id="check2" />
                      </td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">도배방지확인</th>
            <td colspan="3">
              <div class="securityArea">
                <div class="numberBox tableBoxItem">
                  <BaseInput inputType="text" inputValue="916245" readonly />
                </div>

                <div class="tableBox">
                  <BaseInput
                    inputType="text"
                    placeholder="보안문자를 입력하세요."
                    styleClassName="securityInput"
                  />
                  <BaseButton
                    label="새로고침"
                    styleClassName="md pd-sm bdGray i-refresh"
                  />
                  <BaseButton label="확인" styleClassName="md pd-sm bdGray" />
                </div>
              </div>
            </td>
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
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const caption = {
  name: '공지사항 등록',
  cell: '제목,공지시작일,공지종료일,내용,첨부파일,도배방지 확인',
}

const popupVisible = ref(true)
</script>
