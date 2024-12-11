<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[1].options"
            />

            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[2].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">신청일자</span>
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
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
              inlineStyle="width: 183.5px"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>
            <BaseInput inputType="text" inputValue="" />
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
        <SectionTitle
          :descState="descState"
          descText="※ “상세신청배치도”가 들어온 건은 노란색으로 표시됩니다."
          textColor="text-color-blue2"
        />

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 194px">
          <colgroup>
            <col style="width: 40px" />
            <col style="width: 130px" />
            <col style="width: 130px" />
            <col style="width: 160px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 150px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">시도</th>
              <th scope="col" class="text-center">시군구</th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">신청종류</th>
              <th scope="col" class="text-center">경과일</th>
              <th scope="col" class="text-center">건물용도명</th>
              <th scope="col" class="text-center">도로명 주소</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">신청일자</th>
              <th scope="col" class="text-center">신청메모</th>
              <th scope="col" class="text-center">도로명코드</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">수신</td>
              <td class="text-center">신규</td>
              <td class="text-center">2</td>
              <td class="text-center">아파트 (02001)</td>
              <td class="text-center">1234-5678</td>
              <td class="text-center">칠원동 2467-1234</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">-</td>
              <td class="text-center">123456</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">수신</td>
              <td class="text-center">신규</td>
              <td class="text-center">2</td>
              <td class="text-center">아파트 (02001)</td>
              <td class="text-center">1234-5678</td>
              <td class="text-center">칠원동 2467-1234</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">-</td>
              <td class="text-center">123456</td>
            </tr>
            <tr class="trYellow">
              <td class="text-center">3</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">수신</td>
              <td class="text-center">신규</td>
              <td class="text-center">2</td>
              <td class="text-center">아파트 (02001)</td>
              <td class="text-center">1234-5678</td>
              <td class="text-center">칠원동 2467-1234</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">-</td>
              <td class="text-center">123456</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">경기도</td>
              <td class="text-center">평택시</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">수신</td>
              <td class="text-center">신규</td>
              <td class="text-center">2</td>
              <td class="text-center">아파트 (02001)</td>
              <td class="text-center">1234-5678</td>
              <td class="text-center">칠원동 2467-1234</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">-</td>
              <td class="text-center">123456</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="결과작성" :right="right">
          <template v-slot:right>
            <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 512px" />
            <col style="width: 270px" />
            <col style="width: 512px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">검수보완사유</th>
              <td class="text-center"></td>
              <th scope="col" class="text-center">검수보완내용</th>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="공간정보파일 등록"
          descText="등록할 공간정보파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (확장자shp, shx, dbf가능, 대소문자 구분없음)"
          :descRight="descState"
          :descState="descState"
        >
          <template v-slot:descRight>
            <BaseButton label="파일 선택" styleClassName="md pd-sm bgGray" />
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
            <BaseButton
              label="업로드"
              styleClassName="md pd-sm bdBlue i-upload"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 300px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">동별출입구</td>
              <td class="text-center">덕진구_1000_dongentrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">동별출입구</td>
              <td class="text-center">덕진구_1000_dongentrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">동별출입구</td>
              <td class="text-center">덕진구_1000_dongentrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">주차장출입구</td>
              <td class="text-center">덕진구_1000_dongentrc</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="성과물 공간정보파일 등록 정보" :right="right">
          <template v-slot:right>
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
          </template>
        </SectionTitle>

        <BaseTab styleClassName="hasTabLength7">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="주차장출입구">
              <div>주차장출입구</div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="동출입구">
              <div>동출입구</div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="단지내도로">
              <BaseTable
                styleClassName="overflow-y"
                inlineStyle="max-height: 151px"
              >
                <colgroup>
                  <col style="width: 60px" />
                  <col style="width: 70px" />
                  <col style="width: 478px" />
                  <col style="width: 478px" />
                  <col style="width: 478px" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" class="text-center">
                      <BaseCheckbox id="check6" />
                    </th>
                    <th scope="col" class="text-center"></th>
                    <th scope="col" class="text-center">파일구분</th>
                    <th scope="col" class="text-center">일련번호</th>
                    <th scope="col" class="text-center">파일명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">
                      <BaseCheckbox id="check7" />
                    </td>
                    <td class="text-center">1</td>
                    <td class="text-center">주차장출입구</td>
                    <td class="text-center">02</td>
                    <td class="text-center">경기도_02_parkingentrc</td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                </tbody>
              </BaseTable>
            </BaseTabContent>
          </template>
        </BaseTab>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </div>

      <div class="sectionBox">
        <SectionTitle
          title="신청배치도/성과도면 등록"
          descText="등록할 의뢰현황도/성과도면 파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (파일명이 req_로 시작하면 현황도 파일, 대소문자 구분없음)"
          :descRight="descState"
          :descState="descState"
        >
          <template v-slot:descRight>
            <BaseButton label="파일 선택" styleClassName="md pd-sm bgGray" />
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
            <BaseButton
              label="업로드"
              styleClassName="md pd-sm bdBlue i-upload"
            />
          </template>
        </SectionTitle>

        <BaseTable styleClassName="rowType join">
          <colgroup>
            <col style="width: 300px" />
            <col style="width: 472px" />
            <col style="width: 300px" />
            <col style="width: 472px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">신청배치도</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
              <th scope="col" class="text-center">성과도면</th>
              <td>
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 193px">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 175px" />
            <col style="width: 894px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check8" />
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">확장자</th>
              <th scope="col" class="text-center">용량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">신청배치도</td>
              <td class="text-center">req_칠원</td>
              <td class="text-center">png</td>
              <td class="text-center">388796</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check10" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">칠원동</td>
              <td class="text-center">png</td>
              <td class="text-center">388796</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check11" />
              </td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check12" />
              </td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <div class="sectionBox">
        <SectionTitle title="협의의견 (지자체협의용)">
          <template v-slot:descRight>
            <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">협의내용 구분</th>
              <th scope="col" class="text-center">협의내용</th>
              <th scope="col" class="text-center">발신구분</th>
              <th scope="col" class="text-center">작성기관</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">발신/수신일시</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">상세신청배치도</td>
              <td class="text-center">상세신청배치도입니다</td>
              <td class="text-center">수신</td>
              <td class="text-center">지자체</td>
              <td class="text-center">아무개</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">의견</td>
              <td class="text-center">요청파일이 잘못된 파일로 왔습니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">의견</td>
              <td class="text-center">요청파일이 잘못된 파일로 왔습니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <div class="sectionBox">
        <SectionTitle title="이력조회" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">협의내용 구분</th>
              <th scope="col" class="text-center">협의내용</th>
              <th scope="col" class="text-center">발신구분</th>
              <th scope="col" class="text-center">작성기관</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">발신/수신일시</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">상세신청배치도</td>
              <td class="text-center">상세신청배치도입니다</td>
              <td class="text-center">수신</td>
              <td class="text-center">지자체</td>
              <td class="text-center">아무개</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">의견</td>
              <td class="text-center">요청파일이 잘못된 파일로 왔습니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">의견</td>
              <td class="text-center">요청파일이 잘못된 파일로 왔습니다.</td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">관리자</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>

      <div class="sectionBox">
        <SectionTitle title="이슈관리 (LX 내부용)">
          <template v-slot:descRight>
            <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">이슈내용</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">작성일시</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">20일날 파일받기로 했습니다.</td>
              <td class="text-center">김OO</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">파일 수령했습니다.</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-05-24 13:10:51</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">확인했습니다.</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-05-24 13:10:51</td>
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
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'

const right = ref(true)
const descState = ref(true)

const current1 = ref('주차장출입구')

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const tabs1 = [
  {
    id: 1,
    name: '주차장출입구',
  },
  {
    id: 2,
    name: '동출입구',
  },
  {
    id: 3,
    name: '단지내도로',
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
    name: '변경',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
