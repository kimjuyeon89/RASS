<template>
  <BaseTab>
    <template v-slot:tabItem>
      <BaseTabItem :data="tabs1" v-model="current1" />
    </template>

    <template v-slot:tabContent>
      <BaseTabContent :current="current1" name="목록등록">
        <section class="sectionContainer">
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
                  <BaseInput inputType="text" inputValue="" readonly />
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-center">검수항목명</th>
                <td class="text-center" colspan="3">
                  <BaseInput
                    inputType="text"
                    inputValue="객체는 누락없이 잘 등록되어 있는가?"
                  />
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </section>
        
        <section class="sectionContainer">
          <div class="searchArea">
            <div class="searchColumn">
              <span class="searchLabel">지역</span>

              <BaseSelect
                initialSelectValue="전체"
                :options="selectList"
                inlineStyle="min-width: 110px;"
              />
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList"
                inlineStyle="min-width: 110px;"
              />
              <BaseSelect
                initialSelectValue="선택"
                :options="selectList"
                inlineStyle="min-width: 110px;"
              />
            </div>
            <div class="searchColumn">
              <span class="searchLabel">데이터명</span>
              <BaseInput inputType="text" inputValue="" />
            </div>
            <div class="searchColumn">
              <span class="searchLabel">등록일자</span>
              <div class="searchColumnInputBox">
                <BaseInput
                  inputType="date"
                  inputValue="2024-05-09"
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
                  inputValue="2024-05-09"
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
        </section>
        <!-- sectionContainer -->
        <section class="sectionContainer col">
          <div class="sectionBox">
            <div class="sectionTitleGroup">
              <h3 class="sectionTitle">검수 대상 정보</h3>
            </div>
            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 150px" />
                <col style="width: 537px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">데이터명</th>
                  <th scope="col" class="text-center">시군구명</th>
                  <th scope="col" class="text-center">기준수량</th>
                  <th scope="col" class="text-center">등록일자</th>
                  <th scope="col" class="text-center">등록자</th>
                  <th scope="col" class="text-center">등록파일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">24/10/30</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">등록파일</td>
                </tr>
                <tr>
                  <td class="text-center">2</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">24/10/30</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">등록파일</td>
                </tr>
                <tr>
                  <td class="text-center">3</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">24/10/30</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">등록파일</td>
                </tr>
                <tr>
                  <td class="text-center">4</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">24/10/30</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">등록파일</td>
                </tr>
                <tr>
                  <td class="text-center">5</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">24/10/30</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">등록파일</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue" :total="total" />
              <PageResult :resultSelectList="resultSelectList" :count="2100" />
            </template>
          </Pagination>
        </section>
        <!-- //sectionContainer -->
      </BaseTabContent>
      <BaseTabContent :current="current1" name="본부검수">
        <div class="sectionTitleGroup">
          <div class="sectionDescriptionArea">
            <p class="sectionDescription">본부검수 목록을 조회합니다.</p>
          </div>
        </div>
        <div class="searchArea">
          <!-- searchColumnRowContainer -->
          <div class="searchColumnRowContainer">
            <!-- searchColumnRow -->
            <div class="searchColumnRow">
              <div class="searchColumn">
                <span class="searchLabel">데이터명</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">검수자</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
            </div>
            <!-- //searchColumnRow -->
            <!-- searchColumnRow -->
            <div class="searchColumnRow" style="padding-right: 119px">
              <div class="searchColumn">
                <span class="searchLabel">지역</span>
                <BaseSelect initialSelectValue="전체" :options="selectList" />
                <BaseSelect initialSelectValue="전체" :options="selectList" />
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </div>

              <div class="searchColumn">
                <span class="searchLabel">진행상태</span>
                <BaseSelect initialSelectValue="전체" :options="selectList" />
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
            <div class="sectionTitleGroup">
              <h3 class="sectionTitle">본부검수대상 정보</h3>
            </div>
            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 150px" />
                <col style="width: 450px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">데이터명</th>
                  <th scope="col" class="text-center">시군구명</th>
                  <th scope="col" class="text-center">기준수량</th>
                  <th scope="col" class="text-center">검수자</th>
                  <th scope="col" class="text-center">검수상태</th>
                  <th scope="col" class="text-center">본사검수결과</th>
                  <th scope="col" class="text-center">본사검수의견서</th>
                  <th scope="col" class="text-center">보완</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">11</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">10</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">9</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue" :total="total" />
              <PageResult :resultSelectList="resultSelectList" :count="2100" />
            </template>
          </Pagination>
        </section>
        <!-- //sectionContainer -->
      </BaseTabContent>

      <BaseTabContent :current="current1" name="본사검수">
        <div class="sectionTitleGroup">
          <div class="sectionDescriptionArea">
            <p class="sectionDescription">본수검수 목록을 조회합니다.</p>
          </div>
        </div>
        <div class="searchArea">
          <!-- searchColumnRowContainer -->
          <div class="searchColumnRowContainer">
            <!-- searchColumnRow -->
            <div class="searchColumnRow">
              <div class="searchColumn">
                <span class="searchLabel">데이터명</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">검수자</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">검수자</span>
                <BaseInput inputType="text" inputValue="" />
              </div>
            </div>
            <!-- //searchColumnRow -->
            <!-- searchColumnRow -->
            <div class="searchColumnRow" style="padding-right: 119px">
              <div class="searchColumn">
                <span class="searchLabel">시군구</span>
                <BaseSelect initialSelectValue="전체" :options="selectList" />
                <BaseSelect initialSelectValue="전체" :options="selectList" />
                <BaseSelect initialSelectValue="선택" :options="selectList" />
                <BaseCheckbox id="check1" :isLabel="true" label="(구)" />
              </div>

              <div class="searchColumn">
                <span class="searchLabel">진행상태</span>
                <BaseSelect initialSelectValue="전체" :options="selectList" />
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
            <div class="sectionTitleGroup">
              <h3 class="sectionTitle">본사검수대상 정보</h3>
            </div>
            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 150px" />
                <col style="width: 450px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">데이터명</th>
                  <th scope="col" class="text-center">시군구명</th>
                  <th scope="col" class="text-center">기준수량</th>
                  <th scope="col" class="text-center">검수자</th>
                  <th scope="col" class="text-center">검수상태</th>
                  <th scope="col" class="text-center">본사검수결과</th>
                  <th scope="col" class="text-center">본사검수의견서</th>
                  <th scope="col" class="text-center">보완</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">11</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">10</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">9</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">파일등록아이콘</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue" :total="total" />
              <PageResult :resultSelectList="resultSelectList" :count="2100" />
            </template>
          </Pagination>
        </section>
        <!-- //sectionContainer -->
      </BaseTabContent>

      <BaseTabContent :current="current1" name="완료">
        <div class="sectionTitleGroup">
          <div class="sectionDescriptionArea">
            <p class="sectionDescription">검수결과 목록을 조회합니다.</p>
          </div>
        </div>
        <div class="searchArea">
          <div class="searchColumnRowContainer">
            <div class="searchColumnRow">
              <div class="searchColumn">
                <span class="searchLabel">데이터명</span>
                <div class="searchColumnInputBox">
                  <div class="baseTextFieldWrapper">
                    <input
                      type="text"
                      class="baseTextField baseInput"
                      value=""
                      style="max-width: 180px"
                    />
                  </div>
                </div>
              </div>
              <div class="searchColumn">
                <span class="searchLabel">본부검수대상</span>
                <BaseCheckbox id="check2" />
              </div>
              <div class="searchColumn">
                <span class="searchLabel">본사 검수대상</span>
                <BaseCheckbox id="check3" />
              </div>
              <button type="button" class="baseButton md bgGray">
                <span>조회</span>
              </button>
            </div>
            <!-- //searchColumnRow -->
          </div>
          <!-- //searchColumnRowContainer -->
        </div>

        <!-- sectionContainer -->
        <section class="sectionContainer col">
          <div class="sectionBox">
            <div class="sectionTitleGroup">
              <h3 class="sectionTitle">검수결과 정보</h3>
            </div>
            <BaseTable>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 150px" />
                <col style="width: 537px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
                <col style="width: 150px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <span>순번</span>
                  </th>
                  <th scope="col" class="text-center">데이터명</th>
                  <th scope="col" class="text-center">시군구명</th>
                  <th scope="col" class="text-center">기준수량</th>
                  <th scope="col" class="text-center">검수자</th>
                  <th scope="col" class="text-center">검수상태</th>
                  <th scope="col" class="text-center">본사검수결과</th>
                  <th scope="col" class="text-center">본사검수의견서</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">11</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">10</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">9</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                </tr>
                <tr>
                  <td class="text-center">8</td>
                  <td class="text-center">토평교</td>
                  <td class="text-center">제주특별자치도 제주시</td>
                  <td class="text-center">7</td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">완료</td>
                  <td class="text-center">팝업아이콘</td>
                  <td class="text-center">팝업아이콘</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue" :total="total" />
              <PageResult :resultSelectList="resultSelectList" :count="2100" />
            </template>
          </Pagination>
        </section>
        <!-- //sectionContainer -->
      </BaseTabContent>
    </template>
  </BaseTab>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'
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
  group3: {
    currentPage: 1,
    totalPages: 10,
  },
  group4: {
    currentPage: 1,
    totalPages: 10,
  },
  group5: {
    currentPage: 1,
    totalPages: 10,
  },
  group6: {
    currentPage: 1,
    totalPages: 10,
  },
  group7: {
    currentPage: 1,
    totalPages: 10,
  },
  group8: {
    currentPage: 1,
    totalPages: 10,
  },
  group9: {
    currentPage: 1,
    totalPages: 10,
  },
})

const current1 = ref('목록등록')

const tabs1 = [
  {
    id: 1,
    name: '목록등록',
  },
  {
    id: 2,
    name: '본부검수',
  },
  {
    id: 3,
    name: '본사검수',
  },
  {
    id: 4,
    name: '완료',
  },
]

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
