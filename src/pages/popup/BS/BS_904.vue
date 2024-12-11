<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="사물주소 현장조사 결과서"
      titleIcon="target"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <Result :count="3" />
      <BaseTable>
        <colgroup>
          <col style="width: 100px" />
          <col style="width: 100px" />
          <col style="width: auto" />
          <col style="width: 140px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">일련번호</th>
            <th scope="col" class="text-center">사물종류</th>
            <th scope="col" class="text-center">주소</th>
            <th scope="col" class="text-center">본부</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">1</td>
            <td class="text-center">무더위쉼터</td>
            <td class="text-center">서울특별시 강남구 개포동 123</td>
            <td class="text-center">서울지역본부</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">무더위쉼터</td>
            <td class="text-center">서울특별시 강남구 개포동 123</td>
            <td class="text-center">서울지역본부</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">무더위쉼터</td>
            <td class="text-center">서울특별시 강남구 개포동 123</td>
            <td class="text-center">서울지역본부</td>
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
