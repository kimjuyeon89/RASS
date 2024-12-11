<template>
  <Popup styleClassName="hasTab" :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="업무현황 상세정보(R2016451110000000001)"
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
            <BaseTable
              styleClassName="overflow-y"
              inlineStyle="max-height: 200px;"
            >
              <colgroup>
                <col style="width: 273px" />
                <col style="width: 273px" />
                <col style="width: auto" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">신청일자</th>
                  <th scope="col" class="text-center">내부도로종류</th>
                  <th scope="col" class="text-center">신청메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">2024-07-05</td>
                  <td class="text-center">지하상가</td>
                  <td class="text-left">신청합니다.</td>
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
                  <th scope="col" class="text-center">접수관리번호</th>
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
                  <td class="text-center">현황도</td>
                  <td class="text-center">000000000000</td>
                  <td class="text-center">스타필드 코엑스몰 현황도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
              </tbody>
            </BaseTable>
          </section>
        </BaseTabContent>
        <BaseTabContent :current="current1" name="성과물정보">
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

            <BaseTable
              styleClassName="overflow-y"
              inlineStyle="max-height: 247px;"
            >
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
                  <td class="text-center">현황도</td>
                  <td class="text-center">스타필드 코엑스몰 지하 1층</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" styleClassName="sm" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">현황도</td>
                  <td class="text-center">스타필드 코엑스몰 지하 1층</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" styleClassName="sm" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">현황도</td>
                  <td class="text-center">스타필드 코엑스몰 지하 1층</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check11" styleClassName="sm" />
                  </td>
                  <td class="text-center">4</td>
                  <td class="text-center">현황도</td>
                  <td class="text-center">스타필드 코엑스몰 지하 1층</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-05-27 15:38:54</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check12" styleClassName="sm" />
                  </td>
                  <td class="text-center">5</td>
                  <td class="text-center">현황도</td>
                  <td class="text-center">스타필드 코엑스몰 지하 1층</td>
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
                  <th scope="col" class="text-center">파일확장자</th>
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
