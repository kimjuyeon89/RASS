<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="text"
                inputValue=""
                inlineStyle="max-width: 180px;"
              />
              <span class="betweenText">~</span>

              <BaseInput
                inputType="text"
                inputValue=""
                inlineStyle="max-width: 180px;"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">일변동 종류</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList"
              inlineStyle="max-width: 180px;"
            />
          </div>

          <BaseButton label="조회" styleClassName="md bgGray" />
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
          <col style="width: 180px" />
          <col style="width: 180px" />
          <col style="width: 180px" />
          <col style="width: auto" />
          <col style="width: 180px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">순번</th>
            <th scope="col" class="text-center">일변동일시</th>
            <th scope="col" class="text-center">일변동타입</th>
            <th scope="col" class="text-center">데이터명</th>
            <th scope="col" class="text-center">다운로드</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">6</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">7</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">8</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">9</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
          <tr>
            <td class="text-center">10</td>
            <td class="text-center">21995</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">형상추가변경</td>
            <td class="text-center">출입구</td>
            <td class="text-center">
              <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

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

const pageMoveValue = ref(5)
const total = ref(22)

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
