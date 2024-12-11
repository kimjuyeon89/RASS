<template>
  <Popup styleClassName="hasTab" :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="업무현황 상세정보"
      titleIcon="bag"
      @close="popupVisible = false"
    />

    <BaseTab styleClassName="hasTabLength7 tabType2">
      <template v-slot:tabItem>
        <BaseTabItem :data="tabs1" v-model="current1" />
      </template>

      <template v-slot:tabContent>
        <BaseTabContent :current="current1" name="신청정보">
          <section class="sectionBox">
            <SubSectionTitle titleType="dot" title="신청정보" />
            <BaseTable
              styleClassName="overflow-y"
              inlineStyle="max-height: 147px"
            >
              <colgroup>
                <col style="width: 293px" />
                <col style="width: 293px" />
                <col style="width: 293px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">구분</th>
                  <th scope="col" class="text-center">수량</th>
                  <th scope="col" class="text-center">일련번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">구역</td>
                  <td class="text-center">1</td>
                  <td class="text-center">123465</td>
                </tr>
                <tr>
                  <td class="text-center">출입구</td>
                  <td class="text-center">1</td>
                  <td class="text-center">123465</td>
                </tr>
                <tr>
                  <td class="text-center">연결선</td>
                  <td class="text-center">1</td>
                  <td class="text-center">123465</td>
                </tr>
                <tr>
                  <td class="text-center">위치점</td>
                  <td class="text-center">1</td>
                  <td class="text-center">123465</td>
                </tr>
              </tbody>
            </BaseTable>
          </section>

          <section class="sectionBox">
            <SubSectionTitle
              titleType="dot"
              title="신청 첨부파일"
              :right="true"
            >
              <template v-slot:right>
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>
            <BaseTable>
              <colgroup>
                <col style="width: 40px" />
                <col style="width: 60px" />
                <col style="width: 100px" />
                <col style="width: 150px" />
                <col style="width: 120px" />
                <col style="width: 150px" />
                <col style="width: 100px" />
                <col style="width: 200px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check1" styleClassName="sm" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">파일구분</th>
                  <th scope="col" class="text-center">접수관리번호</th>
                  <th scope="col" class="text-center">사물주소 종류</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일시</th>
                </tr>
              </thead>
              <tbody>
                <tr class="trBlue">
                  <td class="text-center">
                    <BaseCheckbox id="check2" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">현황도</td>
                  <td class="text-center">R2016451110000000001</td>
                  <td class="text-center">인명구조함</td>
                  <td class="text-center">문송길 1</td>
                  <td class="text-center">PNG</td>
                  <td class="text-center">2024-07-05</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check3" styleClassName="sm" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">사물주소 형상</td>
                  <td class="text-center">R2016451110000000001</td>
                  <td class="text-center">인명구조함</td>
                  <td class="text-center">문송길 1</td>
                  <td class="text-center">PNG</td>
                  <td class="text-center">2024-07-05</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check4" styleClassName="sm" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">사물주소 형상</td>
                  <td class="text-center">R2016451110000000001</td>
                  <td class="text-center">인명구조함</td>
                  <td class="text-center">문송길 1</td>
                  <td class="text-center">PNG</td>
                  <td class="text-center">2024-07-05</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check5" styleClassName="sm" />
                  </td>
                  <td class="text-center">4</td>
                  <td class="text-center">사물주소 출입구</td>
                  <td class="text-center">R2016451110000000001</td>
                  <td class="text-center">인명구조함</td>
                  <td class="text-center">문송길 1</td>
                  <td class="text-center">PNG</td>
                  <td class="text-center">2024-07-05</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" styleClassName="sm" />
                  </td>
                  <td class="text-center">5</td>
                  <td class="text-center">사물주소 출입구</td>
                  <td class="text-center">R2016451110000000001</td>
                  <td class="text-center">인명구조함</td>
                  <td class="text-center">문송길 1</td>
                  <td class="text-center">PNG</td>
                  <td class="text-center">2024-07-05</td>
                </tr>
              </tbody>
            </BaseTable>
          </section>
        </BaseTabContent>
        <BaseTabContent :current="current1" name="성과물정보">
          <section class="sectionBox">
            <SubSectionTitle titleType="dot" title="성과물 정보" />
            <BaseTable class="rowType">
              <colgroup>
                <col style="width: 150px" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col" class="text-center">작성방법</th>
                  <td>
                    <div class="searchColumnInputBox">
                      <BaseCheckbox
                        id="check9"
                        label="참고도면 활용"
                        :isLabel="true"
                        styleClassName="sm"
                      />
                      <BaseCheckbox
                        id="check10"
                        label="현장조사 결과활용"
                        :isLabel="true"
                        styleClassName="sm"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">원점분류</th>
                  <td class="text-left">UTMK (EPSG:5179) 중부원점</td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">드론배달점</th>
                  <td>
                    <div class="rowTableItemBox">
                      <div class="rowTableItem">
                        <BaseInput
                          inputType="text"
                          inputValue=""
                          inlineStyle="width: 170px;"
                          before="text"
                          inputId="input1"
                          beforeLabel="위도"
                          styleClassName="hasBeforeText"
                        />
                      </div>

                      <div class="rowTableItem">
                        <BaseInput
                          inputType="text"
                          inputValue=""
                          inlineStyle="width: 170px;"
                          before="text"
                          beforeLabel="경도"
                          inputId="input2"
                          styleClassName="hasBeforeText"
                        />
                      </div>

                      <div class="rowTableItem">
                        <BaseInput
                          inputType="text"
                          inputValue=""
                          inlineStyle="width: 170px;"
                          before="text"
                          beforeLabel="고도"
                          inputId="input3"
                          styleClassName="hasBeforeText"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">협의조사(기본도정비)</th>
                  <td>
                    <div class="searchColumnInputBox wrap">
                      <BaseRadio id="r01" name="r01" label="유" checked />
                      <BaseRadio id="r02" name="r02" label="무" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">협의내용</th>
                  <td>
                    <BaseInput inputType="text" inlineStyle="width: 450px;" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">관련소재지(1)</th>
                  <td>
                    <BaseInput
                      inputType="text"
                      inputValue="경상남도 합천군 문송길 100-1"
                      inlineStyle="width: 300px;"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="text-center">관련소재지(2)</th>
                  <td>
                    <BaseInput
                      inputType="text"
                      inputValue="경상남도 합천군 문송길 100-2"
                      inlineStyle="width: 300px;"
                    />
                  </td>
                </tr>
              </tbody>
            </BaseTable>
          </section>
        </BaseTabContent>
      </template>
    </BaseTab>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'

const popupVisible = ref(true)
const current1 = ref('신청정보')

const tabs1 = [
  {
    id: 1,
    name: '신청정보',
  },
  {
    id: 2,
    name: '성과물정보',
  },
]
</script>
