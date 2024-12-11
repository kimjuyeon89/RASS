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
        <BaseTabContent :current="current1" name="의뢰정보">
          <section class="sectionBox">
            <SubSectionTitle titleType="dot" title="의뢰정보" />
            <BaseTable>
              <colgroup>
                <col style="width: 33%" />
                <col style="width: 33%" />
                <col style="width: 33%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">접수관리번호</th>
                  <th scope="col" class="text-center">진행상태</th>
                  <th scope="col" class="text-center">단지내도로 일련번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">충청남도 서천군-3811</td>
                  <td class="text-center">검수요청 (LX본부)</td>
                  <td class="text-center">34554</td>
                </tr>
              </tbody>
            </BaseTable>
          </section>

          <section class="sectionBox">
            <SubSectionTitle
              titleType="dot"
              title="의뢰 첨부파일"
              :right="true"
            >
              <template v-slot:right>
                <BaseButton
                  label="다운로드"
                  styleClassName="q-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>
            <BaseTable
              styleClassName="overflow-y"
              inlineStyle="max-height: 247px;"
            >
              <colgroup>
                <col style="width: 70px" />
                <col style="width: 110px" />
                <col style="width: 110px" />
                <col style="width: 300px" />
                <col style="width: 130px" />
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
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check2" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check3" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check4" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
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
                <col style="width: 120px" />
                <col style="width: 150px" />
                <col style="width: 120px" />
                <col style="width: 150px" />
                <col style="width: 120px" />
                <col style="width: 150px" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col" class="text-center">출입구 명칭</th>
                  <td class="text-center">**아파트 정문</td>
                  <th scope="col" class="text-center">출입구 구분</th>
                  <td class="text-center">주 출입구</td>
                  <th scope="col" class="text-center">출입구 유형</th>
                  <td class="text-center">혼용</td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">출입구 위치</th>
                  <td class="text-center">건물군</td>
                  <th scope="col" class="text-center">출입구 형태</th>
                  <td class="text-center">기타(개방형)</td>
                  <th scope="col" class="text-center">진입로 형태</th>
                  <td class="text-center">수평접근</td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">자동개폐</th>
                  <td class="text-center">N</td>
                  <th scope="col" class="text-center">출입구 층 위치</th>
                  <td class="text-center">1</td>
                  <th scope="col" class="text-center">사용자 구분 유무</th>
                  <td class="text-center">N</td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">상세주소</th>
                  <td class="text-left" colspan="5">
                    전북 전주시 덕진구 경동로 19
                  </td>
                </tr>
                <tr>
                  <th scope="col" class="text-center" rowspan="2">
                    출입구 별칭
                  </th>
                  <td class="text-center" colspan="5" style="padding: 0px">
                    <div class="rowTableItemBox">
                      <div class="borderBox">
                        <span class="text-center borderBoxText">1</span>
                      </div>
                      <span class="borderBoxValue">별칭1</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="text-center" colspan="5" style="padding: 0px">
                    <div class="rowTableItemBox">
                      <div class="borderBox">
                        <span class="text-center borderBoxText">1</span>
                      </div>
                      <span class="borderBoxValue">별칭1</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </BaseTable>
          </section>

          <section class="sectionBox">
            <SubSectionTitle
              titleType="dot"
              title="성과물 첨부파일"
              :right="true"
            >
              <template v-slot:right>
                <BaseButton
                  label="다운로드"
                  styleClassName="q-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>

            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 70px" />
                <col style="width: 100px" />
                <col style="width: 300px" />
                <col style="width: 130px" />
                <col style="width: 200px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check5" styleClassName="sm" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">파일구분</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">의뢰첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" styleClassName="sm" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">의뢰첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" styleClassName="sm" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">의뢰첨부파일</td>
                  <td class="text-center">의뢰배치도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
              </tbody>
            </BaseTable>
          </section>

          <section class="sectionBox">
            <SubSectionTitle
              titleType="dot"
              title="수시정비 파일 등록정보"
              :right="true"
            >
              <template v-slot:right>
                <BaseButton
                  label="다운로드"
                  styleClassName="q-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>

            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 70px" />
                <col style="width: 100px" />
                <col style="width: 150px" />
                <col style="width: 100px" />
                <col style="width: 250px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check9" styleClassName="sm" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">현행화 구분</th>
                  <th scope="col" class="text-center">파일구분</th>
                  <th scope="col" class="text-center">일련번호</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">확장자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check10" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">장소지능정보</td>
                  <td class="text-center">연결선</td>
                  <td class="text-center">1000</td>
                  <td class="text-center">om_lii_1000_cntc</td>
                  <td class="text-center">shp,shx,dbf</td>
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

import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'

const popupVisible = ref(true)

const current1 = ref('의뢰정보')

const tabs1 = [
  {
    id: 1,
    name: '의뢰정보',
  },
  {
    id: 2,
    name: '성과물정보',
  },
]
</script>
