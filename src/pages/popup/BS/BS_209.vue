<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="광역도로 경유지 등록"
      titleIcon="add-document"
      :hasFile="true"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle
        titleType="dot"
        title="저장 버튼을 클릭하여 경유지자체(시군구)를 추가/변경할 수 있습니다.
"
      />
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 140px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-left">
              <span class="required center">행정구역(소재지)</span>
            </th>
            <td>
              <div class="tableBox">
                <div class="tableBoxItem">
                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList[0].options"
                  />
                </div>

                <div class="tableBoxItem">
                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList[1].options"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">
              <span class="required center">도로길이(km)</span>
            </th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">
              <span class="required center">시점주소</span>
            </th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-left">
              <span class="required center">종점주소</span>
            </th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <p class="tableDescription text-color-deep-blue">
        ※ 도로길이는 소수점 2자리까지 입력해야 합니다. ex) 1.00, 2.20, 3.45 ...
      </p>

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

import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'

const popupVisible = ref(true)

const selectList = ref([
  {
    id: 1,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])

/* --- */
</script>
