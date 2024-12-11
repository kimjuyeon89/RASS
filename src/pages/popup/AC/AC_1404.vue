<template>
  <Popup :maxWidth="750" :visible="popupVisible">
    <SectionTitle
      title="검수결과서 - 교량_2"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <div class="popupSectionDescGroup">
        <p class="page-num"><span>1/4</span>페이지</p>
        </div>
        
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 80px" />
            <col style="width: 140px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="row" colspan="2" class="text-center">검수의견서</th>
            </tr>
            <tr>
              <th scope="row" class="text-center">소속기관/성명</th>
              <td class="text-left">주소지원활용지원센터 / 장주호</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검수일자</th>
              <td class="text-left">2024-10-31</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">시도명</th>
              <td class="text-left">제주특별자치도</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">시군구명</th>
              <td class="text-left">제주시</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">시설명</th>
              <td class="text-left">교량_2</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검토의견</th>
              <td class="text-left" style="height: 160px">위성과 불일치</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">참고자료</th>
              <td class="text-left" style="height: 160px">
              <NoData
                height="100%"
                :imageHeight="80"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>
      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="이전" styleClassName="md pd-sm bdGray" />
          <BaseButton label="다음" styleClassName="md pd-sm bdGray" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import BottomArea from '@/components/sub/section/BottomArea.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import NoData from '@/components/sub/section/NoData.vue'


const popupVisible = ref(true)
</script>
