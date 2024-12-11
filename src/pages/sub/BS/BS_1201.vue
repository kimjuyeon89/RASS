<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3more">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">이전좌표</span>

            <div class="searchColumnInputGroup">
              <div class="searchColumnInputBox">
                <span class="inputBoxLabel">X :</span>
                <BaseInput inputType="text" inputValue="" />
              </div>

              <div class="searchColumnInputBox">
                <span class="inputBoxLabel">Y :</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
            </div>
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">고정점여부</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[2].options"
              inlineStyle="width: 184px"
            />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer cg40 wd410">
      <div class="sectionBox">
        <SectionTitle title="정합계수 현황" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 160px" />
            <col style="width: 120px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">행정구역</th>
              <th scope="col" class="text-center">정합계수 물량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </div>

      <div class="sectionBox">
        <SectionTitle title="상세정보" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 60px" />
            <col style="width: 80px" />
            <col style="width: 160px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 90px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">작업구분</th>
              <th scope="col" class="text-center">행정구역</th>
              <th scope="col" class="text-center">이전좌표_X</th>
              <th scope="col" class="text-center">이전좌표_Y</th>
              <th scope="col" class="text-center">이후좌표_X</th>
              <th scope="col" class="text-center">이후좌표_Y</th>
              <th scope="col" class="text-center">고정점</th>
              <th scope="col" class="text-center">등록자</th>
              <th scope="col" class="text-center">등록일자</th>
              <th scope="col" class="text-center">접수번호</th>
              <th scope="col" class="text-center">등록구분</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">신규</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">N</td>
              <td class="text-center">정슬기</td>
              <td class="text-center">2021-10-07</td>
              <td class="text-center">3819</td>
              <td class="text-center">등록</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">신규</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">N</td>
              <td class="text-center">정슬기</td>
              <td class="text-center">2021-10-07</td>
              <td class="text-center">3819</td>
              <td class="text-center">등록</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">신규</td>
              <td class="text-center">경상북도 성주군</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">123</td>
              <td class="text-center">N</td>
              <td class="text-center">정슬기</td>
              <td class="text-center">2021-10-07</td>
              <td class="text-center">3819</td>
              <td class="text-center">등록</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group2.currentPage"
          :totalPages="pagination.group2.totalPages"
        />
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 3,
  },
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
})

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
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
