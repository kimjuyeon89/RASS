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
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
              <col style="width: 127px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">시도</th>
                <th scope="col" class="text-center">시군구</th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">신청일자</th>
                <th scope="col" class="text-center">시행일자</th>
                <th scope="col" class="text-center">통리구분</th>
                <th scope="col" class="text-center">경과일</th>
                <th scope="col" class="text-center">통리성과물</th>
                <th scope="col" class="text-center">작업자명</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center">전라북도</td>
                <td class="text-center">덕진구</td>
                <td class="text-center">75011</td>
                <td class="text-center">2024-05-27</td>
                <td class="text-left">2024-05-27</td>
                <td class="text-center">통</td>
                <td class="text-center">3일</td>
                <td class="text-center">2</td>
                <td class="text-center">관리자</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">경기도</td>
                <td class="text-center">화성시</td>
                <td class="text-center">67358</td>
                <td class="text-center">2024-05-27</td>
                <td class="text-left">2024-05-27</td>
                <td class="text-center">통</td>
                <td class="text-center">2일</td>
                <td class="text-center">4</td>
                <td class="text-center">관리자</td>
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
          <SectionTitle title="성과물 첨부파일" :right="right">
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
                <td class="text-center">성과물구역(shp)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check3" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">1</td>
                <td class="text-center">성과결과부(pdf)</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check4" />
                </td>
                <td class="text-center">3</td>
                <td class="text-center">1</td>
                <td class="text-center">의뢰현황도</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check5" />
                </td>
                <td class="text-center">4</td>
                <td class="text-center">1</td>
                <td class="text-center">성과도면</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="신청정보" />

          <BaseTable class="rowType">
            <colgroup>
              <col style="width: 270px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="col" class="text-center">신청메모</th>
                <td class="text-center">
                  <div class="tableBox">
                    <div class="tableBoxItem">
                      <BaseTextarea inlineStyle="height: 140px" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="통리성과물" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 230px" />
              <col style="width: 230px" />
              <col style="width: 230px" />
              <col style="width: 230px" />
              <col style="width: 230px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">통리일련번호</th>
                <th scope="col" class="text-center">통리코드</th>
                <th scope="col" class="text-center">작업구분</th>
                <th scope="col" class="text-center">한글명</th>
                <th scope="col" class="text-center">영문명</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-center">72069</td>
                <td class="text-center">001</td>
                <td class="text-center">삭제</td>
                <td class="text-center">16등</td>
                <td class="text-center">16-tong</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">72058</td>
                <td class="text-center">002</td>
                <td class="text-center">신규</td>
                <td class="text-center">2통</td>
                <td class="text-center">2-tong</td>
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
              <col style="width: 70px" />
              <col style="width: auto" />
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
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">협의의견 내용입니다.</td>
                <td class="text-center">발신</td>
                <td class="text-center">LX</td>
                <td class="text-center">관리자</td>
                <td class="text-center">2024-05-27 15:38:54</td>
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
                <td class="text-center">홍길동</td>
                <td class="text-center">2024-05-27 15:30:54</td>
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

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="이력 조회" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 160px" />
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
                <td class="text-center">전라북도 덕진구-75011</td>
                <td class="text-center">2024-05-27</td>
                <td class="text-center">현행화 신청</td>
                <td class="text-center"></td>
                <td class="text-left">신청 신청합니다.</td>
                <td class="text-center">김OO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">전라북도 덕진구-75011</td>
                <td class="text-center">2024-05-28</td>
                <td class="text-center">현행화 접수</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">전라북도 덕진구-75011</td>
                <td class="text-center">2024-05-30</td>
                <td class="text-center">검수요청(LX본부)</td>
                <td class="text-center"></td>
                <td class="text-left"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">전라북도 덕진구-75011</td>
                <td class="text-center">2024-06-01</td>
                <td class="text-center">검수보완(LX본부)</td>
                <td class="text-center">신청물수 성과물수 불일치</td>
                <td class="text-left">일치시켜주시기 바랍니다.</td>
                <td class="text-center">박OO</td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">전라북도 덕진구-75011</td>
                <td class="text-center">2024-06-02</td>
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
          <SectionTitle title="이슈관리(LX내부용)" :right="right">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

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
                <th scope="col" class="text-center">작성일시</th>
                <th scope="col" class="text-center">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-left">20일날 파일받기로 했습니다.</td>
                <td class="text-center">김OO</td>
                <td class="text-center">2024-05-27 13:10:51</td>
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
                <td class="text-center">2024-05-27 13:05:20</td>
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
                <td class="text-center">2024-05-27 13:00:01</td>
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
              <col style="width: 250px" />
              <col style="width: auto" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check6" />
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
                  <BaseCheckbox id="check7" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">건물</td>
                <td class="text-center">연결선</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check8" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">장소지능정보</td>
                <td class="text-center">연결선</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="신청현황도 및 성과도면" />

          <div class="sectionInnerContainer row">
            <div class="sectionInnerBox">
              <SectionTitle
                title="의뢰현황도"
                :right="true"
                :hasFile="true"
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
                title="성과도면"
                :right="true"
                :hasFile="true"
                titleType="dot"
              />

              <div class="sectionInnerItem">
                <NoData
                  height="100%"
                  className="border imgFull"
                  :src="getImageUrl('../../assets/popup/img-map02.jpg')"
                  alt="성과도면"
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
import PageMove from '@/components/sub/paging/PageMove.vue'
import NoData from '@/components/sub/section/NoData.vue'
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
        title: '건물(2차)',
        count: 0,
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
