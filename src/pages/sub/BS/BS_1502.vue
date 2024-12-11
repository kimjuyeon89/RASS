<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">등일일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
              <span class="betweenText">~</span>
              <BaseInput
                inputType="date"
                inputValue=""
                styleClassName="hasCalendar"
              >
                <template v-slot:prepend>
                  <button type="button" class="btnCalendar">
                    <span class="hidden">달력</span>
                  </button>
                </template>
              </BaseInput>
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
        <SectionTitle title="목록" :right="true">
          <template v-slot:right>
            <Result unit="개" :count="999" />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 202px;">
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 60px" />
            <col style="width: auto" />
            <col style="width: 250px" />
            <col style="width: 250px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">순번</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">등록일자</th>
              <th scope="col" class="text-center">작성자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">Test.csv</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check7" />
              </td>
              <td class="text-center">6</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check8" />
              </td>
              <td class="text-center">7</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">8</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check10" />
              </td>
              <td class="text-center">9</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check11" />
              </td>
              <td class="text-center">10</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        >
          <template v-slot:right>
            <PageMove :inputValue="pageMoveValue" :total="total" />
          </template>
        </Pagination>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="상세"
          :right="true"
          descText="한번에 10개파일씩 다운로드 받을 수 있습니다."
          :descRight="true"
          :descState="true"
        >
          <template v-slot:descRight>
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdBlue i-download"
            />
          </template>
          <template v-slot:right>
            <Result unit="개" :count="999" />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 202px;">
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 60px" />
            <col style="width: 150px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check12" />
              </th>
              <th scope="col" class="text-center">순번</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">CLSCD</th>
              <th scope="col" class="text-center">FILEID</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check13" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center"></td>
              <td class="text-center">준비중</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check14" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center">다운로드 완료</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check15" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check16" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check17" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check18" />
              </td>
              <td class="text-center">6</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check19" />
              </td>
              <td class="text-center">7</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check20" />
              </td>
              <td class="text-center">8</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check21" />
              </td>
              <td class="text-center">9</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check22" />
              </td>
              <td class="text-center">10</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center">123</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group2.currentPage"
          :totalPages="pagination.group2.totalPages"
        >
          <template v-slot:right>
            <PageMove :inputValue="pageMoveValue2" :total="total2" />
          </template>
        </Pagination>
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import Result from '@/components/sub/table/Result.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
})

const pageMoveValue = ref(5)
const total = ref(22)

const pageMoveValue2 = ref(5)
const total2 = ref(22)
</script>
