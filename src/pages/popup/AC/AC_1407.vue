<template>
  <Popup :maxWidth="750" :visible="popupVisible">
    <SectionTitle
      title="검수결과서 - 교량_2"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="row" class="text-center">접수자</th>
              <td class="text-center">정주호</td>
              <th scope="row" class="text-center">오류건수</th>
              <td class="text-center">7건</td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <div class="sectionContainer">
          <section class="sectionBox">
            
            <BaseTable
            
            >
              <colgroup>
                <col style="width: 70px" />
                <col style="width: 400px" />
                <col style="width: 70px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">검수항목</th>
                  <th scope="col" class="text-center">검수결과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="text-center">객체는 누락 없이 잘 등록되어 있는가?</td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="text-center">각 객체의 형상이 지침의 준수를 따르고 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3</td>
                  <td class="text-center">각 객체의 시종점 위치가 도로의 분기 및 합류하는 지점을 고려하여 구축되어 있는가? 
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4</td>
                  <td class="text-center">도면이나 지침을 따라 기입 가능한 객체 속성들이 누락없이 입력되어 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5</td>
                  <td class="text-center">시종점 위치가 도로의 분기, 합류 지점 등을 고려하여 구축되어 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6</td>
                  <td class="text-center">지역좌표계로 정의되어 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7</td>
                  <td class="text-center">행경경계를 통과하는 경우 (기본도)행정경계시군구의 경계면을 따라 분절되어 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="text-center">기초간격 및 기초번호가 등간격 및 대칭으로 구축되어 있는가?</td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">9</td>
                  <td class="text-center">기초간격의 기초번호가 좌우홀짝 원칙을 준수하여 입력되어 있는가?
                  </td>
                  <td class="text-center">  
                    <BaseCheckbox id="check1"/>
                  </td>
                </tr>
              </tbody>
            </BaseTable>
          </section>
        </div>
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'


const popupVisible = ref(true)
</script>
