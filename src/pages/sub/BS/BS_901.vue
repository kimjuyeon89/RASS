<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">일련번호</span>
            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">조사일자</span>

            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
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
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
            </div>
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">사물종류</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>

          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">검수일자</span>
            <!--  -->
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
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
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
            </div>

            <BaseCheckbox id="check1" styleClassName="abs" :islabel="true" />
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
        <SectionTitle title="기초 정보" />
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <!-- 1 -->
            <col style="min-width: 70px" />
            <col style="min-width: 170px" />
            <col style="min-width: 170px" />
            <col style="min-width: 170px" />
            <col style="min-width: 300px" />
            <col style="min-width: 170px" />
            <col style="min-width: 170px" />
            <col style="min-width: 170px" />
            <col style="min-width: 170px" />

            <!-- 2 -->
            <col style="min-width: 70px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
            <col style="min-width: 135px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">사물종류</th>
              <th scope="col" class="text-center">주소</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col">진행상태</th>
              <th scope="col" class="text-center">X 좌표</th>
              <th scope="col" class="text-center">Y 좌표</th>
              <th scope="col" class="text-center">동</th>
              <th scope="col" class="text-center">지상층수</th>
              <th scope="col" class="text-center">지하층수</th>
              <th scope="col" class="text-center">조사일자</th>
              <th scope="col" class="text-center">조사자명</th>
              <th scope="col" class="text-center">확인여부</th>
              <th scope="col">상세위치</th>
              <th scope="col" class="text-center">비고</th>
              <th scope="col" class="text-center">확인불가사유</th>
              <th scope="col" class="text-center">검수일자</th>
              <th scope="col" class="text-center">검수자명</th>
              <th scope="col" class="text-center">검수반려사유</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기도 평택시</td>
              <td class="text-center">무더위쉼터</td>
              <td class="text-center">경기 평택시 유천동409-2</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">
                <StateLabel labelType="blue" />
              </td>
              <td class="text-center">1886567.986</td>
              <td class="text-center">965412.506</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">이연석(980147)</td>
              <td class="text-center">확인</td>
              <td class="text-center">유천2경로당</td>
              <td class="text-center">유천2 경로당 층</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">김재성(B60104)</td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기도 평택시</td>
              <td class="text-center">무더위쉼터</td>
              <td class="text-center">경기 평택시 유천동409-2</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">
                <StateLabel labelType="red" />
              </td>
              <td class="text-center">1886567.986</td>
              <td class="text-center">965412.506</td>
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">이연석(980147)</td>
              <td class="text-center">확인</td>
              <td class="text-center">유천2경로당</td>
              <td class="text-center">유천2 경로당 층</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">김재성(B60104)</td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기도 평택시</td>
              <td class="text-center">무더위쉼터</td>
              <td class="text-center">경기 평택시 유천동409-2</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">
                <StateLabel labelType="black" />
              </td>
              <td class="text-center">1886567.986</td>
              <td class="text-center">965412.506</td>
              <td class="text-center">3</td>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">이연석(980147)</td>
              <td class="text-center">확인</td>
              <td class="text-center">유천2경로당</td>
              <td class="text-center">유천2 경로당 층</td>
              <td class="text-center"></td>
              <td class="text-center">2024-07-19</td>
              <td class="text-center">김재성(B60104)</td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="조사결과 정보" :right="true">
          <template v-slot:right>
            <BaseButton label="검수취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="검수완료" styleClassName="md pd-sm bgBlue" />
            <BaseButton label="보완요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>
        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 200px" />
            <col style="width: 400px" />
            <col style="width: 200px" />
            <col style="width: 400px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">동정보</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">상세내용</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">지상층수</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">지하층수</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">조사일자</th>
              <td class="text-left">내용3</td>
              <th scope="row" class="text-center">조사자명</th>
              <td class="text-left">내용7</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">확인여부</th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">확인불가사유</th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검수일자</th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">비고</th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검수자명</th>
              <td class="text-center" colspan="3">
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">상세위치</th>
              <td class="text-center" colspan="3">
                <BaseInput inputType="text" inputValue="" />
              </td>
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
import StateLabel from '@/components/sub/table/StateLabel.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
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
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 5,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
