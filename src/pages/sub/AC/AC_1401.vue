<!-- 행정구역명 축약관리 -->

<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">


        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">사업명</span>
            <BaseInput inputType="text" inputValue="" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">담당자</span>
            <BaseInput inputType="text" inputValue="" />
          </div>
          
        </div>
        <!-- //searchColumnRow -->
                 <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
              <span class="betweenText">~</span>
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
            </div>
          </div>
          
          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <BaseSelect initialSelectValue="선택" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">데이터유형</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

        <BaseButton label="검색" styleClassName="md bgGray" />
          </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <div class="sectionTitleGroup"><h3 class="sectionTitle">육안검수 사업정보</h3></div>
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 120px" />
            <col style="width: 537px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">데이터유형</th>
              <th scope="col" class="text-center">사업명</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">등록일자</th>
              <th scope="col" class="text-center">담당자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">본부검수</td>
              <td class="text-center">장소지능_김보성테스트</td>
              <td class="text-center">본부검수</td>
              <td class="text-center">24/10/30</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">실폭정비</td>
              <td class="text-center">실폭정비_2</td>
              <td class="text-center">실폭정비</td>
              <td class="text-center">24/10/30</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">사물주소</td>
              <td class="text-center">사물주소_표본검수자료(어린이놀이시설, 푸드트럭 허가구역)</td>
              <td class="text-center">사물주소</td>
              <td class="text-center">24/09/23</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">6</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">7</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">8</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">9</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">10</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            <tr>
              <td class="text-center">11</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">지상도로_1</td>
              <td class="text-center">지상도로</td>
              <td class="text-center">24/09/10</td>
              <td class="text-center">관리자</td>
            </tr>
            
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      >
      
      </Pagination>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
defineOptions({
  name: 'SubTemp1',
})

import { ref } from 'vue'

import SubRoot from '@/components/sub/layout/SubRoot.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
})


</script>
