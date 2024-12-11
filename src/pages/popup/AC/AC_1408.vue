<template>
  <Popup :maxWidth="750" :visible="popupVisible">
    <SectionTitle
      title="육안검수 검수항목 관리"
      titleIcon="shield"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection" >
    
        <div class="popupSectonDescArea">
              <p class="popupSectionDescText"></p>
              <div class="popupSectionDescGroup" style="margin-bottom: 10px">
                <BaseButton label="초기화" styleClassName="md bdGray" />
                <BaseButton label="삭제" styleClassName="md bdGray" />
                <BaseButton label="수정" styleClassName="md bdGray" />
                <BaseButton label="등록" styleClassName="md bgBlue" />
              </div>
            </div>
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="row" class="text-center">데이터유형</th>
              <td class="text-center">
                <BaseSelect
              initialSelectValue="실폭도로"
              :options="selectList"
            />
              </td>
              <th scope="row" class="text-center">검수항목코드</th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="" readonly/>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검수항목명</th>
              <td class="text-center" colspan="3">
                <BaseInput inputType="text" inputValue="객체는 누락없이 잘 등록되어 있는가?"/>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <div class="sectionContainer">
          <section class="sectionBox">
            
            <BaseTable
            styleClassName="overflow-y" inlineStyle="max-height: 200px"
            >
              <colgroup>
                <col style="width: 70px" />
                <col style="width: 70px" />
                <col style="width: 120px" />
                <col style="width: 120px" />
                <col style="width: 400px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check1"/>
                  </th>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">데이터유형</th>
                  <th scope="col" class="text-center">검수항목코드</th>
                  <th scope="col" class="text-center">검수항목명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center"><BaseCheckbox id="check2"/></td>
                  <td class="text-center">1</td>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">06001</td>
                  <td class="text-center">객체는 누락 없이 잘 등록되어 있는가?</td>
                </tr>
                <tr>
                  <td class="text-center"><BaseCheckbox id="check2"/></td>
                  <td class="text-center">1</td>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">06001</td>
                  <td class="text-center">객체는 누락 없이 잘 등록되어 있는가?</td>
                </tr>
                <tr>
                  <td class="text-center"><BaseCheckbox id="check2"/></td>
                  <td class="text-center">1</td>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">06001</td>
                  <td class="text-center">객체는 누락 없이 잘 등록되어 있는가?</td>
                </tr>
                <tr>
                  <td class="text-center"><BaseCheckbox id="check2"/></td>
                  <td class="text-center">1</td>
                  <td class="text-center">실폭도로</td>
                  <td class="text-center">06001</td>
                  <td class="text-center">객체는 누락 없이 잘 등록되어 있는가?</td>
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
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const popupVisible = ref(true)
</script>
