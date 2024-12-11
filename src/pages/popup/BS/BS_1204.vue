<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="정합계수 수정"
      titleIcon="calendar"
      @close="popupVisible = false"
    />
    <PopupSectionBody>
      <div class="popupSectonDescArea">
        <p class="popupSectionDescText">
          [저장] 버튼을 클릭하여 정합계수를 수정합니다.
        </p>
        <div class="popupSectionDescGroup">
          <BaseButton label="저장" styleClassName="md bgBlue pd-sm" />
        </div>
      </div>

      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">행정구역</span>

          <BaseInput
            inputType="text"
            inputValue="강원특별자치도 삼척시"
            disabled
          />
        </div>

        <div class="searchColumn">
          <span class="searchLabel">행정구역</span>

          <BaseInput inputType="text" inputValue="채한미" disabled />
        </div>
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">이전좌표_X</th>
            <th scope="col" class="text-center">이전좌표_Y</th>
            <th scope="col" class="text-center">이후좌표_X</th>
            <th scope="col" class="text-center">이후좌표_Y</th>
            <th scope="col" class="text-center">고정점 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="206293.8741" />
            </td>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="438006.6078" />
            </td>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="206291.8741" />
            </td>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="438006.8078" />
            </td>
            <td class="text-center">
              <BaseSelect initialSelectValue="N" :options="selectList" />
            </td>
          </tr>
        </tbody>
      </BaseTable>
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
import BaseSelect from '@/components/base/BaseSelect.vue'

const popupVisible = ref(true)

/* select */
const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
/* --- */
</script>
