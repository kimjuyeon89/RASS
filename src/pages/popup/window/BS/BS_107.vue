<template>
  <SubRoot>
    <WindowStatistics :data="data" />

    <div class="subInner window">
      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle :right="right">
            <template v-slot:left>
              <div class="searchColumn">
                <span class="searchLabel">접수관리번호</span>
                <div class="searchColumnInputBox">
                  <BaseInput inputType="text" inputValue="" />
                  <BaseButton label="조회" styleClassName="md bgGray" />
                </div>
              </div>
            </template>
            <template v-slot:right>
              <BaseButton label="보안요청" styleClassName="md pd-sm bgAqua" />
              <BaseButton label="완료" styleClassName="md pd-sm bgBlue" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 100px" />
              <col style="width: 100px" />
              <col style="width: 190px" />
              <col style="width: 200px" />
              <col style="width: 160px" />
              <col style="width: 100px" />
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
                <th scope="col" class="text-center">도로명주소</th>
                <th scope="col" class="text-center">소재지</th>
                <th scope="col" class="text-center">신청일자</th>
                <th scope="col" class="text-center">경과일</th>
                <th scope="col" class="text-center">측량자료활용</th>
                <th scope="col" class="text-center">정합개수여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">충청남도</td>
                <td class="text-center">태안군</td>
                <td class="text-center">R2016451110000000029</td>
                <td class="text-center">
                  충청남도 태안군 원북면 장대문길 109-44
                </td>
                <td class="text-center">원북면양산리345-44</td>
                <td class="text-center">2024-08-01</td>
                <td class="text-center">2</td>
                <td class="text-center">Y</td>
                <td class="text-center">N</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">충청남도</td>
                <td class="text-center">서천군</td>
                <td class="text-center">R2016451110000000029</td>
                <td class="text-center">충청남도 서산군 서천읍 서림동로 17</td>
                <td class="text-center">서천읍 군사리 1266</td>
                <td class="text-center">2024-08-01</td>
                <td class="text-center">1</td>
                <td class="text-center">N</td>
                <td class="text-center">N</td>
              </tr>
              <tr class="trBlue">
                <td class="text-center">3</td>
                <td class="text-center">충청남도</td>
                <td class="text-center">서산시</td>
                <td class="text-center">R2016451110000000029</td>
                <td class="text-center">
                  충청남도 서산시 인지면 모월 1길 122-26
                </td>
                <td class="text-center">운산면 고풍리 204-47</td>
                <td class="text-center">2024-08-01</td>
                <td class="text-center">1</td>
                <td class="text-center">N</td>
                <td class="text-center">N</td>
              </tr>
            </tbody>
          </BaseTable>

          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          />
        </div>
      </section>

      <section class="sectionContainer cg40 half hasTitleButton">
        <div class="sectionBox">
          <SectionTitle title="성과물파일" :right="right">
            <template v-slot:right>
              <BaseButton
                label="다운로드"
                styleClassName="md pd-sm bdBlue i-download"
              />
            </template>
          </SectionTitle>

          <div class="sectionInnerContainer">
            <BaseTable styleClassName="overflow-y">
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 70px" />
                <col style="width: 130px" />
                <col style="width: 330px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    <BaseCheckbox id="check1" />
                  </th>
                  <th scope="col" class="text-center">
                    <span class="hidden">index</span>
                  </th>
                  <th scope="col" class="text-center">성과건수</th>
                  <th scope="col" class="text-center">첨부파일 구분</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check2" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">1</td>
                  <td class="text-center">성과물건물(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check3" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과물출입구(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check4" />
                  </td>
                  <td class="text-center">3</td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과물건물군(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check5" />
                  </td>
                  <td class="text-center">4</td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과물연결선(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check6" />
                  </td>
                  <td class="text-center">5</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과물동별출입구(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check7" />
                  </td>
                  <td class="text-center">6</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과물주차장출입구(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check8" />
                  </td>
                  <td class="text-center">7</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과물단지내도로(shp)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check9" />
                  </td>
                  <td class="text-center">8</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과결과부(pdf)</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check10" />
                  </td>
                  <td class="text-center">9</td>
                  <td class="text-center">-</td>
                  <td class="text-center">정합계수</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check11" />
                  </td>
                  <td class="text-center">10</td>
                  <td class="text-center">-</td>
                  <td class="text-center">신청 건물배치도</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check12" />
                  </td>
                  <td class="text-center">11</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과도면</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check13" />
                  </td>
                  <td class="text-center">12</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과기타</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check14" />
                  </td>
                  <td class="text-center">13</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과기타</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check15" />
                  </td>
                  <td class="text-center">14</td>
                  <td class="text-center">-</td>
                  <td class="text-center">성과기타</td>
                </tr>
              </tbody>
            </BaseTable>
          </div>
        </div>

        <div class="sectionBox">
          <SectionTitle title="신청배치도 및 성과도면" />

          <div class="sectionInnerContainer">
            <div class="sectionInnerBox">
              <SectionTitle title="신청배치도" titleType="dot" />

              <NoData
                :imageHeight="137"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </div>

            <div class="sectionInnerBox">
              <SectionTitle title="성과도면" titleType="dot" />

              <NoData
                :imageHeight="137"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </div>
          </div>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="수시정비 공간정보 파일 정보" :right="right">
            <template v-slot:right>
              <BaseButton
                label="다운로드"
                styleClassName="md pd-sm bdBlue i-download"
              />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 70px" />
              <col style="width: 300px" />
              <col style="width: 790px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <BaseCheckbox id="check15" />
                </th>
                <th scope="col" class="text-center"></th>
                <th scope="col" class="text-center">현행화구분</th>
                <th scope="col" class="text-center">작업구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check16" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">장소지능정보</td>
                <td class="text-center">출입구</td>
              </tr>
              <tr>
                <td class="text-center">
                  <BaseCheckbox id="check17" />
                </td>
                <td class="text-center">2</td>
                <td class="text-center">사물주소</td>
                <td class="text-center">위치점</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="협의의견" :right="right">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 350px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">협의내용</th>
                <th scope="col" class="text-center">발신구분</th>
                <th scope="col" class="text-center">작성기관</th>
                <th scope="col" class="text-center">작성자</th>
                <th scope="col" class="text-center">발신/수신일시</th>
                <th scope="col" class="text-center">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">첨부파일 추가하였습니다.</td>
                <td class="text-center">수신</td>
                <td class="text-center">KAIS</td>
                <td class="text-center">이OO</td>
                <td class="text-center">2024-08-12 13:01:56</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">첨부파일 재첨부 부탁드립니다.</td>
                <td class="text-center">발신</td>
                <td class="text-center">LX</td>
                <td class="text-center">김OO</td>
                <td class="text-center">2024-08-11 16:30:45</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="현행화 이력" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 180px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 330px" />
              <col style="width: 160px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">접수관리번호</th>
                <th scope="col" class="text-center">변경일자</th>
                <th scope="col" class="text-center">진행상태</th>
                <th scope="col" class="text-center">반려사유분류</th>
                <th scope="col" class="text-center">내용</th>
                <th scope="col" class="text-center">담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">0000000000</td>
                <td class="text-center">2024-08-01</td>
                <td class="text-center">현행화 신청</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center">이OO</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">0000000000</td>
                <td class="text-center">2024-08-01</td>
                <td class="text-center">현행화 접수</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center">김OO</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">0000000000</td>
                <td class="text-center">2024-08-02</td>
                <td class="text-center">검수요청 (LX 본부)</td>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <td class="text-center">김OO</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="이슈관리 (LX 내부용)">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
            </template>
          </SectionTitle>

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 670px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">이슈내용</th>
                <th scope="col" class="text-center">작성자</th>
                <th scope="col" class="text-center">작성일시</th>
                <th scope="col" class="text-center">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr class="trBlue">
                <td class="text-center">1</td>
                <td class="text-left">20일날 파일받기로 했습니다.</td>
                <td class="text-center">김OO</td>
                <td class="text-center">2024-07-25 13:10:51</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-left">파일 수령했습니다.</td>
                <td class="text-center">이OO</td>
                <td class="text-center">2024-07-25 13:10:51</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-left">확인했습니다.</td>
                <td class="text-center">김OO</td>
                <td class="text-center">2024-07-25 13:10:51</td>
                <td class="text-center">
                  <BaseButton
                    label="다운로드"
                    styleClassName="md pd-sm bdBlue i-download"
                  />
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="과거 측량이력 목록" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 300px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 200px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">측량일자</th>
                <th scope="col" class="text-center">측량종목</th>
                <th scope="col" class="text-center">측량소재지</th>
                <th scope="col" class="text-center">측량팀장</th>
                <th scope="col" class="text-center">협의구분</th>
                <th scope="col" class="text-center">원점</th>
                <th scope="col" class="text-center">표출</th>
                <th scope="col" class="text-center">측량 파일다운</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">20220104</td>
                <td class="text-center">지적현황</td>
                <td class="text-center">운산면 고풍리 204-15</td>
                <td class="text-center">최OO</td>
                <td class="text-center">비협의</td>
                <td class="text-center">중부원점</td>
                <td class="text-center">
                  <span class="text-color-red">표출</span>
                </td>
                <td class="text-center">
                  <span class="text-color-red">다운</span>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">20220104</td>
                <td class="text-center">분할측량</td>
                <td class="text-center">운산면 고풍리 204-31</td>
                <td class="text-center">장OO</td>
                <td class="text-center">비협의</td>
                <td class="text-center">중부원점</td>
                <td class="text-center">
                  <span class="text-color-red">표출</span>
                </td>
                <td class="text-center">
                  <span class="text-color-red">다운</span>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">20220104</td>
                <td class="text-center">경계복원</td>
                <td class="text-center">운산면 고풍리 204-25</td>
                <td class="text-center">홍OO</td>
                <td class="text-center">협의</td>
                <td class="text-center">중부원점 (세계측지계)</td>
                <td class="text-center">
                  <span class="text-color-red">표출</span>
                </td>
                <td class="text-center">
                  <span class="text-color-red">다운</span>
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="지적측량기준점" />

          <BaseTable>
            <colgroup>
              <col style="width: 230px" />
              <col style="width: 253px" />
              <col style="width: 253px" />
              <col style="width: 253px" />
              <col style="width: 230px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">번호</th>
                <th scope="col" class="text-center">구분</th>
                <th scope="col" class="text-center">X좌표</th>
                <th scope="col" class="text-center">Y좌표</th>
                <th scope="col" class="text-center">계산결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center" rowspan="2">98415</td>
                <td class="text-center">이동전</td>
                <td class="text-center">13757.31</td>
                <td class="text-center">64723.13</td>
                <td class="text-center table-background-red2" rowspan="2">
                  <span class="text-color-red">1.7m</span>
                </td>
              </tr>
              <tr>
                <td class="text-center">이동후</td>
                <td class="text-center">13758.11</td>
                <td class="text-center">64723.12</td>
              </tr>
            </tbody>
          </BaseTable>

          <p class="tableDescription text-color-deep-blue">
            ※ 지적측량 기준점의 계산결과가 1.5m 이내 여부를 확인할 수 있습니다.
            초과할 경우 빨간색으로 표시됩니다.
          </p>
        </div>
      </section>

      <section class="sectionContainer">
        <div class="sectionBox">
          <SectionTitle title="관련 소재지" />

          <BaseTable>
            <colgroup>
              <col style="width: 70px" />
              <col style="width: 610px" />
              <col style="width: 160px" />
              <col style="width: 160px" />
              <col style="width: 220px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" class="text-center">
                  <span class="hidden">index</span>
                </th>
                <th scope="col" class="text-center">법정동</th>
                <th scope="col" class="text-center">본번</th>
                <th scope="col" class="text-center">부번</th>
                <th scope="col" class="text-center">대장구분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">충청남도 서산시 인지면 모월 1길</td>
                <td class="text-center">122</td>
                <td class="text-center">27</td>
                <td class="text-center">토지</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">충청남도 서산시 인지면 모월 1길</td>
                <td class="text-center">112</td>
                <td class="text-center">25</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </BaseTable>
        </div>
      </section>
    </div>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import WindowStatistics from '@/components/popup/WindowStatistics.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import NoData from '@/components/sub/section/NoData.vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const right = ref(true)

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const data = ref([
  {
    id: 1,
    items: [
      {
        icon: 'building',
        title: '건물 1차',
        count: 10,
        active: false,
      },
      {
        icon: 'building',
        title: '건물 1차',
        count: 5,
        active: true,
      },
      {
        icon: 'maintenance',
        title: '수시정비',
        count: 4,
        active: false,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        icon: 'road',
        title: '도로',
        count: 10,
        active: false,
      },
      {
        icon: 'dimensions',
        title: '입체도로',
        count: 5,
        active: false,
      },
      {
        icon: 'location',
        title: '내부도로',
        count: 4,
        active: true,
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        icon: 'object-address',
        title: '사물주소',
        count: 10,
        active: true,
      },
      {
        icon: 'dimensions',
        title: '통리',
        count: 5,
        active: false,
      },
      {
        icon: 'satellite',
        title: '장소지능정보',
        count: 4,
        active: false,
      },
    ],
  },
])
</script>
