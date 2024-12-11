<template>
  <Popup :maxWidth="1280" :visible="popupVisible">
    <SectionTitle
      title="OO사진 이력관리"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle
        :descState="true"
        descText="국가지점번호 측량정보조회 목록을 선택하여 성과작성 목록에 등록합니다."
      />

      <div class="searchArea">
        <!-- searchColumnRowContainer -->
        <div class="searchColumnRowContainer">
          <!-- searchColumnRow -->
          <div class="searchColumnRow">
            <div class="searchColumn">
              <span class="searchLabel">처리자 ID</span>

              <BaseInput inputType="text" inlineStyle="width: 300px;" />
            </div>

            <BaseButton label="검색" styleClassName="md bgGray" />
          </div>
          <!-- //searchColumnRow -->
        </div>
        <!-- //searchColumnRowContainer -->
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 160px" />
          <col style="width: auto" />
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: 160px" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">이력일련번호</th>
            <th scope="col" class="text-center">파일명</th>
            <th scope="col" class="text-center">생성일자</th>
            <th scope="col" class="text-center">처리자ID</th>
            <th scope="col" class="text-center">처리자이름</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="text-center">1</td>
            <td class="text-center">519</td>
            <td class="text-center">pointNum_5_다사4532424.pdf</td>
            <td class="text-center">2024-06-25 15:35:00</td>
            <td class="text-center">test01</td>
            <td class="text-center">관리자</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">519</td>
            <td class="text-center">pointNum_5_다사4532424.pdf</td>
            <td class="text-center">2024-06-25 15:35:00</td>
            <td class="text-center">test01</td>
            <td class="text-center">관리자</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">519</td>
            <td class="text-center">pointNum_5_다사4532424.pdf</td>
            <td class="text-center">2024-06-25 15:35:00</td>
            <td class="text-center">test01</td>
            <td class="text-center">관리자</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />

      <div class="sectionInnerContainer row hasButton">
        <div class="sectionInnerBox">
          <SubSectionTitle title="선택된 사진" :right="true" titleType="dot" />

          <div class="sectionInnerItem h-auto">
            <NoData
              height="540px"
              :imageHeight="137"
              className="border"
              :src="getImageUrl('../../assets/table/img-no-data.svg')"
              alt="데이터가 없습니다."
            />
          </div>
        </div>
        <BaseButton styleClassName="btnChange">
          <template v-slot:icon>
            <i class="ico change-arrow"></i>
          </template>
        </BaseButton>
        <div class="sectionInnerBox">
          <SubSectionTitle
            title="현재 지점번호 OO 사진"
            :right="true"
            titleType="dot"
          />

          <div class="sectionInnerItem h-auto">
            <NoData
              height="540px"
              :imageHeight="137"
              className="border "
              :src="getImageUrl('../../assets/table/img-no-data.svg')"
              alt="데이터가 없습니다."
            />
          </div>
        </div>
      </div>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import BaseButton from '@/components/base/BaseButton.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'

import NoData from '@/components/sub/section/NoData.vue'

const popupVisible = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
