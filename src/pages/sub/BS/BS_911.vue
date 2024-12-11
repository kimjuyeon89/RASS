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
            <span class="searchLabel">검수대기여부</span>

            <BaseCheckbox id="check1" />
          </div>
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="기초 정보" />
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 120px" />
            <col style="width: 160px" />
            <col style="width: 200px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 90px" />
            <col style="width: 90px" />
            <col style="width: 90px" />
            <col style="width: 90px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">주소</th>
              <th scope="col" class="text-center">건물명</th>
              <th scope="col" class="text-center">건물용도</th>
              <th scope="col" class="text-center">경도(위치)</th>
              <th scope="col" class="text-center">위도(위치)</th>
              <th scope="col" class="text-center">건물일련번호</th>
              <th scope="col" class="text-center">검수대기</th>
              <th scope="col" class="text-center">검수완료</th>
              <th scope="col" class="text-center">검수반려</th>
              <th scope="col" class="text-center">지도이동</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">경기 평택시 유천동 101-1</td>
              <td class="text-center">SKV1</td>
              <td class="text-center">아파트</td>
              <td class="text-center">128.12345678</td>
              <td class="text-center">38.12345678</td>
              <td class="text-center">111</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center">
                <StateLabel labelType="blue" />
              </td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">경기 평택시 유천동 101-1</td>
              <td class="text-center">SKV1</td>
              <td class="text-center">아파트</td>
              <td class="text-center">128.12345678</td>
              <td class="text-center">38.12345678</td>
              <td class="text-center">111</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center">
                <StateLabel labelType="red" />
              </td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">5513</td>
              <td class="text-center">경기남부지역본부</td>
              <td class="text-center">경기 평택시 유천동 101-1</td>
              <td class="text-center">SKV1</td>
              <td class="text-center">아파트</td>
              <td class="text-center">128.12345678</td>
              <td class="text-center">38.12345678</td>
              <td class="text-center">111</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center">
                <StateLabel labelType="black" />
              </td>
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
        <SectionTitle :right="true" title="공간정보파일 등록 정보">
          <template v-slot:right>
            <BaseButton styleClassName="bdBlue i-download" label="다운로드" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check5" />
              </th>
              <th scope="col" class="text-center">순번</th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">층수</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">출입구</td>
              <td class="text-center">1F</td>
              <td class="text-center">1100</td>
              <td class="text-center">1100_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">출입구</td>
              <td class="text-center">1F</td>
              <td class="text-center">1100</td>
              <td class="text-center">1100_entrc</td>
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
          :descRight="true"
          :descState="true"
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
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check8" />
              </th>
              <th scope="col" class="text-center">순번</th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">층수</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">도로구간</td>
              <td class="text-center">1F</td>
              <td class="text-center">1100</td>
              <td class="text-center">
                1F_1001_entrc (shp,shx,dbf 파일을 한줄로 표시)
              </td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">도로구간</td>
              <td class="text-center">1F</td>
              <td class="text-center">1100</td>
              <td class="text-center">
                1F_1001_entrc (shp,shx,dbf 파일을 한줄로 표시)
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <p class="tableDescription text-color-blue2">
          ※ 건물군내 상세정보는 건물용도명이
          아파트연림주택,종합병원,대학교,전문대학,국가기관청사,자치단체청사,오피스텔
          일 경우 등록 가능합니다.
        </p>

        <ExplanationBox title="파일형식" :data="explanationData" />
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer row">
      <div class="sectionBox">
        <SectionTitle title="조사결과 정보" :right="true">
          <template v-slot:right>
            <BaseButton label="검수취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="검수완료" styleClassName="md pd-sm bgBlue" />
            <BaseButton label="보완요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <div class="sectionInnerContainer row both1">
          <div class="sectionInnerBox" style="max-width: 430px">
            <div class="infoChartTreeWrapper overflow-y">
              <!-- 트리구조 -->
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <div class="sectionInnerBox">
            <BaseTable class="rowType">
              <colgroup>
                <col style="width: 200px" />
                <col style="width: 400px" />
                <col style="width: 200px" />
                <col style="width: 400px" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" class="text-center">출입문 형태</th>
                  <td>
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[3].options"
                    />
                  </td>
                  <th scope="row" class="text-center">출입문 자동개폐</th>
                  <td>
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[4].options"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">출입구 층 위치</th>
                  <td class="text-left"></td>
                  <th scope="row" class="text-center">XXXX</th>
                  <td class="text-left"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">진입로 형태</th>
                  <td>
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[5].options"
                    />
                  </td>
                  <th scope="row" class="text-center">출입구 명칭</th>
                  <td class="text-left"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">사용자권한</th>
                  <td class="text-center">
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[6].options"
                    />
                  </td>
                  <th scope="row" class="text-center">메모</th>
                  <td class="text-center"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">검수일자</th>
                  <td class="text-center">
                    <BaseInput inputType="text" inputValue="" />
                  </td>
                  <th scope="row" class="text-center">비고</th>
                  <td class="text-left"></td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">검수자명</th>
                  <td class="text-center" colspan="3">
                    <BaseInput inputType="text" inputValue="" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">상세위치</th>
                  <td class="text-left" colspan="3"></td>
                </tr>
              </tbody>
            </BaseTable>
          </div>
        </div>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle title="약도" :right="true" :hasFile="true" />

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
            <SectionTitle title="현장조사 사진(원경)" :right="true" />

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
            <SectionTitle title="현장조사 사진(근경)" :right="true" />

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
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import StateLabel from '@/components/sub/table/StateLabel.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import NoData from '@/components/sub/section/NoData.vue'

const explanationData = ref([
  {
    id: 1,
    title: '공간정보 파일정보',
    items: [
      {
        text: '층정보_일련번호_형상구분.확장자  예)  1F_1000_entrc.shp',
      },
      {
        text: '층구분 (지상:F 지하:B1F,2F,1B,2B,3B)  형상구분 (entrc:출입구, cntc:연결선), 일련번호는 등록파일 다운로드 받은 번호 사용',
      },
    ],
  },
])

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
  {
    id: 6,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 7,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
