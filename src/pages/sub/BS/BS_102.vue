<template>
  <SubRoot>
    <Statistics :data="statistics" />

    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[1].options"
            />

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[2].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>

            <BaseInput inputType="text" inputValue="" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
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
          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">초과일</span>

            <div class="searchInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="searchInputLabel">일 초과</span>
            </div>
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
          :right="true"
          descText='※ "상세신청배치도" 가 들어온 건은 빨간색으로 표시됩니다.'
          textColor="text-color-blue2"
        >
          <template v-slot:right>
            <BaseButton label="검색" styleClassName="md pd-sm bgGray" />
            <BaseButton label="상세보기" styleClassName="md pd-sm bgGray" />
            <BaseButton
              label="엑셀출력"
              styleClassName="bdGray i-excel-green"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 40px" />
            <col style="width: 120px" />
            <col style="width: 100px" />
            <col style="width: 160px" />
            <col style="width: 120px" />
            <col style="width: 50px" />
            <col style="width: 50px" />
            <col style="width: 60px" />
            <col style="width: 200px" />
            <col style="width: 200px" />
            <col style="width: 120px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 40px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">시도</th>
              <th scope="col" class="text-center">시군구</th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">신청 종류</th>
              <th scope="col" class="text-center">1차 진행상태</th>
              <th scope="col" class="text-center">2차 진행상태</th>
              <th scope="col" class="text-center">초과일</th>
              <th scope="col" class="text-center">도로명 주소</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">신청일자</th>
              <th scope="col" class="text-center">신청메모</th>
              <th scope="col" class="text-center">도로명코드</th>
              <th scope="col" class="text-center">건물용도명</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">접수</td>
              <td class="text-center"></td>
              <td class="text-center">0</td>
              <td class="text-center">경기도 평택시 오성면 죽리길 274-11</td>
              <td class="text-center">오성면 죽리 274-11</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">잘부탁드립니다.</td>
              <td class="text-center">4364703</td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">강원특별자치도</td>
              <td class="text-center">양양군</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">접수</td>
              <td class="text-center">
                <span class="text-color-red text-underline">신청</span>
              </td>
              <td class="text-center">3</td>
              <td class="text-center">
                강원특별자치도 양양군 현남면 전포매리길 232-2
              </td>
              <td class="text-center">현남면 전포매리 232-2</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center"></td>
              <td class="text-center">4364703</td>
              <td class="text-center">아파트</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">경상북도</td>
              <td class="text-center">의성군</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">신규</td>
              <td class="text-center">접수</td>
              <td class="text-center"></td>
              <td class="text-center">1</td>
              <td class="text-center">경상북도 의성군 봉양면 문흘리길 834-2</td>
              <td class="text-center">봉양면 문흘리길 834-2</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center"></td>
              <td class="text-center">3018064</td>
              <td class="text-center">아파트</td>
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
        <SectionTitle
          title="협의의견 (지자체협의용)"
          :right="true"
          textColor="text-color-blue2"
        >
          <template v-slot:right>
            <BaseButton label="상세보기" styleClassName="md pd-sm bgGray" />
            <BaseButton label="의견작성" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable inlineStyle="max-height: 194px">
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">협의내용 구분</th>
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
              <td class="text-center">의견</td>
              <td class="text-center">
                수정된 파일로 첨부했습니다. 확인해주세요.
              </td>
              <td class="text-center">수신</td>
              <td class="text-center">지자체</td>
              <td class="text-center">아무개</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">상세신청배치도</td>
              <td class="text-center">요청파일이 잘못된 파일로 왔습니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">의견</td>
              <td class="text-center">출입구로쓴걸 연결선으로 고쳐주세요.</td>
              <td class="text-center">수신</td>
              <td class="text-center">지자체</td>
              <td class="text-center">아무개</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">-</td>
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
        <SectionTitle title="이력조회" />

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 289px">
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 150px" />
            <col style="width: 120px" />
            <col style="width: 160px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 100px" />
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
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">0000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">0000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 접수</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">0000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수요청 (LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">0000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수보완 (LX본부)</td>
              <td class="text-center">신청물수와 성과물수 불일치</td>
              <td class="text-left">일치시키기 바랍니다.</td>
              <td class="text-center">박OO</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">0000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수요청 (LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
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
          title="이슈관리 (LX 내부용)"
          :right="true"
          textColor="text-color-blue2"
        >
          <template v-slot:right>
            <BaseButton label="의견작성" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable inlineStyle="max-height: 194px">
          <colgroup>
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
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
            <tr>
              <td class="text-center">1</td>
              <td class="text-left">20일날파일받기로했습니다.</td>
              <td class="text-center">김**</td>
              <td class="text-center">2024-05-24 13:10:51</td>
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
              <td class="text-center">이**</td>
              <td class="text-center">2024-05-24 13:10:51</td>
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
              <td class="text-center">김**</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable>
          <colgroup>
            <col style="width: 160px" />
            <col style="width: 224px" />
            <col style="width: 120px" />
            <col style="width: 360px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" colspan="5">
                진행상태에 따른 지연 업무 표시 방법
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">초과일</th>
              <th scope="col" class="text-center">초과일 계산식</th>
              <th scope="col" class="text-center">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center table-background-blue" rowspan="2"></td>
              <td class="text-center">검수요청</td>
              <td class="text-center">3일</td>
              <td class="text-center">[검수요청일]-[RASS요청일]</td>
              <td class="text-left">
                LX검수요청일이 RASS요청한 일자로부터 3일 초과된 경우
              </td>
            </tr>
            <tr>
              <td class="text-center">(재)검수요청</td>
              <td class="text-center">3일</td>
              <td class="text-center">[검수요청일]-[KAIS반려일]</td>
              <td class="text-left">
                LX검수요청일이 KAIS반려한 일자로부터 3일 초과된 경우 (KIAS에서
                한번이상 반려처리가 있었던 경우)
              </td>
            </tr>
            <tr>
              <td class="text-center table-background-green" rowspan="2"></td>
              <td class="text-center">LX 검수보완요청</td>
              <td class="text-center">3일</td>
              <td class="text-center">[검수요청일]-[RASS요청일]</td>
              <td class="text-left">
                LX검수반려일이 RASS요청한 일자로부터 3일 초과된 경우
              </td>
            </tr>
            <tr>
              <td class="text-center">(재) LX검수보완요청</td>
              <td class="text-center">3일</td>
              <td class="text-center">[검수요청일]-[KAIS반려일]</td>
              <td class="text-left">
                LX검수반려일이 KAIS반려한 일자로부터 3일 초과된 경우 (KAIS에서
                한번이상 반려처리가 있었던 경우)
              </td>
            </tr>
            <tr>
              <td class="text-center table-background-red"></td>
              <td class="text-center">승인 (지자체검사요청)</td>
              <td class="text-center">2일</td>
              <td class="text-center">[검수요청일]-[검수요청일]</td>
              <td class="text-left">
                KAIS제공일이 검사요청한 일자로부터 2일 초과된 경우
              </td>
            </tr>

            <tr>
              <td class="text-center table-background-yellow"></td>
              <td class="text-center">지자체검사보완요청</td>
              <td class="text-center">5일</td>
              <td class="text-center">[검수요청일]-[검수요청일]</td>
              <td class="text-left">
                KAIS 반려일이 KAIS 제공한 일자로부터 5일 초과된 경우
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
import Statistics from '@/components/sub/section/Statistics.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const statistics = ref([
  {
    id: 1,
    title: '전체(건)',
    count: 22,
  },
  {
    id: 2,
    title: '신청',
    count: 22,
  },
  {
    id: 3,
    title: '접수',
    count: 4,
  },
  {
    id: 4,
    title: '신청보완',
    count: 10,
  },
  {
    id: 5,
    title: '신청취소',
    count: 146,
  },
  {
    id: 6,
    title: '검수요청(LX본부)',
    count: 5500,
  },
  {
    id: 7,
    title: '검수보완(LX본부)',
    count: 2522,
  },
  {
    id: 1,
    title: '검사요청(지자체)',
    count: 1,
  },
  {
    id: 1,
    title: '검사보완(지자체)',
    count: 10425,
  },
  {
    id: 1,
    title: '완료',
    count: 4,
  },
])

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

const selectList = ref([
  {
    id: 1,
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
