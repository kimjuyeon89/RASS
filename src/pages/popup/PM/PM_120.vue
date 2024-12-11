<template>
  <Popup :maxWidth="940" :visible="popupVisible">
    <SectionTitle
      title="현장확인결과서 레포트"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <CenterTitle title="국가지점번호 현장 확인 목록" />

      <BaseTable styleClassName="sm overflow-y" inlineStyle="max-height: 642px">
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 130px" />
          <col style="width: auto" />
          <col style="width: 113px" />
          <col style="width: 113px" />
          <col style="width: 113px" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col" class="text-center">순번</th>
            <th scope="col" class="text-center">국가지점번호</th>
            <th scope="col" class="text-center">소재지</th>
            <th scope="col" class="text-center">X(N)좌표</th>
            <th scope="col" class="text-center">Y(E)좌표</th>
            <th scope="col" class="text-center">검증일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">1</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">6</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">7</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">8</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">9</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">10</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">11</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">12</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">13</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">14</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">15</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">16</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
          <tr>
            <td class="text-center">17</td>
            <td class="text-center">다사45834977</td>
            <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
            <td class="text-center">1949773.264</td>
            <td class="text-center">945839.763</td>
            <td class="text-center">2016-10-06</td>
          </tr>
        </tbody>
      </BaseTable>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import CenterTitle from '@/components/popup/CenterTitle.vue'

const popupVisible = ref(true)
</script>
