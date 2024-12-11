<template>
  <Popup :maxWidth="860" :visible="popupVisible">
    <SectionTitle
      title="네트워크 수정"
      titleIcon="network-blue"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle
        descText="[저장]버튼을 클릭하여 네트워크 정보를 수정합니다."
        :descState="true"
        :descRight="true"
      >
        <template v-slot:descRight>
          <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
        </template>
      </SubSectionTitle>

      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel w80">행정구역</span>
          <BaseInput inputValue="중앙KAIS" disabled />
        </div>
        <div class="searchColumn">
          <span class="searchLabel w80">행정구역</span>
          <BaseInput inputValue="RASS" disabled />
        </div>
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 50%" />
          <col style="width: 50%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">KAIS IP</th>
            <th scope="col" class="text-center">KAIS PORT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <BaseInput
                inputType="text"
                placeholder="ex) 192.168.0.100"
                inputValue="192.168.0.100"
              />
            </td>
            <td class="text-center">
              <BaseInput
                inputType="text"
                placeholder="ex) 9200"
                inputValue="9200"
              />
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
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)
</script>
