<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3more" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">사물종류</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">조사일자</span>

            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">본부</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">구분</span>

            <div class="searchColumnInputBox">
              <BaseRadio name="r01" id="r01" label="시군구별" />
              <BaseRadio name="r01" id="r02" label="시도별" />
              <BaseRadio name="r01" id="r03" label="본부별" />
            </div>
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
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 100px" />
            <col style="min-width: 100px" />

            <!-- 전체 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 1 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 2 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 2 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 3 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" rowspan="2">시도명</th>
              <th scope="col" class="text-center" rowspan="2">시군구명</th>
              <th scope="col" class="text-center" colspan="7">전체</th>
              <th scope="col" class="text-center" colspan="7">
                2025년도 목록1
              </th>
              <th scope="col" class="text-center" colspan="7">
                2025년도 목록2
              </th>
              <th scope="col" class="text-center" colspan="7">
                2025년도 목록3
              </th>
            </tr>
            <tr>
              <!-- 전체 -->
              <th scope="col" class="text-center">검수완료<br />[완료]</th>
              <th scope="col" class="text-center">검수여부<br />[반려]</th>
              <th scope="col" class="text-center">검수여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인불가]</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 1 -->
              <th scope="col" class="text-center">검수완료<br />[완료]</th>
              <th scope="col" class="text-center">검수여부<br />[반려]</th>
              <th scope="col" class="text-center">검수여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인불가]</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 2 -->
              <th scope="col" class="text-center">검수완료<br />[완료]</th>
              <th scope="col" class="text-center">검수여부<br />[반려]</th>
              <th scope="col" class="text-center">검수여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인불가]</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 3 -->
              <th scope="col" class="text-center">검수완료<br />[완료]</th>
              <th scope="col" class="text-center">검수여부<br />[반려]</th>
              <th scope="col" class="text-center">검수여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인]</th>
              <th scope="col" class="text-center">확인여부<br />[확인불가]</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <!-- 전체 -->
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">3</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">70.0%</td>

              <!-- 1 -->
              <td class="text-center">3</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">70.0%</td>

              <!-- 2-->
              <td class="text-center">3</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">70.0%</td>

              <!-- 3-->
              <td class="text-center">3</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">70.0%</td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">8214</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">8214</td>
              <td class="text-center">0.0%</td>

              <!-- 3 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>

              <!-- 3 -->
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">0.0%</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const selectList = ref([
  {
    id: 1,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '2024년',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 5,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
