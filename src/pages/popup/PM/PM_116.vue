<template>
  <Popup :maxWidth="1280" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 일괄등록"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">본부</th>
              <td>
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <FileInputWrapper label="파일 선택">
                      <template v-slot:left>
                        <FileInputBox
                          :right="true"
                          inputId="f01"
                          filePlaceholder="선택된 파일없음"
                          inputValue="덕진구_75011_전경사진(근경).jpg"
                        />
                      </template>
                    </FileInputWrapper>
                    <BaseButton
                      styleClassName="bdGray md pd-sm"
                      label="일괄등록"
                    />
                    <BaseButton
                      styleClassName="bdGray md pd-sm i-excel-green"
                      label="엑셀양식 다운로드"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <ExplanationBox title="[국가지점번호 중복 목록]">
          <template v-slot:content>
            <div class="explanationTextArea content">
              <p class="explanationText text-color-red">
                ※ 빨간색 : 일괄등록 후 중복된 국가지점번호 입니다.
              </p>
            </div>
            <div class="explanationTextArea content">
              <p class="explanationText text-color-black">
                ※ 검은색 : COS연동을 통하여 입력된 국가지점번호 입니다.
              </p>
              <p class="explanationSmallText">
                -> 중복된 국가지점번호가 없을 경우는 목록에 나타나지
                않습니다.(종료시 자동 등록 됩니다.)
              </p>
            </div>
          </template>
        </ExplanationBox>

        <BottomArea :center="true">
          <template v-slot:center>
            <BaseButton styleClassName="bdGray md pd-sm" label="삭제" />
            <BaseButton styleClassName="bgBlue md pd-sm" label="종료" />
          </template>
        </BottomArea>
      </section>

      <section class="popupSection">
        <BaseTable
          styleClassName="overflow-x"
          tableInlineStyle="width: 1280px;"
        >
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 105px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" rowspan="2">일련번호</th>
              <th scope="col" class="text-center" rowspan="2">국가지점번호</th>
              <th scope="col" class="text-center" colspan="4">토지소재지</th>
              <th scope="col" class="text-center" colspan="3">지번</th>
              <th scope="col" class="text-center" colspan="2">지번</th>
              <th scope="col" class="text-center" colspan="4">설치기관</th>
            </tr>
            <tr>
              <th scope="col" class="text-center">시도</th>
              <th scope="col" class="text-center">시군구</th>
              <th scope="col" class="text-center">읍면동</th>
              <th scope="col" class="text-center">리</th>
              <th scope="col" class="text-center">산여부</th>
              <th scope="col" class="text-center">본번</th>
              <th scope="col" class="text-center">부번</th>
              <th scope="col" class="text-center">코드</th>
              <th scope="col" class="text-center">시설물명</th>
              <th scope="col" class="text-center">코드</th>
              <th scope="col" class="text-center">기관구분</th>
              <th scope="col" class="text-center">설치기관 명칭</th>
              <th scope="col" class="text-center">사업자등록 번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">28</td>
              <td class="text-center">230</td>
              <td class="text-center">330</td>
              <td class="text-center">등록지점번호</td>
              <td class="text-center">24</td>
              <td class="text-center">1</td>
              <td class="text-center">150</td>
              <td class="text-center">0</td>
              <td class="text-center">4100</td>
              <td class="text-center">B410002</td>
              <td class="text-center">한국전력공사</td>
              <td class="text-center">한국전력공사</td>
              <td class="text-center">120-82-00052</td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <BaseTable
          styleClassName="overflow-x"
          tableInlineStyle="width: 1280px;"
        >
          <colgroup>
            <col style="width: 200px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
            <col style="width: 92px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">공백</span>
              </th>
              <th scope="col" class="text-center" colspan="11">
                좌표 및 경위도
              </th>
            </tr>
            <tr>
              <th scope="col" class="text-center">주소</th>
              <th scope="col" class="text-center">X</th>
              <th scope="col" class="text-center">Y</th>
              <th scope="col" class="text-center">Z</th>
              <th scope="col" class="text-center">경도</th>
              <th scope="col" class="text-center">위도</th>
              <th scope="col" class="text-center">높이(타원체고)</th>
              <th scope="col" class="text-center">표기위치측량 X좌표</th>
              <th scope="col" class="text-center">표기위치측량 Y좌표</th>
              <th scope="col" class="text-center">ΔX</th>
              <th scope="col" class="text-center">ΔY</th>
              <th scope="col" class="text-center">거리차</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">전라남도 나주시 전력로 55</td>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">29.65</td>
              <td class="text-center">35.16419852</td>
              <td class="text-center">747.555</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">1686148.933</td>
              <td class="text-center">1113553.052</td>
              <td class="text-center">2020667.866</td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <BaseTable
          styleClassName="overflow-x"
          tableInlineStyle="width: 1280px;"
        >
          <colgroup>
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
            <col style="width: 85px" />
            <col style="width: 85px" />
            <col style="width: 85px" />
            <col style="width: 85px" />
            <col style="width: 85px" />
            <col style="width: 85px" />
            <col style="width: 87px" />
            <col style="width: 87px" />
            <col style="width: 87px" />
            <col style="width: 75px" />
            <col style="width: 75px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" colspan="4">검증자</th>
              <th scope="col" class="text-center" rowspan="2">검증일자</th>
              <th scope="col" class="text-center" rowspan="2">검증기관장</th>
              <th scope="col" class="text-center" rowspan="2">
                표기지역 존재여부
              </th>
              <th scope="col" class="text-center" rowspan="2">문의전화</th>
              <th scope="col" class="text-center" rowspan="2">신고전화</th>
              <th scope="col" class="text-center" rowspan="2">설치유형</th>
              <th scope="col" class="text-center" colspan="3">사진파일</th>
              <th scope="col" class="text-center" rowspan="2">비고</th>
              <th scope="col" class="text-center" rowspan="2">등록상태</th>
            </tr>
            <tr>
              <th scope="col" class="text-center">지역본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">자격</th>
              <th scope="col" class="text-center">성명</th>
              <th scope="col" class="text-center">검증결과 통보서</th>
              <th scope="col" class="text-center">전경사진</th>
              <th scope="col" class="text-center">약도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">본사</td>
              <td class="text-center">본사</td>
              <td class="text-center">지적기사</td>
              <td class="text-center">이기표</td>
              <td class="text-center">20180809</td>
              <td class="text-center">인천중부지사장</td>
              <td class="text-center"></td>
              <td class="text-center">055-717-5382</td>
              <td class="text-center">119</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">경상남도 하동군</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
