<template>
  <BaseTab styleClassName="hasTabLength7">
    <template v-slot:tabItem>
      <BaseTabItem :data="tabs1" v-model="current1" />
    </template>

    <template v-slot:tabContent>
      <BaseTabContent :current="current1" name="KAIS-연계 로그">
        <div class="searchArea">
          <!-- searchColumnRowContainer -->
          <div class="searchColumnRowContainer">
            <!-- searchColumnRow -->
            <div class="searchColumnRow col3moreSmall">
              <div class="searchColumn">
                <span class="searchLabel">로그내용</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">로그정보</span>
                <BaseSelect
                  initialSelectValue="전체"
                  :options="selectList[0].options"
                />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">성공여부</span>
                <BaseSelect
                  initialSelectValue="전체"
                  :options="selectList[1].options"
                />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">검색내용</span>
                <div class="searchColumnInputBox">
                  <BaseInput
                    inputType="date"
                    styleClassName="hasCalendar"
                    inputValue="2024-05-09"
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
                    styleClassName="hasCalendar"
                    inputValue="2024-05-09"
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

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 240px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: auto" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">연계 로그 ID</th>
              <th scope="col" class="text-center">연계 정보</th>
              <th scope="col" class="text-center">연계로그내용</th>
              <th scope="col" class="text-center">요청일시</th>
              <th scope="col" class="text-center">처리시간</th>
              <th scope="col" class="text-center">성공여부</th>
              <th scope="col" class="text-center">오류로그내용</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">10000082</td>
              <td class="text-center">정합계수_전송(RASS->KAIS)</td>
              <td class="text-center">연결 오류</td>
              <td class="text-center">2023-12-03 11:17</td>
              <td class="text-center">0</td>
              <td class="text-center">N</td>
              <td class="text-center">
                SocketTimeoutException :connect timed out
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">10000082</td>
              <td class="text-center">정합계수_전송(RASS->KAIS)</td>
              <td class="text-center">연결 오류</td>
              <td class="text-center">2023-12-03 11:17</td>
              <td class="text-center">0</td>
              <td class="text-center">N</td>
              <td class="text-center">
                SocketTimeoutException :connect timed out
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">10000082</td>
              <td class="text-center">정합계수_전송(RASS->KAIS)</td>
              <td class="text-center">연결 오류</td>
              <td class="text-center">2023-12-03 11:17</td>
              <td class="text-center">0</td>
              <td class="text-center">N</td>
              <td class="text-center">
                SocketTimeoutException :connect timed out
              </td>
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
      </BaseTabContent>
      <BaseTabContent
        :inButton="true"
        :current="current1"
        name="KAIS-네트워크 정보"
        direction="end"
      >
        <template v-slot:button>
          <BaseButton styleClassName="bdGray md pd-sm" label="삭제" />
          <BaseButton styleClassName="bdGray md pd-sm" label="수정" />
          <BaseButton styleClassName="bgBlue md pd-sm" label="등록" />
          <BaseButton
            styleClassName="bgAqua md pd-sm"
            label="단건 네트워크 연결확인"
          />
          <BaseButton
            styleClassName="bdGray md pd-sm i-excel-green"
            label="엑셀출력"
          />
        </template>

        <div class="searchArea">
          <!-- searchColumnRowContainer -->
          <div class="searchColumnRowContainer">
            <!-- searchColumnRow -->
            <div class="searchColumnRow">
              <div class="searchColumn flex1">
                <span class="searchLabel">네트워크 명</span>
                <BaseInput inputType="text" inputValue="" />
              </div>

              <BaseButton label="검색" styleClassName="md bgGray" />
            </div>
            <!-- //searchColumnRow -->
          </div>
          <!-- //searchColumnRowContainer -->
        </div>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 298px" />
            <col style="width: 298px" />
            <col style="width: 298px" />
            <col style="width: 298px" />
            <col style="width: 298px" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">INDEX</span>
              </th>
              <th scope="col" class="text-center">중앙 KAIS</th>
              <th scope="col" class="text-center">192.168.30.251</th>
              <th scope="col" class="text-center">9200</th>
              <th scope="col" class="text-center">2023-12-03 11:17</th>
              <th scope="col" class="text-center">RASS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">중앙 KAIS</td>
              <td class="text-center">192.168.30.251</td>
              <td class="text-center">9200</td>
              <td class="text-center">2023-12-03 11:1Y</td>
              <td class="text-center">RASS</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">중앙 KAIS</td>
              <td class="text-center">192.168.30.251</td>
              <td class="text-center">9200</td>
              <td class="text-center">2023-12-03 11:1Y</td>
              <td class="text-center">RASS</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">중앙 KAIS</td>
              <td class="text-center">192.168.30.251</td>
              <td class="text-center">9200</td>
              <td class="text-center">2023-12-03 11:1Y</td>
              <td class="text-center">RASS</td>
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
      </BaseTabContent>
    </template>
  </BaseTab>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const current1 = ref('KAIS-연계 로그')
const tabs1 = [
  {
    id: 1,
    name: 'KAIS-연계 로그',
  },
  {
    id: 2,
    name: 'KAIS-네트워크 정보',
  },
]

const selectList = ref([
  {
    id: 1,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '성공',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])

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
