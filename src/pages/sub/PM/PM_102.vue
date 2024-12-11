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
        <SectionTitle
          title="업로드 성공 / 실패"
          descText="상태정보에 (KAIS통보, 전자결재요청, 성과통보) 인 경우는 수정/삭제, 사진변경을 할 수 없습니다."
          :descRight="true"
          :descState="true"
        >
          <template v-slot:descRight>
            <BaseButton label="삭제" styleClassName="md pd-sm bgGray" />
            <BaseButton label="추가" styleClassName="md pd-sm bgGray" />
            <BaseButton label="수정" styleClassName="md pd-sm bgGray" />
            <BaseButton label="측량정보등록" styleClassName="md pd-sm bgBlue" />
            <BaseButton
              label="현장확인결과서"
              styleClassName="md pd-sm bgAqua"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 70px" />
            <col style="width: 150px" />
            <col style="width: 220px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">COS 접수 번호</th>
              <th scope="col" class="text-center">국가지점번호</th>
              <th scope="col" class="text-center">소재지</th>
              <th scope="col" class="text-center">X(N)좌표</th>
              <th scope="col" class="text-center">Y(E)좌표</th>
              <th scope="col" class="text-center">접수일자</th>
              <th scope="col" class="text-center">성공유무</th>
              <th scope="col" class="text-center">위치조회</th>
              <th scope="col" class="text-center">위치확인유무</th>
              <th scope="col" class="text-center">상태</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">서울특별시 서초구 방배동 (산) 128-1</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">완료</td>
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
              <td class="text-center">Y</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">4</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">서울특별시 서초구 방배동 (산) 128-1</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">완료</td>
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
              <td class="text-center">Y</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">3</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">서울특별시 서초구 방배동 (산) 128-1</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">완료</td>
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
              <td class="text-center">Y</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">2</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">서울특별시 서초구 방배동 (산) 128-1</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">완료</td>
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
              <td class="text-center">Y</td>
              <td class="text-center">KAIS 통보</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">1</td>
              <td class="text-center">다사45834977</td>
              <td class="text-center">서울특별시 서초구 방배동 (산) 128-1</td>
              <td class="text-center">1949773.264</td>
              <td class="text-center">945839.763</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">완료</td>
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
              <td class="text-center">Y</td>
              <td class="text-center">KAIS 통보</td>
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

    <!-- sectionContainer -->
    <section class="sectionContainer cg40 half">
      <div class="sectionBox">
        <div class="sectionInnerContainer">
          <div class="sectionInnerBox">
            <SectionTitle
              title="전경사진 (근경)"
              :right="true"
              rightGroupStyle="max-width: 459px"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:left>
                    <FileInputBox
                      inputId="f01"
                      :right="true"
                      filePlaceholder="선택된 파일없음"
                      inputValue="덕진구_75011_전경사진(근경).jpg"
                    />
                  </template>
                </FileInputWrapper>
              </template>
            </SectionTitle>
            <div class="sectionInnerItem">
              <NoData
                height="100%"
                imageWidth="100%"
                imageHeight="100%"
                className="border"
                :src="getImageUrl('../../assets/dummy/img-dummy01.jpg')"
                alt="데이터가 없습니다."
              />
            </div>
          </div>
          <div class="sectionInnerBox">
            <SectionTitle
              title="전경사진 (원경)"
              :right="true"
              rightGroupStyle="max-width: 459px"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:left>
                    <FileInputBox
                      inputId="f02"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                </FileInputWrapper>
              </template>
            </SectionTitle>

            <div class="sectionInnerItem">
              <NoData
                height="100%"
                :imageHeight="137"
                className="border"
                :src="getImageUrl('../../assets/table/img-no-data.svg')"
                alt="데이터가 없습니다."
              />
            </div>
          </div>
        </div>
      </div>

      <div class="sectionBox">
        <SectionTitle
          title="출입구위치 약도"
          :right="true"
          rightGroupStyle="max-width: 459px"
          :hasFile="true"
          titleType="dot"
        >
          <template v-slot:right>
            <FileInputWrapper label="파일 선택">
              <template v-slot:left>
                <FileInputBox
                  inputId="f03"
                  inputValue="덕진구_75011_출입구위치약도.jpg"
                  filePlaceholder="선택된 파일없음"
                />
              </template>
            </FileInputWrapper>
          </template>
        </SectionTitle>

        <div class="sectionInnerContainer">
          <NoData
            height="100%"
            imageWidth="100%"
            imageHeight="100%"
            className="border"
            :src="getImageUrl('../../assets/dummy/img-dummy02.jpg')"
            alt="데이터가 없습니다."
          />
        </div>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="국가지점번호 이미지 파일관리">
          <template v-slot:descRight>
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
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
            <col style="width: 180px" />
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
              <th scope="col" class="text-center">첨부파일 일련번호</th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">파일확장자</th>
              <th scope="col" class="text-center">등록일자</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">5</td>
              <td class="text-center">10</td>
              <td class="text-center">약도</td>
              <td class="text-center">L_다사4532424.JPG</td>
              <td class="text-center">jpg</td>
              <td class="text-center">2024-05-24</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">5</td>
              <td class="text-center">10</td>
              <td class="text-center">약도</td>
              <td class="text-center">L_다사4532424.JPG</td>
              <td class="text-center">jpg</td>
              <td class="text-center">2024-05-24</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">5</td>
              <td class="text-center">10</td>
              <td class="text-center">약도</td>
              <td class="text-center">L_다사4532424.JPG</td>
              <td class="text-center">jpg</td>
              <td class="text-center">2024-05-24</td>
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
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import NoData from '@/components/sub/section/NoData.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'

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
