<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow col3moreSmall">
          <div class="searchColumn">
            <span class="searchLabel">처리지사</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="선택" :options="selectList" />

            <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">회계년도</span>

            <BaseSelect initialSelectValue="2017" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">신청일자</span>
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

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="총계정정보" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 160px" />
            <col style="width: 160px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">총계정</th>
              <th scope="col" class="text-center">본부</th>
              <th scope="col" class="text-center">지사</th>
              <th scope="col" class="text-center">계약명</th>
              <th scope="col" class="text-center">계약일자</th>
              <th scope="col" class="text-center">집행기간</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">3</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">4</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">5</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">6</td>
              <td class="text-center">6</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">7</td>
              <td class="text-center">7</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">8</td>
              <td class="text-center">8</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">9</td>
              <td class="text-center">9</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
            </tr>
            <tr>
              <td class="text-center">10</td>
              <td class="text-center">10</td>
              <td class="text-center">전북지역본부</td>
              <td class="text-center">진안장수지사</td>
              <td class="text-center">
                2016년 백두대간 등산로정비사업(기번3)국가기점번호 측량신청
              </td>
              <td class="text-center">2024-06-02</td>
              <td class="text-center">2016-10-06~2017-01-31</td>
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
        </template>
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="측량정보" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">COS 접수 번호</th>
              <th scope="col" class="text-center">소관청</th>
              <th scope="col" class="text-center">대표소재지</th>
              <th scope="col" class="text-center">접수일자</th>
              <th scope="col" class="text-center">접수량</th>
              <th scope="col" class="text-center">진행상태</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">영월군</td>
              <td class="text-center">영월읍흥월리 산38</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">4</td>
              <td class="text-center">완료</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">2</td>
              <td class="text-center">영월군</td>
              <td class="text-center">영월읍흥월리 산38</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">4</td>
              <td class="text-center">완료</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">3</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">4</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">5</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group2.currentPage"
        :totalPages="pagination.group2.totalPages"
      />
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="상세 정보" />

        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 512px" />
            <col style="width: 270px" />
            <col style="width: 512px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">의뢰인명</th>
              <td class="text-left">영월군산림조합</td>
              <th scope="row" class="text-center">사업자번호</th>
              <td class="text-left">1328201199</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">의뢰인구분</th>
              <td class="text-left"></td>
              <th scope="row" class="text-center">영월군</th>
              <td class="text-left">김준기</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">이메일</th>
              <td class="text-left">yongwol@nfcf.or.kr</td>
              <th scope="row" class="text-center">업태</th>
              <td class="text-left">양묘및육림,여수신,토목</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">주소</th>
              <td class="text-left">
                강원도 영월군 영월읍단종로33번길50 영월군산림조합
              </td>
              <th scope="row" class="text-center">업종</th>
              <td class="text-left">임업,금융,건설</td>
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
import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

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

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const pageMoveValue = ref(5)
const total = ref(22)
</script>
