<!-- 행정구역명 축약관리 -->

<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">사용여부</span>
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
            <span class="searchLabel">행정구역명</span>
            <BaseInput inputType="text" inputValue="" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">행정구역명 약칭</span>
            <BaseInput inputType="text" inputValue="" />
          </div>
          <BaseButton label="조회" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 537px" />
            <col style="width: 537px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">법정동코드</th>
              <th scope="col" class="text-center">행정구역명</th>
              <th scope="col" class="text-center">행정구역명 약칭</th>
              <th scope="col" class="text-center">사용여부</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" />
              </td>
              <td class="text-center">6</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check8" />
              </td>
              <td class="text-center">9</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">10</td>
              <td class="text-center">51000</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">강원</td>
              <td class="text-center">Y</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      >
        <template v-slot:right>
          <PageMove :inputValue="pageMoveValue" :total="total" />
          <PageResult :resultSelectList="resultSelectList" :count="2100" />
        </template>
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
import PageMove from '@/components/sub/paging/PageMove.vue'
import PageResult from '@/components/sub/paging/PageResult.vue'

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
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

const pageMoveValue = ref(5)
const total = ref(22)

const resultSelectList = ref([10, 20, 30, 40, 50])
</script>
