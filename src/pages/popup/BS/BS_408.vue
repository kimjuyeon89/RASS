<template>
  <Popup styleClassName="hasTab" :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="업무현황 상세정보 (전라북도 덕진구 - 75011)"
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
              styleClassName="overflow-x"
              tableInlineStyle="width: 880px"
            >
              <colgroup>
                <col style="width: 33%" />
                <col style="width: 33%" />
                <col style="width: 33%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">신청일자</th>
                  <th scope="col" class="text-center">시행일자</th>
                  <th scope="col" class="text-center">신청메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">2024-05-27</td>
                  <td class="text-center">2024-05-27</td>
                  <td class="text-center">신청메모 내용입니다.</td>
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
                <col style="width: 70px" />
                <col style="width: 60px" />
                <col style="width: 110px" />
                <col style="width: auto" />
                <col style="width: 110px" />
                <col style="width: 160px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check1" styleClassName="sm" />
                  </th>
                  <th scope="col" class="text-center">파일구분</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="text-center">
                    <BaseCheckbox id="check2" styleClassName="sm" />
                  </td>
                  <td class="text-center">첨부파일</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">jpg</td>
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
                <col style="width: 270px" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col" class="text-center">통리 구분</th>
                  <td class="text-center">
                    <div class="searchColumnInputBox wrap">
                      <BaseRadio
                        name="r01"
                        id="r01"
                        label="통"
                        checked
                        styleClassName="sm"
                      />
                      <BaseRadio
                        name="r01"
                        id="r02"
                        label="리"
                        styleClassName="sm"
                      />
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
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>

            <BaseTable
              styleClassName="overflow-y"
              inlineStyle="max-height: 150px;"
            >
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 70px" />
                <col style="width: 100px" />
                <col style="width: auto" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check3" styleClassName="sm" />
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
                    <BaseCheckbox id="check4" styleClassName="sm" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">신청첨부파일</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check5" styleClassName="sm" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" styleClassName="sm" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">dbf,shp,shx</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" styleClassName="sm" />
                  </td>
                  <td class="text-center">4</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">dbf,shp,shx</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" styleClassName="sm" />
                  </td>
                  <td class="text-center">5</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">dbf,shp,shx</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
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
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </template>
            </SubSectionTitle>

            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 60px" />
                <col style="width: 100px" />
                <col style="width: 100px" />
                <col style="width: auto" />
                <col style="width: 100px" />
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
                  <td class="text-center">건물</td>
                  <td class="text-center">출입구</td>
                  <td class="text-center">덕진구_01_manage</td>
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

import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
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
