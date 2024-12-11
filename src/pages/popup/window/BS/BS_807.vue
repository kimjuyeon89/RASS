<template>
  <SubRoot>
    <WindowStatistics :data="data" />

    <div class="subInner window">
      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle :right="right">
            <template v-slot:left>
              <div class="searchColumn">
                <span class="searchLabel">접수관리번호</span>
                <div class="searchColumnInputBox">
                  <BaseInput inputType="text" inputValue="" />
                  <BaseButton label="조회" styleClassName="md bgGray" />
                </div>
              </div>
            </template>
            <template v-slot:right>
              <BaseButton label="보안요청" styleClassName="md pd-sm bgAqua" />
              <BaseButton label="완료" styleClassName="md pd-sm bgBlue" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 222px" />
              <col style="width: 222px" />
              <col style="width: 260px" />
              <col style="width: 222px" />
              <col style="width: 222px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">시도</th>
                <th scope="col" class="text-center">시군구</th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">전체물량</th>
                <th scope="col" class="text-center">작업자명</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강서구</td>
                <td class="text-center">서울특별시 강서구 99005</td>
                <td class="text-center">3</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강서구</td>
                <td class="text-center">서울특별시 강서구 99005</td>
                <td class="text-center">10</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강서구</td>
                <td class="text-center">서울특별시 강서구 99005</td>
                <td class="text-center">3</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강서구</td>
                <td class="text-center">서울특별시 강서구 99005</td>
                <td class="text-center">1</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강서구</td>
                <td class="text-center">서울특별시 강서구 99005</td>
                <td class="text-center">2</td>
                <td class="text-center">OOO</td>
              </tr>
            </tbody>
          </BaseTable>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          />
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="성과물파일" :right="right">
            <template v-slot:right>
              <BaseButton
                label="다운로드"
                styleClassName="md pd-sm bdBlue i-download"
              />
            </template>
          </SectionTitle>
          <BaseTable styleClassName="overflow-y">
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 70px" />
              <col style="width: 300px" />
              <col style="width: auto" />
              <col style="width: 130px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check1" />
                </th>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">파일구분</th>
                <th scope="col" class="text-center">첨부파일 내용</th>
                <th scope="col" class="text-center">성과건수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check2" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">건물</td>
                <td class="text-center">건물성과물(shp)</td>
                <td class="text-center">2</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check3" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">건물</td>
                <td class="text-center">출입구성과물(shp)</td>
                <td class="text-center">1</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check4" />
                </td>
                <td class="text-center">3</td>
                <td class="text-center">건물</td>
                <td class="text-center">연결선성과물(shp)</td>
                <td class="text-center">0</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check5" />
                </td>
                <td class="text-center">4</td>
                <td class="text-center">도로</td>
                <td class="text-center">도로구간성과물(shp)</td>
                <td class="text-center">0</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="협의의견" :right="true">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: auto" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
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
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center">추가하였습니다.</td>
                <td class="text-center">수신</td>
                <td class="text-center">KAIS</td>
                <td class="text-center">OOO</td>
                <td class="text-center">2023-12-28 13:01:56</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">첨부파일 재첨부 부탁드립니다.</td>
                <td class="text-center">발신</td>
                <td class="text-center">LX</td>
                <td class="text-center">OOO</td>
                <td class="text-center">2023-12-28 13:01:56</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="이력" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 180px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: auto" />
              <col style="width: 160px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">상태</th>
                <th scope="col" class="text-center">일자</th>
                <th scope="col" class="text-center">구분</th>
                <th scope="col" class="text-center">내용</th>
                <th scope="col" class="text-center">담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center"></td>
                <td class="text-center">검사완료</td>
                <td class="text-center">2023-12-28 13:01:56</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">서울특별시 강서구-99005</td>
                <td class="text-center">검사요청(지자체)</td>
                <td class="text-center">2023-12-28 13:01:56</td>
                <td class="text-center">건물,건물군 중첩</td>
                <td class="text-center"></td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">서울특별시 강서구-99005</td>
                <td class="text-center">검사반려(지자체)</td>
                <td class="text-center">2023-12-28 13:01:56</td>
                <td class="text-center"></td>
                <td class="text-center">첨부파일 오류</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center"></td>
                <td class="text-center">검사요청(지자체)</td>
                <td class="text-center">2024-07-19 13:01:56</td>
                <td class="text-center">기타</td>
                <td class="text-center">삭제예정</td>
                <td class="text-center">OOO</td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center"></td>
                <td class="text-center">검사요청(LX본사)</td>
                <td class="text-center">2024-07-19 13:01:56</td>
                <td class="text-center">기타</td>
                <td class="text-center">삭제예정</td>
                <td class="text-center">OOO</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="현행화 이슈">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: auto" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">이슈내용</th>
                <th scope="col" class="text-center">작성자</th>
                <th scope="col" class="text-center">작성일시</th>
                <th scope="col" class="text-center">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-left">20일날 파일받기로 했습니다.</td>
                <td class="text-center">김OO</td>
                <td class="text-center">2024-07-25 13:10:51</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-left">파일 수령했습니다.</td>
                <td class="text-center">이OO</td>
                <td class="text-center">2024-07-25 13:05:20</td>
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
                <td class="text-center">2024-07-25 13:00:01</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>
    </div>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import WindowStatistics from '@/components/popup/WindowStatistics.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const right = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const data = ref([
  {
    id: 1,
    items: [
      {
        icon: 'building',
        title: '건물',
        count: 1,
        active: false,
      },
      {
        icon: 'building',
        title: '건물(2차)',
        count: 0,
        active: true,
      },
      {
        icon: 'maintenance',
        title: '수시정비',
        count: 5,
        active: false,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        icon: 'road',
        title: '도로',
        count: 2,
        active: false,
      },
      {
        icon: 'dimensions',
        title: '입체도로',
        count: 3,
        active: false,
      },
      {
        icon: 'location',
        title: '내부도로',
        count: 3,
        active: true,
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        icon: 'object-address',
        title: '사물주소',
        count: 2,
        active: true,
      },
      {
        icon: 'dimensions',
        title: '통리',
        count: 1,
        active: false,
      },
      {
        icon: 'satellite',
        title: '장소지능정보',
        count: 3,
        active: false,
      },
    ],
  },
])
</script>
