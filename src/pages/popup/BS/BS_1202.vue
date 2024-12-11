<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="정합계수 신규등록"
      titleIcon="calendar"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <div class="sectionBox">
        <div class="popupSectonDescArea">
          <p class="popupSectionDescText">
            [추가] 버튼을 클릭하여 여러건의 정합계수를 등록할 수 있습니다.
          </p>
          <div class="popupSectionDescGroup">
            <BaseButton label="추가" styleClassName="md bdGray" />
            <BaseButton label="등록" styleClassName="md bgBlue" />
          </div>
        </div>

        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect initialSelectValue="전체" :options="selectOption1" />
          </div>

          <div class="searchColumn">
            <BaseSelect initialSelectValue="전체" :options="selectOption1" />
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
                <BaseInput inputType="text" />
              </td>
              <td class="text-center">
                <BaseInput inputType="text" />
              </td>
              <td class="text-center">
                <BaseInput inputType="text" />
              </td>
              <td class="text-center">
                <BaseInput inputType="text" />
              </td>
              <td class="text-center">
                <BaseSelect initialSelectValue="N" :options="selectList" />
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)

const selectOption1 = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
