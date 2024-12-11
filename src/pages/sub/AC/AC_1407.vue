<!-- 행정구역명 축약관리 -->

<template>
  <SubRoot>
    <SectionTitle  :right="true">
          <template v-slot:right>
            <BaseButton label="초기화" styleClassName="md pd-sm bdGray" />
            <BaseButton label="수정" styleClassName="md pd-sm bdGray" />
            <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
            <BaseButton label="검수항목 관리" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>
    <div class="sectionTitleGroup">
      <h3 class="sectionTitle">검수서식 목룍</h3>
    </div>
  
    <section class="sectionContainer cg40 half list">
      <div class="sectionBox">
        <BaseTable style="overflow-y: auto; height: 403px">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 120px" />
            <col style="width: 537px" />
            <col style="width: 120px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">데이터유형</th>
              <th scope="col" class="text-center">검수서식명</th>
              <th scope="col" class="text-center">검수서식코드</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">장소지능정보</td>
              <td class="text-center">장소지능정보 검수서식v1.1</td>
              <td class="text-center">07002</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
      <div class="sectionBox">
        <BaseTable styleClassName="rowType join">
          <colgroup>
            <col style="width: 300px" />
            <col style="width: 472px" />
            <col style="width: 300px" />
            <col style="width: 472px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">데이터유형</th>
              <td>
                <BaseSelect
                  initialSelectValue="실폭도로"
                  :options="selectList"
                />
              </td>
              <th scope="col" class="text-center">검수서식코드</th>
              <td>
                <BaseInput inputType="text" inputValue="06001" readonly/>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center" >검수서식명</th>
              <td colspan="3">
                <BaseInput inputType="text" inputValue="" placeholder="실폭도로 검수서식 v1.0" readonly/>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center" >검수서식설명</th>
              <td colspan="3">
                <BaseInput inputType="text" inputValue="06001" placeholder="실폭도로 검수서식 최초 서식" readonly/>
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable
            styleClassName="overflow-y" inlineStyle="max-height: 250px"
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
      </div>
    </section>
  </SubRoot>
</template>

<script setup>
defineOptions({
  name: 'SubTemp1',
})

import { ref } from 'vue'

import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue';

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
