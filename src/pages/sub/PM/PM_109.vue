<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">행정구역(관리기관)</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">검증일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                styleClassName="hasCalendar"
                inputValue="2024-05-09"
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
                styleClassName="hasCalendar"
                inputValue="2024-05-09"
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
            <span class="searchLabel">기타</span>
            <BaseCheckbox id="check1" label="시도만 표시" :isLabel="true" />
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
        <SectionTitle title="국가지점번호 지자체별 현황 " />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">계</th>
              <th scope="col" class="text-center">2013</th>
              <th scope="col" class="text-center">2014</th>
              <th scope="col" class="text-center">2015</th>
              <th scope="col" class="text-center">2016</th>
              <th scope="col" class="text-center">...</th>
              <th scope="col" class="text-center">2023</th>
              <th scope="col" class="text-center">2024</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">247</td>
              <td class="text-center">전북특별자치도 부안군</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
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
        </template>
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="국가지점번호 설치기관별 현황 " />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">계</th>
              <th scope="col" class="text-center">2013</th>
              <th scope="col" class="text-center">2014</th>
              <th scope="col" class="text-center">2015</th>
              <th scope="col" class="text-center">2016</th>
              <th scope="col" class="text-center">...</th>
              <th scope="col" class="text-center">2023</th>
              <th scope="col" class="text-center">2024</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">247</td>
              <td class="text-center">전북특별자치도 부안군</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group2.currentPage"
        :totalPages="pagination.group2.totalPages"
      >
        <template v-slot:right>
          <PageMove :inputValue="pageMoveValue2" :total="total2" />
        </template>
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="국가지점번호 시설물별 현황 " />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
            <col style="width: 166px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">계</th>
              <th scope="col" class="text-center">2013</th>
              <th scope="col" class="text-center">2014</th>
              <th scope="col" class="text-center">2015</th>
              <th scope="col" class="text-center">2016</th>
              <th scope="col" class="text-center">...</th>
              <th scope="col" class="text-center">2023</th>
              <th scope="col" class="text-center">2024</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">총계</td>
              <td class="text-center">4,061</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">137</td>
              <td class="text-center">54</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
            <tr>
              <td class="text-center">247</td>
              <td class="text-center">전북특별자치도 부안군</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">16</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">...</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group3.currentPage"
        :totalPages="pagination.group3.totalPages"
      >
        <template v-slot:right>
          <PageMove :inputValue="pageMoveValue3" :total="total3" />
        </template>
      </Pagination>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'

import SubRoot from '@/components/sub/layout/SubRoot.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

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
  group3: {
    currentPage: 1,
    totalPages: 10,
  },
})

const pageMoveValue = ref(5)
const total = ref(22)

const pageMoveValue2 = ref(5)
const total2 = ref(22)

const pageMoveValue3 = ref(5)
const total3 = ref(22)
</script>
