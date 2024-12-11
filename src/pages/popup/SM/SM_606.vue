<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="프로그램파일명 검색"
      titleIcon="system-folder"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">프로그램파일명</span>
          <BaseInput inputValue="" />
        </div>

        <BaseButton label="검색" styleClassName="md bgGray" />
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: auto" />
          <col style="width: 200px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">프로그램 파일명</th>
            <th scope="col" class="text-center">프로그램명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">EgovAdministCalPopup</td>
            <td class="text-center">행정달력</td>
          </tr>
          <tr>
            <td class="text-center">EgovAdministDayCalendar</td>
            <td class="text-center">항공달력 일간</td>
          </tr>
          <tr class="ht2">
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">EgovAuthorList</td>
            <td class="text-center">권한관리</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const popupVisible = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 5,
  },
})
/* --- */
</script>
