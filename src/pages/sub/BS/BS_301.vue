<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn flex1">
            <span class="searchLabel">접수관리번호</span>

            <BaseInput inputType="text" inputValue="" />
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
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 200px" />
            <col style="width: 104px" />
            <col style="width: 200px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 200px" />
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
              <th scope="col" class="text-center">사물주소종류</th>
              <th scope="col" class="text-center">도로명 주소</th>
              <th scope="col" class="text-center">신청일자</th>
              <th scope="col" class="text-center">구역</th>
              <th scope="col" class="text-center">출입구</th>
              <th scope="col" class="text-center">연결선</th>
              <th scope="col" class="text-center">위치점</th>
              <th scope="col" class="text-center">신청메모</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">서울특별시</td>
              <td class="text-center">송파구</td>
              <td class="text-center">R2016451110000000001</td>
              <td class="text-center">인명구조함</td>
              <td class="text-center">경상남도 합천군 문송길 537</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-left">현행화신청합니다</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">서울특별시</td>
              <td class="text-center">송파구</td>
              <td class="text-center">R2016451110000000001</td>
              <td class="text-center">인명구조함</td>
              <td class="text-center">경상남도 합천군 문송길 537</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-left">현행화신청합니다</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">서울특별시</td>
              <td class="text-center">송파구</td>
              <td class="text-center">R2016451110000000001</td>
              <td class="text-center">인명구조함</td>
              <td class="text-center">경상남도 합천군 문송길 537</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-left">현행화신청합니다</td>
            </tr>
            <tr class="trYellow">
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">서울특별시</td>
              <td class="text-center">송파구</td>
              <td class="text-center">R2016451110000000001</td>
              <td class="text-center">인명구조함</td>
              <td class="text-center">경상남도 합천군 문송길 537</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-left">현행화신청합니다</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">서울특별시</td>
              <td class="text-center">송파구</td>
              <td class="text-center">R2016451110000000001</td>
              <td class="text-center">인명구조함</td>
              <td class="text-center">경상남도 합천군 문송길 537</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">0</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-left">현행화신청합니다</td>
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
        <SectionTitle title="사물주소 신청 첨부파일" :right="true">
          <template v-slot:right>
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdBlue i-download"
            />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 310px">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 300px" />
            <col style="width: 180px" />
            <col style="width: 414px" />
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
              <th scope="col" class="text-center">사물주소 종류</th>
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
              <td class="text-center">첨부파일</td>
              <td class="text-center">R2016451110000000003</td>
              <td class="text-center">소규모도시공원</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">pdf</td>
              <td class="text-center">2024-05-24 15:45:38</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">R2016451110000000003</td>
              <td class="text-center">소규모도시공원</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">pdf</td>
              <td class="text-center">2024-05-24 15:45:38</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check10" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">R2016451110000000003</td>
              <td class="text-center">소규모도시공원</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">pdf</td>
              <td class="text-center">2024-05-24 15:45:38</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">R2016451110000000003</td>
              <td class="text-center">소규모도시공원</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">pdf</td>
              <td class="text-center">2024-05-24 15:45:38</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check12" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">R2016451110000000003</td>
              <td class="text-center">소규모도시공원</td>
              <td class="text-center">첨부파일</td>
              <td class="text-center">pdf</td>
              <td class="text-center">2024-05-24 15:45:38</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="사물주소 현황도" />

        <NoData
          height="340px"
          :imageHeight="137"
          className="border"
          :src="getImageUrl('../../assets/table/img-no-data.svg')"
          alt="데이터가 없습니다."
        />
      </div>
    </section>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import NoData from '@/components/sub/section/NoData.vue'

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
</script>
