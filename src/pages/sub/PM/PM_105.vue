<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3moreSmall">
          <div class="searchColumn">
            <span class="searchLabel">처리지사</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="선택" :options="selectList" />

            <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">계약일자</span>
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

          <div class="searchColumn flex1">
            <span class="searchLabel">국가지점번호</span>
            <BaseInput inputType="text" />
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
        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 127px" />
            <col style="width: 127px" />
            <col style="width: 127px" />
            <col style="width: 127px" />
            <col style="width: auto" />
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
              <th scope="col" class="text-center">총계정</th>
              <th scope="col" class="text-center">등록구분</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">결재승인일자</th>
              <th scope="col" class="text-center">검증결과 통보서</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">관리기관</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">57</td>
              <td class="text-center">업무</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
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
              <td class="text-center">57</td>
              <td class="text-center">업무</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
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
              <td class="text-center">57</td>
              <td class="text-center">업무</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
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
        </template>
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="국가지점번호 검증결과 통보" />

        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 200px" />
            <col style="width: 447px" />
            <col style="width: 270px" />
            <col style="width: 377px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center" colspan="2">지점번호</th>
              <td class="text-left">나라7325052</td>
              <th scope="row" class="text-center">시설물종류</th>
              <td class="text-left">방파제</td>
            </tr>
            <tr>
              <th scope="row" class="text-center" rowspan="4">
                좌표 및 경위도
              </th>
              <th scope="row" class="text-center">X(N)</th>
              <td class="text-left">604521.449</td>
              <th scope="row" class="text-center">경도(deg)</th>
              <td class="text-left">126.12059323</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">Y(E)</th>
              <td class="text-left">873250.856</td>
              <th scope="row" class="text-center">위도(deg)</th>
              <td class="text-left">34.42674064</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">Z(표고)</th>
              <td class="text-left">-</td>
              <th scope="row" class="text-center">높이(타원체고)</th>
              <td class="text-left">333.000</td>
            </tr>
            <tr>
              <td class="text-left" colspan="4">
                전라남도 진도군 진도읍 동외리 1-1
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">시설물 종류</th>
              <td colspan="2" class="text-left">송전철탑</td>
              <th scope="row" class="text-center">설치유형</th>
              <td class="text-left">부착식형</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검증자 자격</th>
              <td colspan="2" class="text-left">지적기사</td>
              <th scope="row" class="text-center">검증자 성명</th>
              <td class="text-left">박형래</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">설치기관</th>
              <td colspan="2" class="text-left">한국전력공사</td>
              <th scope="row" class="text-center">설치기관 상세명칭</th>
              <td class="text-left">한국전력공사 영등포지사</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">설치기관주소</th>
              <td colspan="2" class="text-left">
                서울특별시 영등포구 경인로 878 (영등포동1가, 한국전력공사 )
              </td>
              <th scope="row" class="text-center">사업자등록번호</th>
              <td class="text-left">120-82-00052</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검증일자</th>
              <td colspan="2" class="text-left">2017-08-31</td>
              <th scope="row" class="text-center">문의전화</th>
              <td class="text-left">02-2670-4341</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">관리기관(관리지자체)</th>
              <td colspan="3" class="text-left">서울특별시 서초구</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer cg40 half">
      <div class="sectionBox">
        <div class="sectionInnerContainer">
          <div class="sectionInnerBox">
            <SectionTitle
              title="전경사진 (전경)"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
            </SectionTitle>
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
              title="전경사진 (원경)"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
            </SectionTitle>

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

      <div class="sectionBox">
        <SectionTitle
          title="약도"
          :right="true"
          :hasFile="true"
          titleType="dot"
        >
        </SectionTitle>

        <div class="sectionInnerContainer">
          <NoData
            height="100%"
            :imageHeight="137"
            className="border"
            :src="getImageUrl('../../assets/table/img-no-data.svg')"
            alt="데이터가 없습니다."
          />
        </div>
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import NoData from '@/components/sub/section/NoData.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'

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

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
