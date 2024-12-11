<template>
  <SubRoot>
    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
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
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">요청일자</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">관리기관</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check1" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton>
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 진도군</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton>
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 진도군</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">112920</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">광주전남지역본부</td>
              <td class="text-center">해남진도지사</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2021-08-17</td>
              <td class="text-center">
                <BaseButton>
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
              <td class="text-left tdPdWide" colspan="4">
                <TableList :data="tableList" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">토지소재</th>
              <td class="text-left" colspan="4">
                전라남도 진도군 진도읍 동외리 1-1
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검증자 자격</th>
              <td colspan="2" class="text-left">형사</td>
              <th scope="row" class="text-center">검증자 성명</th>
              <td class="text-left">김태형</td>
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
import TableList from '@/components/sub/table/TableList.vue'

const tableList = ref([
  {
    id: 1,
    text: '투영법 : T.M(축척계수 0.9996)',
  },
  {
    id: 2,
    text: '원점의 경위도 : 경도 동경 127º30′00″ . 위도 북위 38º00′00″',
  },
  {
    id: 3,
    text: '투영원점 가산수치 : X(N) 2,000,000 . Y(E) 1,000,000',
  },
  {
    id: 4,
    text: '타원체 : 세계측지계(GRS80)를 적용하여 타원체의 장반경 6,378,137m 편평률 298.25722210분의1.',
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

const pageMoveValue = ref(5)
const total = ref(22)
</script>
