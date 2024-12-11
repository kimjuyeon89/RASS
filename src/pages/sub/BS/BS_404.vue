<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">신청일자</span>
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
            <span class="searchLabel">진행상태</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
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
      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 120px" />
          <col style="width: 120px" />
          <col style="width: 120px" />
          <col style="width: 150px" />
          <col style="width: 150px" />
          <col style="width: 150px" />
          <col style="width: 150px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">시도</th>
            <th scope="col" class="text-center">시군구</th>
            <th scope="col" class="text-center">접수관리번호</th>
            <th scope="col" class="text-center">진행상태</th>
            <th scope="col" class="text-center">경과일</th>
            <th scope="col" class="text-center">신청일자</th>
            <th scope="col" class="text-center">시행일자</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">75011</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2일</td>
            <td class="text-center">2024-05-27</td>
            <td class="text-center">2024-05-27</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">75011</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2일</td>
            <td class="text-center">2024-05-27</td>
            <td class="text-center">2024-05-27</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="신청정보" :right="right">
          <template v-slot:right>
            <BaseButton label="초기화" styleClassName="md pd-sm bdGray" />
            <BaseButton label="접수취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">신청메모</th>
              <td>
                <BaseTextarea inlineStyle="height: 140px" />
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="결과작성" />

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">통리 구분</th>
              <td class="text-center">
                <div class="searchColumnInputBox wrap">
                  <BaseRadio name="r01" id="r01" label="통" checked />
                  <BaseRadio name="r01" id="r02" label="리" />
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer">
      <div class="sectionBox">
        <SectionTitle title="협의의견(지자체협의용)" :right="right">
          <template v-slot:right>
            <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: auto" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 150px" />
            <col style="width: 110px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">협의내용</th>
              <th scope="col" class="text-center">발신구분</th>
              <th scope="col" class="text-center">작성기관</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">발신/수신일시</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">협의의견 내용입니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-07-12</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">협의의견 내용입니다.</td>
              <td class="text-center">수신</td>
              <td class="text-center">DAIP</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-07-11</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="이력조회" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 330px" />
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
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">변경일자</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">분류</th>
              <th scope="col" class="text-center">내용</th>
              <th scope="col" class="text-center">담당자</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer">
      <div class="sectionBox">
        <SectionTitle title="이슈관리(LX 내부용)" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 130px" />
            <col style="width: 180px" />
            <col style="width: 110px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">이슈내용</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">작성일자</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-left">20일날 파일받기로 했습니다.</td>
              <td class="text-center">김OO</td>
              <td class="text-center">2024-07-18</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-left">파일 수령했습니다.</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-07-20</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-left">확인했습니다.</td>
              <td class="text-center">김OO</td>
              <td class="text-center">2024-07-20</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="공간정보파일 등록"
          descText="등록할 공간정보파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (확장자shp, shx, dbf가능, 대소문자 구분없음)"
          :descRight="descState"
          :descState="descState"
        >
          <template v-slot:descRight>
            <BaseButton label="파일 선택" styleClassName="md pd-sm bgGray" />
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
            <BaseButton
              label="업로드"
              styleClassName="md pd-sm bdBlue i-upload"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 250px" />
            <col style="width: 250px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" :isLabel="true" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">생성구분</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">구역</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">구역</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">구역</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" :isLabel="true" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">구역</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
          </tbody>
        </BaseTable>

        <ExplanationBox title="파일형식" :data="explanationData" />
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="성과물 공간정보파일 등록 정보" />

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 147px;">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 130px" />
            <col style="width: 130px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check6" :isLabel="true" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">생성구분</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">구역</td>
              <td class="text-center">1000</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check8" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">구역</td>
              <td class="text-center">1000</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">구역</td>
              <td class="text-center">1000</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check10" :isLabel="true" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">구역</td>
              <td class="text-center">1000</td>
              <td class="text-center">C</td>
              <td class="text-center">덕진구_1000_C_area</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="수시정비 파일 등록 정보" />

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 147px;">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 160px" />
            <col style="width: 130px" />
            <col style="width: 130px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <BaseCheckbox id="check11" :isLabel="true" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">현행화 구분</th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check12" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">출입구</td>
              <td class="text-center">01</td>
              <td class="text-center">덕진구_01_출입구</td>
              <td class="text-center">shp, shx, dbf</td>
              <td class="text-center">123433</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="신청현황도/성과도면 등록"
          descText="등록할 신청현황도/성과도면 파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (파일명이 req_로 시작하면 현황도 파일, 대소문자 구분없음)"
          :descRight="true"
          :descState="true"
        >
          <template v-slot:descRight>
            <FileInputWrapper label="파일 선택">
              <template v-slot:right>
                <FileInputBox inputId="f01" filePlaceholder="선택된 파일없음" />
              </template>
            </FileInputWrapper>
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
            <BaseButton
              label="업로드"
              styleClassName="md pd-sm bdBlue i-upload"
            />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="rowType join">
          <colgroup>
            <col style="width: 300px" />
            <col style="width: 472px" />
            <col style="width: 300px" />
            <col style="width: 472px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">신청현황도</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="col" class="text-center">성과도면</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 193px">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 175px" />
            <col style="width: auto" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check11-1" />
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">확장자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11-2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">신청현황도</td>
              <td class="text-center">req_덕진구</td>
              <td class="text-center">png</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11-3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">덕진구</td>
              <td class="text-center">png</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11-4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">덕진구</td>
              <td class="text-center">png</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11-5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">덕진구</td>
              <td class="text-center">png</td>
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
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'

const right = ref(true)
const descState = ref(true)

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const explanationData = ref([
  {
    id: 1,
    title: '성과물 공간정보 파일정보',
    items: [
      {
        text: '시군구명_일련번호_형상구분.확장자 &nbsp;&nbsp;&nbsp;&nbsp; (예) 서울시 금천구_1000_buld.shp',
      },
      {
        text: '형상구분 (buld:건물, eqb:건물군,entrc:출입구, cntc:연결선, dongentrc:동출입구, parkingentrc:주차장출입구, eqbroad:단지내도로)',
      },
    ],
  },
  {
    id: 2,
    title: '수시정비 공간정보 파일정보',
    items: [
      {
        text: '수시정비구분_현행화구분_시군구번호_일련번호_형상구분.확장자 &nbsp;&nbsp;&nbsp;&nbsp; (예) om_lii_11110_1000_cntc.shp',
      },
      {
        text: '수시정비구분: om',
      },
      {
        text: '현행화구분 (bd:건물, rd:도로, thadr:사물주소, tl:통리, gnrd:입체도로, inrd:내부도로, lii:장소지능)',
      },
      {
        text: '형상구분 (manage:도로구간, rw:실폭도로, intrvl:기초간격, area:구역, 구조물의범위, 개표구등) ',
      },
    ],
  },
])
</script>
