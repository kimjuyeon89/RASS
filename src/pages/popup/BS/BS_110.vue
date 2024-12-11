<template>
  <Popup :maxWidth="880" :visible="popupVisible">
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
              inlineStyle="max-height: 247px;"
            >
              <colgroup>
                <col style="width: 70px" />
                <col style="width: 130px" />
                <col style="width: 130px" />
                <col style="width: 300px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">구분</th>
                  <th scope="col" class="text-center">수량</th>
                  <th scope="col" class="text-center">일련번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="text-center">건물</td>
                  <td class="text-center">1</td>
                  <td class="text-center">293</td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="text-center">출입구</td>
                  <td class="text-center">1</td>
                  <td class="text-center">294</td>
                </tr>
                <tr>
                  <td class="text-center">3</td>
                  <td class="text-center">연결선</td>
                  <td class="text-center">1</td>
                  <td class="text-center">292</td>
                </tr>
                <tr>
                  <td class="text-center">4</td>
                  <td class="text-center">건물군</td>
                  <td class="text-center">1</td>
                  <td class="text-center">291</td>
                </tr>
                <tr>
                  <td class="text-center">5</td>
                  <td class="text-center">동별 출입구</td>
                  <td class="text-center">1</td>
                  <td class="text-center">0</td>
                </tr>
                <tr>
                  <td class="text-center">6</td>
                  <td class="text-center">단지내 도로</td>
                  <td class="text-center">1</td>
                  <td class="text-center">0</td>
                </tr>
                <tr>
                  <td class="text-center">7</td>
                  <td class="text-center">주차장 출입구</td>
                  <td class="text-center">1</td>
                  <td class="text-center">0</td>
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
                    <BaseCheckbox id="check1" />
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
                    <BaseCheckbox id="check2" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">배치도</td>
                  <td class="text-center">
                    배치도(진천군 문백면 평산리 (산) 41)
                  </td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check3" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">건물</td>
                  <td class="text-center">진천군_1000_build</td>
                  <td class="text-center">sph,dbf,shx</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check4" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">출입구</td>
                  <td class="text-center">진천군_1000_entrc</td>
                  <td class="text-center">sph,dbf,shx</td>
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
                <col style="width: 150px" />
                <col style="width: 300px" />
                <col style="width: 150px" />
                <col style="width: 300px" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col" class="text-center">작성방법</th>
                  <td class="text-left">기존측량자료 활용(기준점)</td>
                  <th scope="col" class="text-center">정합계수</th>
                  <td class="text-left">해당없음</td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">대표소재지</th>
                  <td class="text-left" colspan="3">
                    충청북도 진천군 문백면 평산리 41-0
                  </td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">관련소재지</th>
                  <td class="text-left" colspan="3">
                    <p>충청북도 진천군 문백면 평산리 41-1</p>
                    <p>충청북도 진천군 문백면 평산리 41-2</p>
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
                    <BaseCheckbox id="check5" :isLabel="true" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">신청분류</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" :isLabel="true" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">신청 배치도</td>
                  <td class="text-center">req_충청북도 진천군-44464</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" :isLabel="true" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" :isLabel="true" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">건물</td>
                  <td class="text-center">진천군_1234_build</td>
                  <td class="text-center">sph,dbf,shx</td>
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
                    <BaseCheckbox id="check9" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">현행화 구분</th>
                  <th scope="col" class="text-center">파일구분</th>
                  <th scope="col" class="text-center">일련번호</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check10" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">장소지능정보</td>
                  <td class="text-center">연결선</td>
                  <td class="text-center">1000</td>
                  <td class="text-center">om_lii_1000_cntc</td>
                  <td class="text-center">shp,shx,dbf</td>
                </tr>
                <tr>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
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
