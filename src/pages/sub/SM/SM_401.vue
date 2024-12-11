<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">검색조건</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">사용여부</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[1].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">검색내용</span>

            <BaseInput inputType="text" inputValue="" />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <BaseTable>
        <colgroup>
          <col style="width: 70px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">소속기관</th>
            <th scope="col" class="text-center">사용자 ID</th>
            <th scope="col" class="text-center">성명</th>
            <th scope="col" class="text-center">접속일시</th>
            <th scope="col" class="text-center">접속유형</th>
            <th scope="col" class="text-center">사용유형</th>
            <th scope="col" class="text-center">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">본사</td>
            <td class="text-center">Newrass01</td>
            <td class="text-center">김철수</td>
            <td class="text-center">2020-12-03 11:17</td>
            <td class="text-center">관리자</td>
            <td class="text-center">조회</td>
            <td class="text-center">로그조회</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">본사</td>
            <td class="text-center">Newrass02</td>
            <td class="text-center">김철수</td>
            <td class="text-center">2020-12-03 11:17</td>
            <td class="text-center">관리자</td>
            <td class="text-center">조회</td>
            <td class="text-center">로그조회</td>
          </tr>
          <tr>
            <td class="text-center">0</td>
            <td class="text-center">본사</td>
            <td class="text-center">Newrass02</td>
            <td class="text-center">김철수</td>
            <td class="text-center">2020-12-03 11:17</td>
            <td class="text-center">관리자</td>
            <td class="text-center">조회</td>
            <td class="text-center">로그조회</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
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
    name: '전체 (ID+이름)',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '사용',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
