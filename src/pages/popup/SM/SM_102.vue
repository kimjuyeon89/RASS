<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="공사 본부별 연락처 보기"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <Result :count="3" />
      <BaseTable>
        <colgroup>
          <col style="width: 50%" />
          <col style="width: 50%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">소속</th>
            <th scope="col" class="text-center">전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">서울지역본부</td>
            <td class="text-center">02-1234-5678</td>
          </tr>
          <tr>
            <td class="text-center">서울지역본부</td>
            <td class="text-center">02-1234-5678</td>
          </tr>
          <tr>
            <td class="text-center">서울지역본부</td>
            <td class="text-center">02-1234-5678</td>
          </tr>
        </tbody>
      </BaseTable>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import Result from '@/components/sub/table/Result.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)
</script>
