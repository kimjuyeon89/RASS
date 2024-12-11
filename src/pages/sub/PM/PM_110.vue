<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow noSb">
          <div class="searchColumn">
            <span class="searchLabel">처리본부</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">국가지점번호</span>
            <BaseInput inputType="text" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">조사일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue="2024-05-09"
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
                inputValue="2024-05-09"
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
            <span class="searchLabel">활동유형</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">사용자유형</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: 117px" />
            <col style="width: 117px" />
            <col style="width: 117px" />
            <col style="width: 117px" />
            <col style="width: 180px" />
            <col style="width: 117px" />
            <col style="width: 117px" />
            <col style="width: 117px" />
            <col style="width: 200px" />
            <col style="width: 70px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">자동생성지점번호</th>
              <th scope="col" class="text-center">활동유형</th>
              <th scope="col" class="text-center">X좌표</th>
              <th scope="col" class="text-center">Y좌표</th>
              <th scope="col" class="text-center">조사일자</th>
              <th scope="col" class="text-center">조사자</th>
              <th scope="col" class="text-center">사용자유형</th>
              <th scope="col" class="text-center">처리구분</th>
              <th scope="col" class="text-center">처리일자</th>
              <th scope="col" class="text-center">조사메모</th>
              <th scope="col" class="text-center">위치조회</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">현장조사</td>
              <td class="text-center">1941830</td>
              <td class="text-center">936777</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">정미란(1000000048) 정미란(1000000048)</td>
              <td class="text-center">지킴이</td>
              <td class="text-center">정상</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-left">
                상태양호 의자에 가려져 잘 못보고 갈 수 있음
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
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">현장조사</td>
              <td class="text-center">1941830</td>
              <td class="text-center">936777</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">정미란(1000000048) 정미란(1000000048)</td>
              <td class="text-center">지킴이</td>
              <td class="text-center">정상</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-left">
                상태양호 의자에 가려져 잘 못보고 갈 수 있음
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
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">현장조사</td>
              <td class="text-center">1941830</td>
              <td class="text-center">936777</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">정미란(1000000048) 정미란(1000000048)</td>
              <td class="text-center">지킴이</td>
              <td class="text-center">정상</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-left">
                상태양호 의자에 가려져 잘 못보고 갈 수 있음
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
        <SectionTitle title="RASS 국가지점번호 정보" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 200px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">X좌표</th>
              <th scope="col" class="text-center">Y좌표</th>
              <th scope="col" class="text-center">주소</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">관리기관</th>
              <th scope="col" class="text-center">KAIS통보여부</th>
              <th scope="col" class="text-center">KAIS통보날짜</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">검증결과통보서</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">6133</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1941896.808</td>
              <td class="text-center">940028.198</td>
              <td class="text-center">경기도 부천시 소사구 옥길동622-4</td>
              <td class="text-center">-</td>
              <td class="text-center">경기도 소사구</td>
              <td class="text-center">-</td>
              <td class="text-center">2024-06-25</td>
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
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">6133</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1941896.808</td>
              <td class="text-center">940028.198</td>
              <td class="text-center">경기도 부천시 소사구 옥길동622-4</td>
              <td class="text-center">-</td>
              <td class="text-center">경기도 소사구</td>
              <td class="text-center">-</td>
              <td class="text-center">2024-06-25</td>
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
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">6133</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1941896.808</td>
              <td class="text-center">940028.198</td>
              <td class="text-center">경기도 부천시 소사구 옥길동622-4</td>
              <td class="text-center">-</td>
              <td class="text-center">경기도 소사구</td>
              <td class="text-center">-</td>
              <td class="text-center">2024-06-25</td>
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
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group2.currentPage"
        :totalPages="pagination.group2.totalPages"
      >
        <PageMove :inputValue="pageMoveValue2" :total="total2" />
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="조사정보처리"
          :right="true"
          descText="일괄등록된 국가지점번호는 파일을 다운로드 후 지점번호 결과통보서를 작성해 주세요."
        />

        <BaseTable styleClassName="rowType double">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 282px" />
            <col style="width: 270px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">처리구분</th>
              <td>
                <BaseSelect initialSelectValue="정상" :options="selectList" />
              </td>
              <th scope="row" class="text-center">처리결과내용(한글200자)</th>
              <td>
                <div class="rowtableItemBox">
                  <div class="rowTableItem">
                    <BaseInput inputType="text" />
                    <BaseButton
                      styleClassName="md pd-sm bgBlue"
                      label="결과저장"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable styleClassName="rowType double">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 282px" />
            <col style="width: 270px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">국가지점번호변경</th>
              <td>
                <BaseInput inputType="text" />
              </td>
              <th scope="row" class="text-center">변경사유(한글200자)</th>
              <td>
                <div class="rowtableItemBox">
                  <div class="rowTableItem">
                    <BaseInput inputType="text" />
                    <BaseButton
                      styleClassName="md pd-sm bgBlue"
                      label="변경저장"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle
              title="조사 위치현황도"
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
        </div>

        <div class="sectionInnerContainer row hasButton">
          <div class="sectionInnerBox">
            <SectionTitle
              title="일제조사 근경사진"
              :right="true"
              titleType="dot"
            >
              <template v-slot:right>
                <BaseButton
                  styleClassName="md pd-sm bdBlue i-download"
                  label="다운로드"
                />
              </template>
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
          <BaseButton styleClassName="btnChange">
            <template v-slot:icon>
              <i class="ico change-arrow"></i>
            </template>
          </BaseButton>
          <div class="sectionInnerBox">
            <SectionTitle title="끝지점" :right="true" titleType="dot">
              <template v-slot:right>
                <BaseButton
                  styleClassName="md pd-sm bdGray"
                  label="사진이력관리"
                />
              </template>
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

        <div class="sectionInnerContainer row hasButton">
          <div class="sectionInnerBox">
            <SectionTitle
              title="일제조사 원경사진"
              :right="true"
              titleType="dot"
            >
              <template v-slot:right>
                <BaseButton
                  styleClassName="md pd-sm bdBlue i-download"
                  label="다운로드"
                />
              </template>
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
          <BaseButton styleClassName="btnChange">
            <template v-slot:icon>
              <i class="ico change-arrow"></i>
            </template>
          </BaseButton>
          <div class="sectionInnerBox">
            <SectionTitle title="시스템 원경사진" :right="true" titleType="dot">
              <template v-slot:right>
                <BaseButton
                  styleClassName="md pd-sm bdGray"
                  label="사진이력관리"
                />
              </template>
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
    </section>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import NoData from '@/components/sub/section/NoData.vue'

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

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const pageMoveValue = ref(5)
const total = ref(22)

const pageMoveValue2 = ref(5)
const total2 = ref(22)
</script>
