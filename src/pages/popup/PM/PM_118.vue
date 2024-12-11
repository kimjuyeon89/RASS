<template>
  <Popup :maxWidth="1280" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 결과통보서 파일등록"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <SubSectionTitle
        :descState="true"
        descText="총계정별 지점번호 검색을 통해 전자결재 일괄요청 및 통보서 일괄 다운로드를 제공합니다."
      />

      <div class="searchArea">
        <!-- searchColumnRowContainer -->
        <div class="searchColumnRowContainer">
          <!-- searchColumnRow -->
          <div class="searchColumnRow col3more">
            <div class="searchColumn">
              <span class="searchLabel">처리지사</span>

              <BaseSelect initialSelectValue="전체" :options="selectList" />
              <BaseSelect initialSelectValue="전체" :options="selectList" />
              <BaseSelect initialSelectValue="전체" :options="selectList" />

              <BaseCheckbox id="check1" label="(구)" :isLabel="true" />
            </div>
            <div class="searchColumn">
              <span class="searchLabel">회계년도</span>

              <BaseSelect
                initialSelectValue="전체"
                :options="selectList"
                inlineStyle="max-width: 260px;"
              />
            </div>
          </div>
          <!-- //searchColumnRow -->

          <div class="searchColumnRow col3more">
            <div class="searchColumn">
              <span class="searchLabel">계약일자</span>
              <div class="searchColumnInputBox">
                <BaseInput
                  inputType="date"
                  styleClassName="hasCalendar"
                  inputValue="2024-05-09"
                  inlineStyle="width: 170px"
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
                  inlineStyle="width: 170px"
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
        </div>
        <!-- //searchColumnRowContainer -->
      </div>

      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 60px" />
          <col style="width: 160px" />
          <col style="width: 160px" />
          <col style="width: auto" />
          <col style="width: 160px" />
          <col style="width: 200px" />
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
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />

      <section class="popupSection">
        <SubSectionTitle
          :descState="true"
          :descBox="true"
          :descGroupData="descGroupData"
          :right="true"
        >
          <template v-slot:right>
            <BaseButton
              styleClassName="bgBlue md pd-sm"
              label="전자결재 일괄요청"
            />
            <BaseButton
              styleClassName="bgAqua md pd-sm"
              label="통보서 일괄 다운로드"
            />
          </template>
        </SubSectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 60px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
            <col style="width: 200px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
            <col style="width: 112px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check2" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">일련번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">전자결재 요청일자</th>
              <th scope="col" class="text-center">전자결재 승인일자</th>
              <th scope="col" class="text-center">KAIS 요청여부</th>
              <th scope="col" class="text-center">KAIS 요청일자</th>
              <th scope="col" class="text-center">검증결과 통보서</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">112920</td>
              <td class="text-center">나라73250452</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">N</td>
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
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">112920</td>
              <td class="text-center">나라73250452</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">N</td>
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
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">112920</td>
              <td class="text-center">나라73250452</td>
              <td class="text-center">전라남도 진도군 진도읍동외리1-1</td>
              <td class="text-center">결재요청</td>
              <td class="text-center">2024-06-25</td>
              <td class="text-center">-</td>
              <td class="text-center">N</td>
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
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group2.currentPage"
          :totalPages="pagination.group2.totalPages"
        />
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const popupVisible = ref(true)

/* paging */
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

const descGroupData = [
  {
    title: '* 전자결재:',
    text: '전자결재 대상 지점번호만 진행 처리됩니다.',
  },
  {
    title: '다운로드:',
    text: '통보서가 생성된 지점번호만 다운로드 가능합니다. (1회 10개 제한)',
  },
]
</script>
