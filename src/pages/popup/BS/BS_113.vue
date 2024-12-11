<template>
  <Popup :maxWidth="660" :visible="popupVisible" class="fixed">
    <SectionTitle
      title="신청보완요청"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle title="신청보완 사유 입력" titleType="dot" />
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 140px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center">신청보완사유</th>
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
              <BaseTextarea
                id="t01"
                inputValue="Text"
                inlineStyle="height: 100px"
                v-model="text"
              />
              <StringCount :textLength="textLength" />
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
import { ref, computed } from 'vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Popup from '@/components/popup/Popup.vue'
import StringCount from '@/components/popup/StringCount.vue'

const popupVisible = ref(true)

const selectList = ref([
  {
    id: 1,
    name: '선택',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])

const text = ref('')

const textLength = computed(() => text.value.length)

/* --- */
</script>
