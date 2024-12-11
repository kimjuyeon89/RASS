<template>
  <Popup :maxWidth="1280" :visible="popupVisible" class="fixed">
    <SectionTitle
      title="국가지점번호 추가"
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
                    <BaseInput inputType="text" input-value="" disabled />
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
                <BaseInput inputType="text" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">Y(E)좌표</span>
              </th>
              <td>
                <BaseInput inputType="text" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">높이(타원체고)</span>
              </th>
              <td>
                <BaseInput inputType="text" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">Z(표고)</span>
              </th>
              <td>
                <BaseInput inputType="text" />
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">
                <span class="required center">시설물종류</span>
              </th>
              <td>
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">설치유형</span>
              </th>
              <td colspan="5">
                <BaseSelect
                  initialSelectValue="확인불가"
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
                      inputValue=""
                      inlineStyle="width: 180px;"
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
                      inputValue=""
                      inlineStyle="width: 180px;"
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
                  initialSelectValue="선택"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">시군구</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="선택"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">읍면동</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="전체"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">리</span>
              </th>
              <td>
                <BaseSelect
                  initialSelectValue="선택"
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
                  initialSelectValue="선택"
                  :options="selectList"
                  disabled
                />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">본번</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="" disabled />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">부번</span>
              </th>
              <td colspan="3">
                <BaseInput inputType="text" inputValue="" disabled />
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
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">상세기관 상세명칭</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="" />
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
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="row" class="text-center">
                <span class="required center">검증자 성명</span>
              </th>
              <td>
                <BaseInput inputType="text" inputValue="" />
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
                <BaseInput disabled inputType="text" />
              </td>
              <th scope="row" class="text-center">ΔY</th>
              <td>
                <BaseInput disabled inputType="text" />
              </td>
              <th scope="row" class="text-center">거리차</th>
              <td colspan="3">
                <BaseInput disabled inputType="text" />
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
              <td colspan="7">
                <BaseInput inputType="text" />
              </td>
            </tr>
          </tbody>
        </BaseTable>
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
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

import BottomArea from '@/components/sub/section/BottomArea.vue'

const popupVisible = ref(true)

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
