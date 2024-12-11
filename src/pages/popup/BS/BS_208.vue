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
            <BaseTable>
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
                  <td class="text-center">도로구간</td>
                  <td class="text-center">1</td>
                  <td class="text-center">298</td>
                </tr>
                <tr>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">1</td>
                  <td class="text-center">308</td>
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
                <col style="width: 70px" />
                <col style="width: 100px" />
                <col style="width: 150px" />
                <col style="width: auto" />
                <col style="width: 100px" />
                <col style="width: 150px" />
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
                  <th scope="col" class="text-center">접수관리번호</th>
                  <th scope="col" class="text-center">파일명</th>
                  <th scope="col" class="text-center">파일확장자</th>
                  <th scope="col" class="text-center">등록일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check2" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">00000000000000000</td>
                  <td class="text-center">도로구간 현황도</td>
                  <td class="text-center">pdf</td>
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
                <col style="width: 300px" />
                <col style="width: 150px" />
                <col style="width: 300px" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="col" class="text-center">작성방법</th>
                  <td>
                    <BaseInput inputType="text" inputValue="" />
                  </td>
                  <th scope="col" class="text-center">도로길이</th>
                  <td>
                    <div class="tableBox">
                      <BaseInput inputType="text" inputValue="" />
                      <p class="tableUnit">(km)</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="col" class="text-center">시점</th>
                  <td>
                    <BaseInput inputType="text" inputValue="" />
                  </td>
                  <th scope="col" class="text-center">종점</th>
                  <td>
                    <BaseInput inputType="text" inputValue="" />
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

            <BaseTable>
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
                    <BaseCheckbox id="check3" />
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
                    <BaseCheckbox id="check4" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">준공도면</td>
                  <td class="text-center">도로구간 현황도</td>
                  <td class="text-center">jpg</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check5" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">도로구간</td>
                  <td class="text-center">부산광역시_298_manage</td>
                  <td class="text-center">shx,shp,dbf</td>
                  <td class="text-center">2024-07-09 11:00:00</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">부산광역시_308_rw</td>
                  <td class="text-center">shx,shp,dbf</td>
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
                <col style="width: 100px" />
                <col style="width: auto" />
                <col style="width: 100px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check7" />
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
                    <BaseCheckbox id="check8" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">장소지능정보</td>
                  <td class="text-center">연결선</td>
                  <td class="text-center">1</td>
                  <td class="text-center">덕진구_01entrc</td>
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
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'

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
