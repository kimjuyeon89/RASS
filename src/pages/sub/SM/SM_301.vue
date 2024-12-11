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
          <col style="width: 298px" />
          <col style="width: 298px" />
          <col style="width: 298px" />
          <col style="width: 298px" />
          <col style="width: 298px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">사용자 ID</th>
            <th scope="col" class="text-center">사용자명</th>
            <th scope="col" class="text-center">기관명</th>
            <th scope="col" class="text-center">권한</th>
            <th scope="col" class="text-center">최종수정일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">870045</td>
            <td class="text-center">
              <span class="text-color-black text-bold text-underline"
                >홍길동</span
              >
            </td>
            <td class="text-center">부산광역시 금정구</td>
            <td class="text-center">관리자</td>
            <td class="text-center">2020-12-03 11:17</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">870045</td>
            <td class="text-center">
              <span class="text-color-black text-bold text-underline"
                >홍길동</span
              >
            </td>
            <td class="text-center">부산광역시 금정구</td>
            <td class="text-center">관리자</td>
            <td class="text-center">2020-12-03 11:17</td>
          </tr>
          <tr>
            <td class="text-center">0</td>
            <td class="text-center">870045</td>
            <td class="text-center">
              <span class="text-color-black text-bold text-underline"
                >홍길동</span
              >
            </td>
            <td class="text-center">부산광역시 금정구</td>
            <td class="text-center">관리자</td>
            <td class="text-center">2020-12-03 11:17</td>
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
