<template>
  <SubRoot>
    <div class="tableWrapper">
      <div class="tableButtonGroup">
        <BaseButton label="삭제" styleClassName="md bdGray" />
        <BaseButton label="수정" styleClassName="md bdGray" />
        <BaseButton label="등록" styleClassName="md bgBlue" />
      </div>

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
            <th scope="col" class="text-center">코드분류코드</th>
            <th scope="col" class="text-center">코드</th>
            <th scope="col" class="text-center">코드값</th>
            <th scope="col" class="text-center">사용여부</th>
            <th scope="col" class="text-center">비고</th>
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
            <td class="text-center">Y</td>
            <td class="text-center">&nbsp;</td>
            <td class="text-center">2024-0612 14:29:30</td>
            <td class="text-center">관리자(rhksflwk1)</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">001</td>
            <td class="text-center">게시판 구분</td>
            <td class="text-center">한자리 숫자</td>
            <td class="text-center">Y</td>
            <td class="text-center">&nbsp;</td>
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
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">10</td>
            <td class="text-center">001</td>
            <td class="text-center">게시판 구분</td>
            <td class="text-center">한자리 숫자</td>
            <td class="text-center">Y</td>
            <td class="text-center">&nbsp;</td>
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
import BaseTable from '@/components/base/BaseTable.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
