<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3more" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[1].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">종류</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[2].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">조사일자</span>

            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">본부</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">구분</span>

            <div class="searchColumnInputBox">
              <BaseRadio name="r01" id="r01" label="시군구별" />
              <BaseRadio name="r01" id="r02" label="시도별" />
              <BaseRadio name="r01" id="r03" label="본부별" />
            </div>
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 100px" />
            <col style="min-width: 100px" />

            <!-- 전체 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 주출입구 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 보조출입구 -->
            <col style="min-width: 100px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" rowspan="2">시도별</th>
              <th scope="col" class="text-center" rowspan="2">시군구별</th>
              <th scope="col" class="text-center" colspan="7">전체</th>
              <th scope="col" class="text-center" colspan="7">주출입구</th>
              <th scope="col" class="text-center">보조출입구</th>
            </tr>
            <tr>
              <!-- 전체 -->
              <th scope="col" class="text-center">검수여부<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 1 -->
              <th scope="col" class="text-center">검수완료<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 2 -->
              <th scope="col" class="text-center">보조출입구</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- 전체 -->
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">5</td>
              <td class="text-center">6</td>
              <td class="text-center">12</td>
              <td class="text-center">23</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">5</td>
              <td class="text-center">6</td>
              <td class="text-center">12</td>
              <td class="text-center">23</td>
              <td class="text-center">0</td>
              <td class="text-center">700.20</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">소계</td>
              <td class="text-center">3</td>
              <td class="text-center">2</td>
              <td class="text-center">5</td>
              <td class="text-center">10</td>
              <td class="text-center">0</td>
              <td class="text-center">82.14</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">3</td>
              <td class="text-center">2</td>
              <td class="text-center">5</td>
              <td class="text-center">10</td>
              <td class="text-center">0</td>
              <td class="text-center">82.14</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">종로구</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center">3</td>
              <td class="text-center">0</td>
              <td class="text-center">65.20</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">2</td>
              <td class="text-center">3</td>
              <td class="text-center">0</td>
              <td class="text-center">65.20</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">중구</td>
              <td class="text-center">2</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">7</td>
              <td class="text-center">0</td>
              <td class="text-center">16.94</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">2</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">7</td>
              <td class="text-center">0</td>
              <td class="text-center">65.20</td>
              <td class="text-center">16.94%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">소계</td>
              <td class="text-center">2</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">7</td>
              <td class="text-center">0</td>
              <td class="text-center">16.94</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">2</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">7</td>
              <td class="text-center">0</td>
              <td class="text-center">16.94</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">인천광역시</td>
              <td class="text-center">소계</td>
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">7</td>
              <td class="text-center">13</td>
              <td class="text-center">0</td>
              <td class="text-center">61.806</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">7</td>
              <td class="text-center">13</td>
              <td class="text-center">0</td>
              <td class="text-center">61.906</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 전체 -->
              <td class="text-center">인천광역시</td>
              <td class="text-center">중구</td>
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">7</td>
              <td class="text-center">13</td>
              <td class="text-center">0</td>
              <td class="text-center">61.806</td>
              <td class="text-center">0.0%</td>

              <!-- 1 -->
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">7</td>
              <td class="text-center">13</td>
              <td class="text-center">0</td>
              <td class="text-center">61.906</td>
              <td class="text-center">0.0%</td>

              <!-- 2 -->
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable styleClassName="overflow-x" tableInlineStyle="width: 1920px">
          <colgroup>
            <col style="min-width: 100px" />
            <col style="min-width: 100px" />

            <!-- 1 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 2 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 3 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />

            <!-- 4 -->
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
            <col style="min-width: 97px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center" rowspan="2">시도별</th>
              <th scope="col" class="text-center" rowspan="2">시군구별</th>
              <th scope="col" class="text-center" colspan="7">주차장출입구</th>
              <th scope="col" class="text-center" colspan="7">동출입구</th>
              <th scope="col" class="text-center" colspan="7">주차장출입구</th>
              <th scope="col" class="text-center" colspan="7">동출입구</th>
            </tr>
            <tr>
              <!-- 1 -->
              <th scope="col" class="text-center">검수여부<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 2 -->
              <th scope="col" class="text-center">검수완료<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 3 -->
              <th scope="col" class="text-center">검수완료<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>

              <!-- 4 -->
              <th scope="col" class="text-center">검수완료<br />(완료)</th>
              <th scope="col" class="text-center">검수여부<br />(반려)</th>
              <th scope="col" class="text-center">검수여부<br />(대기)</th>
              <th scope="col" class="text-center">확인여부<br />(확인)</th>
              <th scope="col" class="text-center">확인여부<br />(확인불가)</th>
              <th scope="col" class="text-center">조사대상</th>
              <th scope="col" class="text-center">진행율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- 1 -->
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">소계</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">종로구</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">중구</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">서울특별시</td>
              <td class="text-center">중구</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">인천광역시</td>
              <td class="text-center">소계</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <!-- 1 -->
              <td class="text-center">인천광역시</td>
              <td class="text-center">중구</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 2 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 3 -->
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>

              <!-- 4 -->
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
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const selectList = ref([
  {
    id: 1,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '2024년',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 5,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
