<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="검수보완요청"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle title="검수보완 사유 입력" titleType="dot" />
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 140px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center">검수보완사유</th>
            <td class="text-center">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">비고</th>
            <td class="text-center">
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

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
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Popup from '@/components/popup/Popup.vue'

const popupVisible = ref(true)

const selectList = ref([
  {
    id: 1,
    name: '선택',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])

/* --- */
</script>
