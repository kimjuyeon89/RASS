<template>
  <Popup :maxWidth="1280" :visible="popupVisible" class="fixed">
    <SectionTitle
      title="국가지점번호 수정"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">국가지점번호</span>
              </th>
              <td colspan="7">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue="광주전남지역본부"
                      disabled
                    />
                    <BaseButton
                      styleClassName="md pd-sm bgGray"
                      label="지점번호생성"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">X(N)좌표</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="1920704.935" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">Y(E)좌표</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="947872.890" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">높이(타원체고)</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="1112.000" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">Z(표고)</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="1111.000" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">시설물종류</span>
              </th>
              <td>
                <BaseSelect initialSelectValue="가로등" :options="selectList" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">설치유형</span>
              </th>
              <td colspan="5">
                <BaseSelect
                  initialSelectValue="독립지주식형"
                  :options="selectList"
                  inlineStyle="max-width: 170px"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span class="required center">경위도(deg)</span>
              </th>
              <td colspan="7" class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue="126.92295449"
                      before="text"
                      inputId="input1"
                      beforeLabel="경도:"
                      styleClassName="hasBeforeText"
                      disabled
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue="37.28381738"
                      before="text"
                      beforeLabel="위도:"
                      inputId="input2"
                      styleClassName="hasBeforeText"
                      disabled
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseButton
                      styleClassName="bdGray md pd-sm"
                      label="지도보기"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <SubSectionTitle title="설치 소재지" titleType="dot" />
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">시도</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="경기도"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">시군구</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="화성시"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">읍면동</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="매송면"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">리</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="송라리"
                  :options="selectList"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">산여부</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="산"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">본번</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="0059" disabled />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">부번</span>
              </th>
              <td colspan="3">
                <BaseInput inputType="text" inputValue="0001" disabled />
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <SubSectionTitle title="의뢰 기관 정보" titleType="dot" />
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">설치기관</span>
              </th>
              <td>
                <BaseSelect initialSelectValue="경찰청" :options="selectList" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">상세기관 상세명칭</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="테스트22" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">설치기관 주소</span>
              </th>
              <td>
                <BaseInput
                  inputType="text"
                  inputValue="전라북도 광양시 시청로 33"
                />
              </td>
              <th scope="row" class="text-center">사업자등록번호</th>
              <td>
                <BaseInput inputType="text" inputValue="132-82-01199" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">검증자 자격</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="테스트" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">검증자 성명</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="테스트" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">검증 일자</span>
              </th>
              <td>
                <BaseInput
                  inputType="date"
                  styleClassName="hasCalendar"
                  inputValue=""
                >
                  <template v-slot:prepend>
                    <button type="button" class="btnCalendar">
                      <span class="hidden">달력</span>
                    </button>
                  </template>
                </BaseInput>
              </td>
              <th scope="row" class="text-center">
                <span class="required center">문의전화</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <SubSectionTitle title="기타 정보" titleType="dot" />
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
            <col style="width: 120px" />
            <col style="width: 185px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">ΔX</th>
              <td>
                <BaseInput disabled inputType="text" inputValue="1920704.935" />
              </td>
              <th scope="row" class="text-center">ΔY</th>
              <td>
                <BaseInput disabled inputType="text" inputValue="947872.890" />
              </td>
              <th scope="row" class="text-center">거리차</th>
              <td colspan="3">
                <BaseInput disabled inputType="text" inputValue="2141861.448" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">표기위치 X좌표</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">표기위치 Y좌표</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">표기위치 높이</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">신고전화</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">비고</th>
              <td>
                <BaseInput inputType="text" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">관리기관</span>
              </th>
              <td colspan="5">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseSelect
                      beforeLabel="시도:"
                      disabled
                      initialSelectValue="경기도"
                      :options="selectList"
                      before="text"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseSelect
                      beforeLabel="시군구:"
                      disabled
                      initialSelectValue="화성시"
                      :options="selectList"
                      before="text"
                      styleClassName="hasBeforeText"
                    />
                    <BaseButton
                      styleClassName="bdGray md pd-sm"
                      label="직접선택"
                    />
                  </div>
                </div>
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
                <SubSectionTitle
                  title="전경사진 (근경)"
                  :right="true"
                  rightGroupStyle="max-width: 400px"
                  :hasFile="true"
                  titleType="dot"
                >
                  <template v-slot:right>
                    <FileInputWrapper label="파일 선택">
                      <template v-slot:left>
                        <FileInputBox
                          inputId="f01"
                          :right="true"
                          filePlaceholder="선택된 파일없음"
                        />
                      </template>
                    </FileInputWrapper>
                    <BaseButton
                      styleClassName="bdGray md pd-sm"
                      label="사진 이력관리"
                    />
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
                <SubSectionTitle
                  title="전경사진 (원경)"
                  :right="true"
                  rightGroupStyle="max-width: 400px"
                  :hasFile="true"
                  titleType="dot"
                >
                  <template v-slot:right>
                    <FileInputWrapper label="파일 선택">
                      <template v-slot:left>
                        <FileInputBox
                          inputId="f02"
                          filePlaceholder="선택된 파일없음"
                        />
                      </template>
                    </FileInputWrapper>
                    <BaseButton
                      styleClassName="bdGray md pd-sm"
                      label="사진 이력관리"
                    />
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
            </div>
          </div>

          <div class="sectionBox">
            <SubSectionTitle
              title="약도"
              :right="true"
              rightGroupStyle="max-width: 400px"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:left>
                    <FileInputBox
                      inputId="f03"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                </FileInputWrapper>
                <BaseButton
                  styleClassName="bdGray md pd-sm"
                  label="사진 이력관리"
                />
              </template>
            </SubSectionTitle>

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
        <BottomArea :right="true">
          <template v-slot:right>
            <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="수정" styleClassName="md pd-sm bgBlue" />
          </template>
        </BottomArea>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

import BottomArea from '@/components/sub/section/BottomArea.vue'
import NoData from '@/components/sub/section/NoData.vue'

import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'

const popupVisible = ref(true)

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
