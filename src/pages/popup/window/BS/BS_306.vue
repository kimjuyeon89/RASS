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
              <col style="width: 100px" />
              <col style="width: 290px" />
              <col style="width: 160px" />
              <col style="width: 200px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">시도</th>
                <th scope="col" class="text-center">시군구</th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">사물주소종류</th>
                <th scope="col" class="text-center">도로명주소</th>
                <th scope="col" class="text-center">신청일자</th>
                <th scope="col" class="text-center">배치도 변경여부</th>
                <th scope="col" class="text-center">작업자명</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">구로구</td>
                <td class="text-center">R2016451110000000001</td>
                <td class="text-center">주차장</td>
                <td class="text-center">서울특별시 구로구1로 186</td>
                <td class="text-center">2024-07-21</td>
                <td class="text-center">N</td>
                <td class="text-center">오OO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">강북구</td>
                <td class="text-center">R2016451110000000002</td>
                <td class="text-center">비상소화장치</td>
                <td class="text-center">서울특별시 강북구 인수봉로23길 51</td>
                <td class="text-center">2024-07-20</td>
                <td class="text-center">N</td>
                <td class="text-center">오OO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">전라북도</td>
                <td class="text-center">덕진구</td>
                <td class="text-center">R2016451110000000003</td>
                <td class="text-center">소규모도시공원</td>
                <td class="text-center">전라북도 덕진구 인후동1가 890</td>
                <td class="text-center">2024-07-18</td>
                <td class="text-center">N</td>
                <td class="text-center">오OO</td>
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
          <SectionTitle title="협의의견(지자체협의용)" :right="right">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 350px" />
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
                <td class="text-center">
                  수정된 파일로 첨부했습니다. 확인해주세요.
                </td>
                <td class="text-center">수신</td>
                <td class="text-center">지자체</td>
                <td class="text-center">아무개</td>
                <td class="text-center">2024-08-12 13:01:56</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">
                  요청파일이 잘못된 파일로 왔습니다. 다시 보내주세요.
                </td>
                <td class="text-center">발신</td>
                <td class="text-center">LX</td>
                <td class="text-center">관리자</td>
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
                <td class="text-center">출입구로쓴걸 연결선으로 고쳐주세요.</td>
                <td class="text-center">수신</td>
                <td class="text-center">지자체</td>
                <td class="text-center">아무개</td>
                <td class="text-center">2024-07-25 13:05:20</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="현행화 이력" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 160px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 140px" />
              <col style="width: auto" />
              <col style="width: 100px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">시도</th>
                <th scope="col" class="text-center">시군구</th>
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
                <td class="text-center">서울특별시</td>
                <td class="text-center">구로구</td>
                <td class="text-center">R2016451110000000001</td>
                <td class="text-center">2024-07-18</td>
                <td class="text-center">현행화 신청</td>
                <td class="text-center"></td>
                <td class="text-left">신청합니다.</td>
                <td class="text-center">김OO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">구로구</td>
                <td class="text-center">R2016451110000000001</td>
                <td class="text-center">2024-07-19</td>
                <td class="text-center">현행화 접수</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">서울특별시</td>
                <td class="text-center">구로구</td>
                <td class="text-center">R2016451110000000001</td>
                <td class="text-center">2024-07-24</td>
                <td class="text-center">검수요청(LX본부)</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="이슈조회 (LX 내부용)">
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
                <td class="text-center">2024-07-25 13:10:51</td>
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
                <td class="text-center">2024-07-25 13:10:51</td>
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

      <section class="sectionContainer cg40 half hasTitleButton">
        <div class="sectionBox">
          <SectionTitle title="성과물 첨부파일" :right="right">
            <template v-slot:right>
              <BaseButton
                label="다운로드"
                styleClassName="md pd-sm bdBlue i-download"
              />
            </template>
          </SectionTitle>

          <div class="sectionInnerContainer">
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
                  <th scope="col" class="text-center">첨부파일 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check2" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">1</td>
                  <td class="text-center">성과물형상(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check3" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과물연결선(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check4" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">1</td>
                  <td class="text-center">성과물출입구(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check5" />
                  </td>
                  <td class="text-center">4</td>
                  <td class="text-center">1</td>
                  <td class="text-center">성과물위치점(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" />
                  </td>
                  <td class="text-center">5</td>
                  <td class="text-center">0</td>
                  <td class="text-center">성과물결과부(pdf)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" />
                  </td>
                  <td class="text-center">6</td>
                  <td class="text-center">0</td>
                  <td class="text-center">신청 현황도</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" />
                  </td>
                  <td class="text-center">7</td>
                  <td class="text-center">0</td>
                  <td class="text-center">성과도면</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check9" />
                  </td>
                  <td class="text-center">8</td>
                  <td class="text-center">0</td>
                  <td class="text-center">현장조사 결과서</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>
        </div>

        <div class="sectionBox">
          <SectionTitle title="신청현황도 및 성과도면" />

          <div class="sectionInnerContainer">
            <div class="sectionInnerBox">
              <SectionTitle title="신청현황도" titleType="dot" />

              <NoData
                :imageHeight="137"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </div>

            <div class="sectionInnerBox">
              <SectionTitle title="성과도면" titleType="dot" />

              <NoData
                :imageHeight="137"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </div>
          </div>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="수시정비" :right="right">
            <template v-slot:right>
              <BaseButton
                label="다운로드"
                styleClassName="md pd-sm bdBlue i-download"
              />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 70px" />
              <col style="width: 300px" />
              <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check9" />
                </th>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">현행화구분</th>
                <th scope="col" class="text-center">작업구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check10" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">건물</td>
                <td class="text-center">건물</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check11" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">건물</td>
                <td class="text-center">출입구</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="관련 소재지" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 610px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 220px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">법정동</th>
                <th scope="col" class="text-center">본번</th>
                <th scope="col" class="text-center">부번</th>
                <th scope="col" class="text-center">대장구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">서울특별시 구로구 가산2동</td>
                <td class="text-center">16</td>
                <td class="text-center">0</td>
                <td class="text-center">토지</td>
              </tr>
              <tr>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center"></td>
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
        title: '건물 2차',
        count: 1,
        active: true,
      },
      {
        icon: 'maintenance',
        title: '수시정비',
        count: 0,
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
