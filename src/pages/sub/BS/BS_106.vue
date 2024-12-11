<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3moreSmall">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">반려사유</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn flex1">
            <span class="searchLabel">재접수</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="재접수" :options="selectList" />
            <BaseSelect initialSelectValue="미접수" :options="selectList" />
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
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: auto" />
          <col style="width: 180px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">시도</th>
            <th scope="col" class="text-center">시군구</th>
            <th scope="col" class="text-center">접수관리번호</th>
            <th scope="col" class="text-center">반려일시</th>
            <th scope="col" class="text-center">반려사유분류</th>
            <th scope="col" class="text-center">반려사유</th>
            <th scope="col" class="text-center">재접수관리번호</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">2024-07-12</td>
            <td class="text-center">파일오류</td>
            <td class="text-left">신청 첨부파일이 전송되지 않았습니다.</td>
            <td class="text-center">-</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">2024-07-12</td>
            <td class="text-center">파일오류</td>
            <td class="text-left">신청 첨부파일이 전송되지 않았습니다.</td>
            <td class="text-center">-</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">2024-07-12</td>
            <td class="text-center">파일오류</td>
            <td class="text-left">신청 첨부파일이 전송되지 않았습니다.</td>
            <td class="text-center">-</td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">2024-07-12</td>
            <td class="text-center">기타</td>
            <td class="text-left">신청 내용이 적합하지 않습니다.</td>
            <td class="text-center">-</td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">2024-07-12</td>
            <td class="text-center">기타</td>
            <td class="text-left">신청 내용이 적합하지 않습니다.</td>
            <td class="text-center">-</td>
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
import BaseTable from '@/components/base/BaseTable.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
