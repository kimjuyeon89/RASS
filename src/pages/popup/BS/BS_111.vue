<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="관련소재지조회"
      titleIcon="building-blue"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">소재지</span>
          <BaseInput inputType="text" inputValue="" />
        </div>

        <BaseButton label="검색" styleClassName="md bgGray" />
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 180px" />
          <col style="width: auto" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">프로그램파일명</th>
            <th scope="col" class="text-center">주소</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="text-center">2826010300</td>
            <td class="text-center">인천광역시 서구 검암동</td>
          </tr>
        </tbody>
      </BaseTable>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Popup from '@/components/popup/Popup.vue'

const popupVisible = ref(true)
</script>
