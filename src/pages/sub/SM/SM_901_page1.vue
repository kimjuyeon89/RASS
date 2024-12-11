<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">분류명</span>
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

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <div class="tableWrapper">
      <div class="tableButtonGroup">
        <BaseButton label="삭제" styleClassName="md bdGray" />
        <BaseButton label="수정" styleClassName="md bdGray" />
        <BaseButton label="등록" styleClassName="md bgBlue" />
      </div>

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
            <th scope="col" class="text-center">코드분류코드</th>
            <th scope="col" class="text-center">코드분류명</th>
            <th scope="col" class="text-center">상세코드길이</th>
            <th scope="col" class="text-center">최종수정일시</th>
            <th scope="col" class="text-center">사용자명(ID)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">001</td>
            <td class="text-center">게시판 구분</td>
            <td class="text-center">한자리 숫자</td>
            <td class="text-center">2024-0612 14:29:30</td>
            <td class="text-center">관리자(rhksflwk1)</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">001</td>
            <td class="text-center">게시판 구분</td>
            <td class="text-center">한자리 숫자</td>
            <td class="text-center">2024-0612 14:29:30</td>
            <td class="text-center">관리자(rhksflwk1)</td>
          </tr>
          <tr class="ht1">
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">001</td>
            <td class="text-center">게시판 구분</td>
            <td class="text-center">한자리 숫자</td>
            <td class="text-center">2024-0612 14:29:30</td>
            <td class="text-center">관리자(rhksflwk1)</td>
          </tr>
        </tbody>
      </BaseTable>
    </div>

    <Pagination
      :currentPage="pagination.group1.currentPage"
      :totalPages="pagination.group1.totalPages"
    />
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
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
    name: '전체 (제목+내용)',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
