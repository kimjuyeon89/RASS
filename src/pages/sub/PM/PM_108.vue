<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3more">
          <div class="searchColumn">
            <span class="searchLabel">처리지사</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="선택" :options="selectList" />

            <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">시설물</span>
            <BaseSelect initialSelectValue="선택" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">행정구역(소재지)</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <div class="searchColumnRow noSb">
          <div class="searchColumn">
            <span class="searchLabel">국가지점번호</span>
            <BaseInput inputType="text" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                styleClassName="hasCalendar"
                inputValue="2024-05-09"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
              <span class="betweenText">~</span>
              <BaseInput
                inputType="date"
                styleClassName="hasCalendar"
                inputValue="2024-05-09"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
            </div>
          </div>
          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 70px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 280px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 116px" />
            <col style="min-width: 110px" />
            <col style="min-width: 110px" />
            <col style="min-width: 580px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">등록구분</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">시설물</th>
              <th scope="col" class="text-center">설치기관</th>
              <th scope="col" class="text-center">설치기관명칭</th>
              <th scope="col" class="text-center">설치유형</th>
              <th scope="col" class="text-center">사업자등록번호</th>
              <th scope="col" class="text-center">주소</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">112058</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">
                전라남도 해남군 송지면 금강리 (산) 6-19
              </td>
              <td class="text-center">국가지점번호판</td>
              <td class="text-center">광주광역시</td>
              <td class="text-center">한국전력공사</td>
              <td class="text-center">부착식형</td>
              <td class="text-center">120-82-00052</td>
              <td class="text-center">전남 나주시 전력로 55, 31층</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">112058</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">
                전라남도 해남군 송지면 금강리 (산) 6-19
              </td>
              <td class="text-center">국가지점번호판</td>
              <td class="text-center">광주광역시</td>
              <td class="text-center">한국전력공사</td>
              <td class="text-center">부착식형</td>
              <td class="text-center">120-82-00052</td>
              <td class="text-center">전남 나주시 전력로 55, 31층</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">112058</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">
                전라남도 해남군 송지면 금강리 (산) 6-19
              </td>
              <td class="text-center">국가지점번호판</td>
              <td class="text-center">광주광역시</td>
              <td class="text-center">한국전력공사</td>
              <td class="text-center">부착식형</td>
              <td class="text-center">120-82-00052</td>
              <td class="text-center">전남 나주시 전력로 55, 31층</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
            <col style="min-width: 130px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">X(N)좌표</th>
              <th scope="col" class="text-center">Y(E)좌표</th>
              <th scope="col" class="text-center">Z좌표(표고)</th>
              <th scope="col" class="text-center">경도(deg)</th>
              <th scope="col" class="text-center">위도(deg)</th>
              <th scope="col" class="text-center">높이(타원체고)</th>
              <th scope="col" class="text-center">표기위치측량 X좌표</th>
              <th scope="col" class="text-center">표기위치측량 Y좌표</th>
              <th scope="col" class="text-center">표기위치측량 Z좌표</th>
              <th scope="col" class="text-center">ΔX</th>
              <th scope="col" class="text-center">ΔY</th>
              <th scope="col" class="text-center">거리차</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">747.555</td>
              <td class="text-center">128.74685697</td>
              <td class="text-center">35.16419852</td>
              <td class="text-center">747.555</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">2020667.866</td>
            </tr>
            <tr>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">747.555</td>
              <td class="text-center">128.74685697</td>
              <td class="text-center">35.16419852</td>
              <td class="text-center">747.555</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">2020667.866</td>
            </tr>
            <tr>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">747.555</td>
              <td class="text-center">128.74685697</td>
              <td class="text-center">35.16419852</td>
              <td class="text-center">747.555</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">2020667.866</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
            <col style="min-width: 120px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">지역본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">자격증</th>
              <th scope="col" class="text-center">검증자</th>
              <th scope="col" class="text-center">검증일자</th>
              <th scope="col" class="text-center">검증기관장</th>
              <th scope="col" class="text-center">기관장검증일자</th>
              <th scope="col" class="text-center">KAIS 요청일자</th>
              <th scope="col" class="text-center">문의전화</th>
              <th scope="col" class="text-center">신고전화</th>
              <th scope="col" class="text-center">비고</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">관리기관</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">본사</td>
              <td class="text-center">본사</td>
              <td class="text-center">지적기사</td>
              <td class="text-center">이기표</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center">본사장</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center"></td>
              <td class="text-center">055-717-5382</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">경상남도 하동군</td>
            </tr>
            <tr>
              <td class="text-center">본사</td>
              <td class="text-center">본사</td>
              <td class="text-center">지적기사</td>
              <td class="text-center">이기표</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center">본사장</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center"></td>
              <td class="text-center">055-717-5382</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">경상남도 하동군</td>
            </tr>
            <tr>
              <td class="text-center">본사</td>
              <td class="text-center">본사</td>
              <td class="text-center">지적기사</td>
              <td class="text-center">이기표</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center">본사장</td>
              <td class="text-center">2018-08-09</td>
              <td class="text-center"></td>
              <td class="text-center">055-717-5382</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">경상남도 하동군</td>
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
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'

import SubRoot from '@/components/sub/layout/SubRoot.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

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

const pageMoveValue = ref(5)
const total = ref(22)
</script>
