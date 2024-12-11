<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="신규 사용자 등록"
      titleIcon="user"
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
            <th scope="row" class="text-left">
              <span class="required">아이디</span>
            </th>
            <td>
              <BaseInput inputType="text" />
              <!-- <BaseInput
            inputType="text"
            placeholder="Placeholder (error)"
            inputError
            inputErrorMessage="메시지 내용"
          /> -->
            </td>
            <th scope="row" class="text-left">
              <span class="required">성명</span>
            </th>
            <td>
              <BaseInput inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">권한</th>
            <td>
              <BaseSelect initialSelectValue="선택" :options="selectOption1" />
            </td>
            <th scope="row" class="text-left">
              <span class="required">계정 사용여부</span>
            </th>
            <td>
              <div class="searchColumnInputBox">
                <BaseRadio
                  styleClassName="sm"
                  name="r01"
                  id="r01"
                  label="사용"
                  :checked="true"
                />
                <BaseRadio
                  styleClassName="sm"
                  name="r01"
                  id="r02"
                  label="미사용"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">상위 기관</th>
            <td>
              <BaseSelect initialSelectValue="선택" :options="selectOption1" />
            </td>
            <th scope="row" class="text-left">하위 기관</th>
            <td>
              <BaseSelect initialSelectValue="선택" :options="selectOption1" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">직급</th>
            <td>
              <BaseInput inputType="text" />
            </td>
            <th scope="row" class="text-left">회사전화</th>
            <td>
              <BaseInput inputType="text" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">결재권자</th>
            <td>
              <div class="searchColumnInputBox">
                <BaseRadio
                  styleClassName="sm"
                  name="r02"
                  id="r03"
                  label="Y"
                  :checked="true"
                />
                <BaseRadio styleClassName="sm" name="r02" id="r04" label="N" />
              </div>
            </td>
            <th scope="row" class="text-left"></th>
            <td></td>
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

import BottomArea from '@/components/sub/section/BottomArea.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)

const selectOption1 = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const caption = {
  name: '신규 사용자 등록',
  cell: '아이디,성명,권한,계정 사용여부, 상위기관, 하위 기관, 직급, 회사전화, 결재권자',
}
</script>
