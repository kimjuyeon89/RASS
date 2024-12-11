<template>
  <Popup :maxWidth="1280" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 측량정보 등록"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <SubSectionTitle
          :descState="true"
          descText="국가지점번호 측량정보조회 목록을 선택하여 성과작성 목록에 등록합니다."
        />
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 192px" />
            <col style="width: 120px" />
            <col style="width: 192px" />
            <col style="width: 120px" />
            <col style="width: 192px" />
            <col style="width: 120px" />
            <col style="width: 192px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">본부</th>
              <td>
                <BaseInput inputType="text" input-value="광주전남지역본부" />
              </td>
              <th scope="row" class="text-center">지사</th>
              <td>
                <BaseInput inputType="text" inputValue="광양지사" />
              </td>
              <th scope="row" class="text-center">총계정</th>
              <td>
                <BaseInput inputType="text" inputValue="9" />
              </td>
              <th scope="row" class="text-center">계약일자</th>
              <td>
                <BaseInput
                  inputType="date"
                  styleClassName="hasCalendar"
                  inputValue="2017-01-23"
                >
                  <template v-slot:prepend>
                    <button type="button" class="btnCalendar">
                      <span class="hidden">달력</span>
                    </button>
                  </template>
                </BaseInput>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>
      <section class="popupSection">
        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
            <col style="width: 145px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="row" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="row" class="text-center">지점번호</th>
              <th scope="row" class="text-center">X(UTMK)</th>
              <th scope="row" class="text-center">Y(UTMK)</th>
              <th scope="row" class="text-center">생성자ID</th>
              <th scope="row" class="text-center">생성일자</th>
              <th scope="row" class="text-center">수정자ID</th>
              <th scope="row" class="text-center">수정일자</th>
              <th scope="row" class="text-center">비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">등록 지점번호</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">등록 지점번호</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">등록 지점번호</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">test01</td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">등록 지점번호</td>
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
      </section>

      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 140px" />
            <col style="width: 165px" />
            <col style="width: 140px" />
            <col style="width: 165px" />
            <col style="width: 140px" />
            <col style="width: 165px" />
            <col style="width: 140px" />
            <col style="width: 165px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">국가지점번호</th>
              <td colspan="7" class="text-left">나라73250452</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">X(N)좌표 (UTMK)</th>
              <td>
                <BaseInput inputType="text" inputValue="1949773.264" />
              </td>
              <th scope="row" class="text-center">Y(E)좌표 (UTMK)</th>
              <td>
                <BaseInput inputType="text" inputValue="945839.763" />
              </td>
              <th scope="row" class="text-center">높이 (타원체고)</th>
              <td>
                <BaseInput inputType="text" inputValue="26.12" />
              </td>
              <th scope="row" class="text-center">Z(표고)</th>
              <td>
                <BaseInput inputType="text" inputValue="945839.763" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">시설물종류</th>
              <td>
                <BaseInput inputType="text" inputValue="전산주" />
              </td>
              <th scope="row" class="text-center">설치유형</th>
              <td>
                <BaseInput inputType="text" inputValue="독립지주식형" />
              </td>
              <th scope="row" class="text-center">설치기관</th>
              <td colspan="4">
                <BaseInput inputType="text" inputValue="한국전력공사" />
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <!-- sectionContainer -->
        <section class="sectionContainer cg40 half">
          <div class="sectionBox">
            <div class="sectionInnerContainer">
              <div class="sectionInnerBox">
                <SubSectionTitle title="전경사진 (근경)" titleType="dot">
                  <template v-slot:right>
                    <FileInputWrapper label="파일 선택">
                      <template v-slot:left>
                        <FileInputBox
                          :right="true"
                          filePlaceholder="선택된 파일없음"
                          inputValue="덕진구_75011_전경사진(근경).jpg"
                        />
                      </template>
                    </FileInputWrapper>
                  </template>
                </SubSectionTitle>
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
                <SubSectionTitle title="전경사진 (원경)" titleType="dot" />

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
            <SubSectionTitle title="출입구위치 약도" titleType="dot" />

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
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import NoData from '@/components/sub/section/NoData.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

const popupVisible = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
const pageMoveValue = ref(5)
const total = ref(22)
</script>
