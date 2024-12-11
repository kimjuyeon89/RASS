<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn flex1">
            <span class="searchLabel">메뉴명</span>
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
          <col style="width: 60px" />
          <col style="width: 300px" />
          <col style="width: 300px" />
          <col style="width: 300px" />
          <col style="width: 300px" />
          <col style="width: 300px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <BaseCheckbox id="check1" />
            </th>
            <th scope="col" class="text-center">메뉴 ID</th>
            <th scope="col" class="text-center">메뉴명</th>
            <th scope="col" class="text-center">프로그램 파일명</th>
            <th scope="col" class="text-center">메뉴 설명</th>
            <th scope="col" class="text-center">상태메뉴 ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check2" />
            </td>
            <td class="text-center">0</td>
            <td class="text-center">Root</td>
            <td class="text-center">dir</td>
            <td class="text-center">Root</td>
            <td class="text-center">0</td>
          </tr>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check3" />
            </td>
            <td class="text-center">0</td>
            <td class="text-center">Root</td>
            <td class="text-center">dir</td>
            <td class="text-center">Root</td>
            <td class="text-center">0</td>
          </tr>
          <tr class="ht1">
            <td class="text-center">
              <BaseCheckbox id="check4" />
            </td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">
              <BaseCheckbox id="check5" />
            </td>
            <td class="text-center">0</td>
            <td class="text-center">Root</td>
            <td class="text-center">dir</td>
            <td class="text-center">Root</td>
            <td class="text-center">0</td>
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
import Pagination from '@/components/sub/paging/Pagination.vue'
import { ref } from 'vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
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
