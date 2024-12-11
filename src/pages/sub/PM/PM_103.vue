<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">처리지사</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="선택" :options="selectList" />

            <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">국가지점번호</span>
            <BaseInput inputType="text" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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

          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">반려여부상태</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 110px" />
            <col style="width: 70px" />
            <col style="width: 220px" />
            <col style="width: 105px" />
            <col style="width: 105px" />
            <col style="width: 105px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 105px" />
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 105px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">등록<br />구분</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">전자결재<br />요청일자</th>
              <th scope="col" class="text-center">전자결재<br />승인일자</th>
              <th scope="col" class="text-center">KAIS<br />요청여부</th>
              <th scope="col" class="text-center">KAIS<br />요청일자</th>
              <th scope="col" class="text-center">KAIS<br />반려요청</th>
              <th scope="col" class="text-center">검증결과<br />통보서</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">관리기관</th>
              <th scope="col" class="text-center">승인여부</th>
              <th scope="col" class="text-center">승인일자</th>
              <th scope="col" class="text-center">승인<br />담당자</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">112958</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">업무</td>
              <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
              <td class="text-center">본부확인요청(결재승인)</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 해남군</td>
              <td class="text-center">Y</td>
              <td class="text-center">-</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">112958</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">업무</td>
              <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
              <td class="text-center">본부확인요청(결재승인)</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 해남군</td>
              <td class="text-center">Y</td>
              <td class="text-center">-</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">112958</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">업무</td>
              <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
              <td class="text-center">본부확인요청(결재승인)</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 해남군</td>
              <td class="text-center">Y</td>
              <td class="text-center">-</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">112958</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">업무</td>
              <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
              <td class="text-center">본부확인요청(결재승인)</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-internet"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 해남군</td>
              <td class="text-center">Y</td>
              <td class="text-center">-</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">112958</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">업무</td>
              <td class="text-center">서울특별시 영등포구 양화동 1-22</td>
              <td class="text-center">본부확인요청(결재승인)</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">-</td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnFile tableInButton"
                  hiddenText="검증결과 통보서"
                >
                  <template v-slot:icon>
                    <i class="ico fill-file"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">
                <BaseButton
                  styleClassName="btnLocation tableInButton"
                  hiddenText="위치조회"
                >
                  <template v-slot:icon>
                    <i class="ico fill-location"></i>
                  </template>
                </BaseButton>
              </td>
              <td class="text-center">전라남도 해남군</td>
              <td class="text-center">Y</td>
              <td class="text-center">-</td>
              <td class="text-center">KAIS 통보</td>
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
        <SectionTitle
          title="KAIS 반려정보"
          descText="KAIS반려정보를 처리한 경우 KAIS 통보전에 KAIS반려처리 결과를 작성 후 내용저장 해주세요. (KAIS통보 전에 처리결과를 작성을 해야 KAIS와 연계 됩니다.)"
          :descRight="true"
          :descState="true"
        />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 200px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
            <col style="width: 136px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">반려요청<br />일련번호</th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">관리기관</th>
              <th scope="col" class="text-center">반려담당자</th>
              <th scope="col" class="text-center">반려일시</th>
              <th scope="col" class="text-center">반려사유</th>
              <th scope="col" class="text-center">반려내용</th>
              <th scope="col" class="text-center">승인여부</th>
              <th scope="col" class="text-center">처리결과</th>
              <th scope="col" class="text-center">처리일시</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">17</td>
              <td class="text-center">112942</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">경기도 화성시</td>
              <td class="text-center"></td>
              <td class="text-center">2024-06-25 15:35:00</td>
              <td class="text-center">통보서의 내용과 불일치</td>
              <td class="text-center">부천시반려</td>
              <td class="text-center">N</td>
              <td class="text-center">처리중</td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
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

      <Pagination
        :currentPage="pagination.group2.currentPage"
        :totalPages="pagination.group2.totalPages"
      >
        <PageMove :inputValue="pageMoveValue2" :total="total2" />
      </Pagination>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="KAIS 반려 처리 결과" :right="true">
          <template v-slot:right>
            <BaseButton label="내용저장" styleClassName="md pd-sm bgBlue" />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 512px" />
            <col style="width: 270px" />
            <col style="width: 512px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" class="text-center">처리결과</th>
              <td>
                <BaseSelect initialSelectValue="처리중" :options="selectList" />
              </td>
              <th scope="row" class="text-center">처리결과내용</th>
              <td>
                <BaseInput placeholder="처리결과 내용 입력" />
              </td>
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

const pageMoveValue2 = ref(5)
const total2 = ref(22)
</script>
