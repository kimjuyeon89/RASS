<template>
  <Popup :maxWidth="880" :visible="popupVisible">
    <SectionTitle
      title="과거측량이력 및 기준점"
      titleIcon="chart"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection double">
        <BaseTable>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 90px" />
            <col style="width: 90px" />
            <col style="width: 146px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 130px" />
            <col style="width: 110px" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">측량일자</th>
              <th scope="col" class="text-center">측량종목</th>
              <th scope="col" class="text-center">측량소재지</th>
              <th scope="col" class="text-center">측량팀장</th>
              <th scope="col" class="text-center">협의구분</th>
              <th scope="col" class="text-center">원점</th>
              <th scope="col" class="text-center">측량파일 다운</th>
            </tr>
          </thead>

          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">20220104</td>
              <td class="text-center">분할측량</td>
              <td class="text-center">경천면가천리226</td>
              <td class="text-center">최**</td>
              <td class="text-center">비협의</td>
              <td class="text-center">원점</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnTableDownload i-download-gray bdGray"
                  hiddeText="다운로드"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">20220104</td>
              <td class="text-center">분할측량</td>
              <td class="text-center">경천면가천리226</td>
              <td class="text-center">최**</td>
              <td class="text-center">비협의</td>
              <td class="text-center">원점</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnTableDownload i-download-gray bdGray"
                  hiddeText="다운로드"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">20220104</td>
              <td class="text-center">분할측량</td>
              <td class="text-center">경천면가천리226</td>
              <td class="text-center">최**</td>
              <td class="text-center">비협의</td>
              <td class="text-center">원점</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnTableDownload i-download-gray bdGray"
                  hiddeText="다운로드"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">20220104</td>
              <td class="text-center">분할측량</td>
              <td class="text-center">경천면가천리226</td>
              <td class="text-center">최**</td>
              <td class="text-center">비협의</td>
              <td class="text-center">원점</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnTableDownload i-download-gray bdGray"
                  hiddeText="다운로드"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">20220104</td>
              <td class="text-center">분할측량</td>
              <td class="text-center">경천면가천리226</td>
              <td class="text-center">최**</td>
              <td class="text-center">비협의</td>
              <td class="text-center">원점</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnTableDownload i-download-gray bdGray"
                  hiddeText="다운로드"
                />
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </section>

      <section class="popupSection double">
        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SubSectionTitle
              title="지적측량 기준점"
              :right="true"
              titleType="dot"
            />

            <div class="sectionInnerItem h-auto">
              <BaseTable>
                <colgroup>
                  <col style="width: 127px" />
                  <col style="width: 127px" />
                  <col style="width: 127px" />
                </colgroup>

                <thead>
                  <tr>
                    <th scope="col" class="text-center">번호</th>
                    <th scope="col" class="text-center">X좌표</th>
                    <th scope="col" class="text-center">Y좌표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                </tbody>
              </BaseTable>
            </div>
          </div>

          <div class="sectionInnerBox">
            <SubSectionTitle
              title="성과수정 기준점"
              :right="true"
              titleType="dot"
            />

            <div class="sectionInnerItem h-auto">
              <BaseTable>
                <colgroup>
                  <col style="width: 127px" />
                  <col style="width: 127px" />
                  <col style="width: 127px" />
                </colgroup>

                <thead>
                  <tr>
                    <th scope="col" class="text-center">번호</th>
                    <th scope="col" class="text-center">X좌표</th>
                    <th scope="col" class="text-center">Y좌표</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                  <tr>
                    <td class="text-center">1244</td>
                    <td class="text-center">382509.13</td>
                    <td class="text-center">224455.09</td>
                  </tr>
                </tbody>
              </BaseTable>
            </div>
          </div>
        </div>
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'

import BaseTable from '@/components/base/BaseTable.vue'

import Pagination from '@/components/sub/paging/Pagination.vue'

const popupVisible = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})
</script>
