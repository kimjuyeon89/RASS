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
              <col style="width: 100px" />
              <col style="width: 70px" />
              <col style="width: 100px" />
              <col style="width: 70px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 200px" />
              <col style="width: 200px" />
              <col style="width: 70px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">시도</th>
                <th scope="col" class="text-center">시군구</th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">신청종류</th>
                <th scope="col" class="text-center">도로종류</th>
                <th scope="col" class="text-center">신청일자</th>
                <th scope="col" class="text-center">배치도 변경 경과일</th>
                <th scope="col" class="text-center">시점</th>
                <th scope="col" class="text-center">총점</th>
                <th scope="col" class="text-center">도로길이</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">경상남도</td>
                <td class="text-center">거제시</td>
                <td class="text-center">
                  <p class="tableData">000000000</p>
                  <p class="tableData">000000000</p>
                </td>
                <td class="text-center">변경</td>
                <td class="text-center">일반도로</td>
                <td class="text-center">2024-07-25</td>
                <td class="text-center">-</td>
                <td class="text-center">
                  경상남도 거제시 사등면 덕호해안길 69
                </td>
                <td class="text-center">경상남도 거제시 사등면 광리길 87</td>
                <td class="text-center">0.11</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">경상남도</td>
                <td class="text-center">거제시</td>
                <td class="text-center">
                  <p class="tableData">000000000</p>
                  <p class="tableData">000000000</p>
                </td>
                <td class="text-center">변경</td>
                <td class="text-center">일반도로</td>
                <td class="text-center">2024-07-25</td>
                <td class="text-center">-</td>
                <td class="text-center">
                  경상남도 거제시 사등면 덕호해안길 69
                </td>
                <td class="text-center">경상남도 거제시 사등면 광리길 87</td>
                <td class="text-center">0.29</td>
              </tr>
              <tr class="trBlue">
                <td class="text-center">3</td>
                <td class="text-center">경상남도</td>
                <td class="text-center">거제시</td>
                <td class="text-center">
                  <p class="tableData">000000000</p>
                  <p class="tableData">000000000</p>
                </td>
                <td class="text-center">변경</td>
                <td class="text-center">일반도로</td>
                <td class="text-center">2024-07-25</td>
                <td class="text-center">-</td>
                <td class="text-center">
                  경상남도 거제시 사등면 덕호해안길 69
                </td>
                <td class="text-center">경상남도 거제시 사등면 광리길 87</td>
                <td class="text-center">0.11</td>
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
              <col style="width: 130px" />
              <col style="width: 330px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check1" />
                </th>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">성과건수</th>
                <th scope="col" class="text-center">첨부파일 구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check2" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">1</td>
                <td class="text-center">성과물건물(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check3" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">2</td>
                <td class="text-center">성과물출입구(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check4" />
                </td>
                <td class="text-center">3</td>
                <td class="text-center">2</td>
                <td class="text-center">성과물건물군(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check5" />
                </td>
                <td class="text-center">4</td>
                <td class="text-center">2</td>
                <td class="text-center">성과물연결선(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check6" />
                </td>
                <td class="text-center">5</td>
                <td class="text-center">-</td>
                <td class="text-center">성과물동별출입구(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check7" />
                </td>
                <td class="text-center">6</td>
                <td class="text-center">-</td>
                <td class="text-center">성과물주차장출입구(shp)</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

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
                <th scope="col" class="text-center">발신/수신일자</th>
                <th scope="col" class="text-center">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">첨부파일 추가하였습니다.</td>
                <td class="text-center">수신</td>
                <td class="text-center">지자체</td>
                <td class="text-center">김OO</td>
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
                <td class="text-center">첨부파일 재첨부 부탁드립니다.</td>
                <td class="text-center">발신</td>
                <td class="text-center">LX</td>
                <td class="text-center">이OO</td>
                <td class="text-center">2024-07-11</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="이력관리" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 160px" />
              <col style="width: auto" />
              <col style="width: 90px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">변경일자</th>
                <th scope="col" class="text-center">진행상태</th>
                <th scope="col" class="text-center">반려사유분류</th>
                <th scope="col" class="text-center">내용</th>
                <th scope="col" class="text-center">담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">
                  <p class="tableData">0000000000</p>
                  <p class="tableData">0000000000</p>
                </td>
                <td class="text-center">2024-07-05</td>
                <td class="text-center">현행화 신청</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">김OO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">
                  <p class="tableData">0000000000</p>
                  <p class="tableData">0000000000</p>
                </td>
                <td class="text-center">2024-07-08</td>
                <td class="text-center">현행화 접수</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">
                  <p class="tableData">0000000000</p>
                  <p class="tableData">0000000000</p>
                </td>
                <td class="text-center">2024-07-10</td>
                <td class="text-center">검수요청(LX본부)</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">
                  <p class="tableData">0000000000</p>
                  <p class="tableData">0000000000</p>
                </td>
                <td class="text-center">2024-07-11</td>
                <td class="text-center">검수보완(LX본부)</td>
                <td class="text-center">신청물수와 성과물수 불일치</td>
                <td class="text-left">일치시키기 바랍니다.</td>
                <td class="text-center">박OO</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

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

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="수시정비" />

          <BaseTable>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 70px" />
              <col style="width: 250px" />
              <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check8" />
                </th>
                <th scope="col" class="text-center"></th>
                <th scope="col" class="text-center">현행화구분</th>
                <th scope="col" class="text-center">작업구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check9" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">장소지능정보</td>
                <td class="text-center">연결선</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check10" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">건물</td>
                <td class="text-center">연결선</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="준공도면" />

          <BaseTable>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 200px" />
              <col style="width: auto" />
              <col style="width: 150px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">파일명</th>
                <th scope="col" class="text-center">파일확장자</th>
                <th scope="col" class="text-center">미리보기</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">000000000000</td>
                <td class="text-center">도로구간 현황도</td>
                <td class="text-center">jpg</td>
                <td class="text-center">
                  <BaseButton
                    label="미리보기"
                    styleClassName="md pd-sm bdGray i-search"
                    text-
                  />
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="성과도면" />

          <div class="sectionInnerContainer row">
            <div class="sectionInnerBox">
              <SectionTitle
                title="성과도면(전체)"
                :right="true"
                titleType="dot"
              />

              <div class="sectionInnerItem">
                <NoData
                  height="100%"
                  :imageHeight="137"
                  className="border"
                  :src="getImageUrl('../../assets/table/img-no-data.svg')"
                  alt="데이터가 없습니다."
                />
              </div>
            </div>
          </div>

          <div class="sectionInnerContainer row">
            <div class="sectionInnerBox">
              <SectionTitle
                title="성과도면(시점)"
                :right="true"
                titleType="dot"
              />

              <div class="sectionInnerItem">
                <NoData
                  height="100%"
                  :imageHeight="137"
                  className="border"
                  :src="getImageUrl('../../assets/table/img-no-data.svg')"
                  alt="데이터가 없습니다."
                />
              </div>
            </div>
            <div class="sectionInnerBox">
              <SectionTitle
                title="성과도면(종점)"
                :right="true"
                titleType="dot"
              />

              <div class="sectionInnerItem">
                <NoData
                  height="100%"
                  :imageHeight="137"
                  className="border"
                  :src="getImageUrl('../../assets/table/img-no-data.svg')"
                  alt="데이터가 없습니다."
                />
              </div>
            </div>
          </div>
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
import NoData from '@/components/sub/section/NoData.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const right = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const pageMoveValue = ref(5)
const total = ref(22)

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
        title: '통리',
        count: 1,
        active: true,
      },
      {
        icon: 'maintenance',
        title: '장소지능정보',
        count: 3,
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
        title: '수시정비',
        count: 0,
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
        title: '내부도로',
        count: 3,
        active: false,
      },
    ],
  },
])
</script>
