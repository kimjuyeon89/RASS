<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn flex1">
            <span class="searchLabel">권한 코드</span>
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
        <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
        <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 360px" />
          <col style="width: 200px" />
          <col style="width: auto" />
          <col style="width: 200px" />
          <col style="width: 200px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">권한코드</th>
            <th scope="col" class="text-center">권한명</th>
            <th scope="col" class="text-center">권한 설명</th>
            <th scope="col" class="text-center">메뉴 생성여부</th>
            <th scope="col" class="text-center">메뉴생성</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">IS_AUTHENTICATED_ANONYMOUSLY</td>
            <td class="text-center">익명 사용자</td>
            <td class="text-center"></td>
            <td class="text-center">N</td>
            <td class="text-center">
              <BaseButton label="메뉴생성" styleClassName="md pd-sm bdBlue" />
            </td>
          </tr>
          <tr>
            <td class="text-center">IS_AUTHENTICATED_ANONYMOUSLY</td>
            <td class="text-center">익명 사용자</td>
            <td class="text-center"></td>
            <td class="text-center">N</td>
            <td class="text-center">
              <BaseButton label="메뉴생성" styleClassName="md pd-sm bdBlue" />
            </td>
          </tr>
          <tr class="ht1">
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">IS_AUTHENTICATED_ANONYMOUSLY</td>
            <td class="text-center">익명 사용자</td>
            <td class="text-center"></td>
            <td class="text-center">N</td>
            <td class="text-center">
              <BaseButton label="메뉴생성" styleClassName="md pd-sm bdBlue" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
    </div>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
