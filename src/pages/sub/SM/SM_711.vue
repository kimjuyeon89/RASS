<template>
  <div
    class="
  "
  >
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

    <div class="tableWrapper">
      <div class="tableButtonGroup">
        <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 70px" />
          <col style="width: auto" />
          <col style="width: 188px" />
          <col style="width: 188px" />
          <col style="width: 188px" />
          <col style="width: 188px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">제목</th>
            <th scope="col" class="text-center">소속기관</th>
            <th scope="col" class="text-center">작성자</th>
            <th scope="col" class="text-center">등록일</th>
            <th scope="col" class="text-center">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">안녕하세요.</td>
            <td class="text-center">본사</td>
            <td class="text-center">최**</td>
            <td class="text-center">2020-12-03</td>
            <td class="text-center">234</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">안녕하세요.</td>
            <td class="text-center">본사</td>
            <td class="text-center">최**</td>
            <td class="text-center">2020-12-03</td>
            <td class="text-center">234</td>
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
            <td class="text-center">안녕하세요.</td>
            <td class="text-center">본사</td>
            <td class="text-center">최**</td>
            <td class="text-center">2020-12-03</td>
            <td class="text-center">234</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

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
