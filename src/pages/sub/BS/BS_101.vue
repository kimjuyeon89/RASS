<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">검색내용</span>

            <BaseInput inputType="text" inputValue="" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>

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
      <div class="sectionBox">
        <SectionTitle
          :descState="true"
          descText="※ 재접수 건은 노란색으로 표시됩니다."
          textColor="text-color-blue2"
        />

        <BaseTable>
          <colgroup>
            <col style="width: 40px" />
            <col style="width: 50px" />
            <col style="width: 150px" />
            <col style="width: 100px" />
            <col style="width: 150px" />
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 200px" />
            <col style="width: 100px" />
            <col style="width: 80px" />
            <col style="width: 100px" />
            <col style="width: 50px" />
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
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">도로명주소</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">신청일자</th>
              <th scope="col" class="text-center">신청메모</th>
              <th scope="col" class="text-center">도로명 코드</th>
              <th scope="col" class="text-center">건물용도명</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center">경상남도 평택시오성면 죽1리길 88</td>
              <td class="text-center">오성면 죽리 274-11</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-left">신규현행화 신청입니다.</td>
              <td class="text-center">4364703</td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center">경상남도 평택시오성면 죽1리길 88</td>
              <td class="text-center">오성면 죽리 274-11</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-left">신규현행화 신청입니다.</td>
              <td class="text-center">4364703</td>
              <td class="text-center"></td>
            </tr>
            <tr class="trYellow">
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center">경상남도 평택시오성면 죽1리길 88</td>
              <td class="text-center">오성면 죽리 274-11</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-left">신규현행화 신청입니다.</td>
              <td class="text-center">4364703</td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="건물신청 신청상세정보" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 498px" />
            <col style="width: 498px" />
            <col style="width: 498px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">대표지번여부</th>
              <th scope="col" class="text-center">신청건물지역정보</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">대표지번</td>
              <td class="text-left">경기도 평택시 오성면 죽리 274-11</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">대표지번</td>
              <td class="text-left">경기도 평택시 오성면 죽리 274-11</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">대표지번</td>
              <td class="text-left">경기도 평택시 오성면 죽리 274-11</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group2.currentPage"
        :totalPages="pagination.group2.totalPages"
      />
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="건물현행화 신청 일련번호" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 249px" />
            <col style="width: 249px" />
            <col style="width: auto" />
            <col style="width: 70px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">갯수</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">건물</td>
              <td class="text-center">1</td>
              <td class="text-left">230781</td>
              <td></td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">건물</td>
              <td class="text-center">1</td>
              <td class="text-left">230781</td>
              <td></td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">건물</td>
              <td class="text-center">1</td>
              <td class="text-left">230781</td>
              <td></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="건물신청 첨부파일" :right="true">
          <template v-slot:right>
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdBlue i-download"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 249px" />
            <col style="width: 249px" />
            <col style="width: auto" />
            <col style="width: 200px" />
            <col style="width: 200px" />
            <col style="width: 70px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check5" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">파일확장자</th>
              <th scope="col" class="text-center">등록일시</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">배치도</td>
              <td class="text-center">경기도 평택시-32475</td>
              <td class="text-center">주출입구 표시 배치도</td>
              <td class="text-center">pdf</td>
              <td class="text-left">2024-05-24 09:00:07</td>
              <td></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">배치도</td>
              <td class="text-center">경기도 평택시-32475</td>
              <td class="text-center">주출입구 표시 배치도</td>
              <td class="text-center">pdf</td>
              <td class="text-left">2024-05-24 09:00:07</td>
              <td></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check8" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">배치도</td>
              <td class="text-center">경기도 평택시-32475</td>
              <td class="text-center">주출입구 표시 배치도</td>
              <td class="text-center">pdf</td>
              <td class="text-left">2024-05-24 09:00:07</td>
              <td></td>
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
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
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
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
