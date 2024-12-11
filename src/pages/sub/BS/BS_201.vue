<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>

            <BaseInput inputType="text" inputValue="" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">도로종류</span>

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
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
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">시도</th>
              <th scope="col" class="text-center">시군구</th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">신청 종류</th>
              <th scope="col" class="text-center">입체도로종류</th>
              <th scope="col" class="text-center">신청일자</th>
              <th scope="col" class="text-center">신청메모</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">충청남도</td>
              <td class="text-center">공주시</td>
              <td class="text-center">000000000000</td>
              <td class="text-center">신규</td>
              <td class="text-center">일반도로</td>
              <td class="text-center">2024-07-23</td>
              <td class="text-left"></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">충청남도</td>
              <td class="text-center">-</td>
              <td class="text-center">000000000000</td>
              <td class="text-center">변경</td>
              <td class="text-center">광역도로(시도)</td>
              <td class="text-center">2024-06-14</td>
              <td class="text-left">서산~태안간 연결도로 도로명 부여</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">경기도</td>
              <td class="text-center">연천군</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">신규</td>
              <td class="text-center">일반도로</td>
              <td class="text-center">2024-02-22</td>
              <td class="text-left"></td>
            </tr>
            <tr class="trYellow">
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">전국</td>
              <td class="text-center">-</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">신규</td>
              <td class="text-center">광역도로(행안부)</td>
              <td class="text-center">2024-01-23</td>
              <td class="text-left">(사업명) 장안-진산성지 숲길</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center">전라북도</td>
              <td class="text-center">완산구</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">변경</td>
              <td class="text-center">일반도로</td>
              <td class="text-center">2024-01-20</td>
              <td class="text-left"></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

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

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="도로신청 첨부파일" :right="true">
          <template v-slot:right>
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdBlue i-download"
            />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 290px">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 300px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check7" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">파일확장자</th>
              <th scope="col" class="text-center">등록일시</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check8" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">준공도면</td>
              <td class="text-center">000000000000</td>
              <td class="text-center">도로구간 현황도</td>
              <td class="text-center">jpg</td>
              <td class="text-center">2024-07-23</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">도형 도로구간</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">공주시_7887_3852_manage</td>
              <td class="text-center">shp</td>
              <td class="text-center">2024-07-23</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check10" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">도형 도로구간</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">공주시_7887_3852_manage</td>
              <td class="text-center">shx</td>
              <td class="text-center">2024-07-23</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">도형 도로구간</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">공주시_7887_3852_manage</td>
              <td class="text-center">dbf</td>
              <td class="text-center">2024-07-23</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check12" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center">도형 도로구간</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">공주시_7887_3852_manage</td>
              <td class="text-center">shp</td>
              <td class="text-center">2024-07-23</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pageMoveValue = ref(5)
const total = ref(22)

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
  group2: {
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
])
</script>
