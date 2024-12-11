<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow noSb">
          <div class="searchColumn">
            <span class="searchLabel">처리지사</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="선택" :options="selectList" />

            <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">국가지점번호</span>
            <BaseInput inputType="text" />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->

        <div class="searchColumnRow noSb">
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

          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
        </div>
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: auto" />
            <col style="width: 110px" />
            <col style="width: 60px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: 70px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">등록구분</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">검증일자</th>
              <th scope="col" class="text-center">결과통보서 등록여부</th>
              <th scope="col" class="text-center">등록일자</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">전자결재 요청일자</th>
              <th scope="col" class="text-center">KAIS 요청일자</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">관리기관</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">112920</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">Y</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">결재완료</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">-</td>
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
              <td class="text-center">전라남도 진도군</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">112920</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">Y</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">결재완료</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">-</td>
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
              <td class="text-center">전라남도 진도군</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">112920</td>
              <td class="text-center">업무</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">Y</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">결재완료</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">-</td>
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
              <td class="text-center">전라남도 진도군</td>
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
          <PageResult :resultSelectList="resultSelectList" :count="2100" />
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
import PageResult from '@/components/sub/paging/PageResult.vue'

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

const resultSelectList = ref([10, 20, 30, 40, 50])
</script>
