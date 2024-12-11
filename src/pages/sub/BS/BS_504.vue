<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
          <div class="searchColumn">
            <span class="searchLabel">행정구역</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />

            <BaseSelect initialSelectValue="전체" :options="selectList" />

            <BaseSelect initialSelectValue="전체" :options="selectList" />
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
            <BaseSelect initialSelectValue="전체" :options="selectList" />
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
      <BaseTable>
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
            <td class="text-center">접수</td>
            <td class="text-center">신규</td>
            <td class="text-center">3</td>
            <td class="text-center">아파트 (02001)</td>
            <td class="text-center">경기도 평택시 칠원동 249-5</td>
            <td class="text-center">칠원동 2467-1234</td>
            <td class="text-center">2024-05-24</td>
            <td class="text-center">잘부탁드립니다.</td>
            <td class="text-center">123456</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">강원특별자치도</td>
            <td class="text-center">양양군</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">접수</td>
            <td class="text-center">신규</td>
            <td class="text-center">2</td>
            <td class="text-center"></td>
            <td class="text-center">강원특별자치도 양양군 현남면 남해 3리</td>
            <td class="text-center">현남면 4157-7800</td>
            <td class="text-center">2024-05-24</td>
            <td class="text-center"></td>
            <td class="text-center">123456</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">경상북도</td>
            <td class="text-center">의성군</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">LX검수보완요청</td>
            <td class="text-center">신규</td>
            <td class="text-center">1</td>
            <td class="text-center"></td>
            <td class="text-center">경상북도 의성군 의성읍 홍술로 146</td>
            <td class="text-center">의성읍 홍술로 1334-7777</td>
            <td class="text-center">2024-05-24</td>
            <td class="text-center"></td>
            <td class="text-center">123456</td>
          </tr>
        </tbody>
      </BaseTable>

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
            <BaseButton label="접수취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">작성방법</th>
              <td class="text-center">
                <div class="searchColumnInputBox wrap">
                  <BaseRadio name="r01" id="r01" label="참고도면 활용" />
                  <BaseRadio name="r01" id="r02" label="위성영상 활용" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">입체도로길이</span>
              </th>
              <td class="text-center">
                <div class="tableBox">
                  <BaseInput
                    inputType="text"
                    inputValue=""
                    inlineStyle="width: 500px;"
                  />
                  <p class="tableUnit">(km)</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">입체도로 시점주소</span>
              </th>
              <td class="text-center">
                <div class="tableBox">
                  <BaseInput
                    inputType="text"
                    inputValue=""
                    inlineStyle="width: 500px;"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">입체도로 종점주소</span>
              </th>
              <td class="text-center">
                <div class="tableBox">
                  <BaseInput
                    inputType="text"
                    inputValue=""
                    inlineStyle="width: 500px;"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer">
      <div class="sectionBox">
        <SectionTitle title="협의의견(지자체협의용)" :right="right">
          <template v-slot:right>
            <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: auto" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 100px" />
            <col style="width: 150px" />
            <col style="width: 110px" />
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
              <th scope="col" class="text-center">발신/수신일자</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">첨부파일 추가하였습니다.</td>
              <td class="text-center">수신</td>
              <td class="text-center">지자체</td>
              <td class="text-center">김OO</td>
              <td class="text-center">2024-07-12</td>
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
              <td class="text-center">이OO</td>
              <td class="text-center">2024-07-11</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="이력관리" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: 330px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: auto" />
            <col style="width: 180px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">접수관리번호</th>
              <th scope="col" class="text-center">변경일자</th>
              <th scope="col" class="text-center">진행상태</th>
              <th scope="col" class="text-center">분류</th>
              <th scope="col" class="text-center">내용</th>
              <th scope="col" class="text-center">담당자</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 접수</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수요청(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수요청(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">000000000000000</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">검수요청(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer">
      <div class="sectionBox">
        <SectionTitle title="이슈관리(LX 내부용)" />

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 130px" />
            <col style="width: 180px" />
            <col style="width: 110px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">이슈내용</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">작성일자</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-left">20일날 파일받기로 했습니다.</td>
              <td class="text-center">김OO</td>
              <td class="text-center">2024-07-18</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-left">파일 수령했습니다.</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-07-20</td>
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
              <td class="text-center">2024-07-20</td>
              <td class="text-center">-</td>
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
                <BaseCheckbox id="check1" :isLabel="true" />
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">도로구간</td>
              <td class="text-center">경기도_297_manage</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">실폭도로</td>
              <td class="text-center">경기도_297_manage</td>
            </tr>
          </tbody>
        </BaseTable>

        <ExplanationBox title="파일형식" :data="explanationData" />
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="성과물 공간정보파일 등록 정보" />

        <BaseTab styleClassName="hasTabLength9 tabType2">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="도로구간">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 147px;"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 130px" />
                    <col style="width: 130px" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">index</span>
                      </th>
                      <th scope="col" class="text-center"></th>
                      <th scope="col" class="text-center">파일구분</th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">파일명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">도로구간</td>
                      <td class="text-center">209</td>
                      <td class="text-center"></td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="실폭도로">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="수직연결점">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="수직이동통로">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="교차면"> </BaseTabContent>
            <BaseTabContent :current="current1" name="구조물의 범위">
            </BaseTabContent>
          </template>
        </BaseTab>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="수시정비 파일 등록 정보" />

        <BaseTab styleClassName="hasTabLength9 tabType2">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs2" v-model="current2" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current2" name="건물">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 147px;"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 70px" />
                    <col style="width: 160px" />
                    <col style="width: 130px" />
                    <col style="width: 130px" />
                    <col style="width: auto" />
                    <col style="width: 130px" />
                    <col style="width: 130px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">
                        <BaseCheckbox id="check4" :isLabel="true" />
                      </th>
                      <th scope="col" class="text-center">
                        <span class="hidden">index</span>
                      </th>
                      <th scope="col" class="text-center"></th>
                      <th scope="col" class="text-center">현행화 구분</th>
                      <th scope="col" class="text-center">파일구분</th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">파일명</th>
                      <th scope="col" class="text-center">확장자</th>
                      <th scope="col" class="text-center">용량</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">
                        <BaseCheckbox id="check5" :isLabel="true" />
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-center">장소지능정보</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">01</td>
                      <td class="text-center">덕진구_01_출입구</td>
                      <td class="text-center">shp, shx, dbf</td>
                      <td class="text-center">123433</td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="도로"> </BaseTabContent>
            <BaseTabContent :current="current2" name="사물주소">
            </BaseTabContent>
            <BaseTabContent :current="current2" name="통리"> </BaseTabContent>
            <BaseTabContent :current="current2" name="입체도로">
            </BaseTabContent>
            <BaseTabContent :current="current2" name="내부도로">
            </BaseTabContent>
            <BaseTabContent :current="current2" name="장소지능정보">
            </BaseTabContent>
          </template>
        </BaseTab>
      </div>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="현황도" :right="true">
          <template v-slot:right>
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
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 200px" />
            <col style="width: 200px" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">
                <BaseCheckbox id="check15" :isLabel="true" />
              </th>
              <th scope="col">
                <span class="hidden">index</span>
              </th>
              <th scope="col">파일구분</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">용량</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check16" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check17" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check18" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="현황도 등록정보" :right="true">
          <template v-slot:right>
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 150px" />
            <col style="width: auto" />
            <col style="width: 200px" />
            <col style="width: 200px" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">
                <BaseCheckbox id="check19" :isLabel="true" />
              </th>
              <th scope="col">
                <span class="hidden">index</span>
              </th>
              <th scope="col">파일구분</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">용량</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check20" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check21" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
            <tr>
              <td>
                <BaseCheckbox id="check22" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">현황도</td>
              <td class="text-center">전라북도_manage1</td>
              <td class="text-center">JPG</td>
              <td class="text-center">123468</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="성과도면 (전체구간 필수)"
          :required="true"
          descText="내용저장을 누르시면 성과출력으로 결과부를 확인하실 수 있습니다."
          :descRight="true"
          :descState="true"
        />

        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle
              title="전체구간"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox
                      :right="true"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                  <template v-slot:button>
                    <BaseButton styleClassName="btnRemove" />
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

        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle
              title="시작지점"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox
                      :right="true"
                      filePlaceholder="선택된 파일없음"
                    />
                  </template>
                  <template v-slot:button>
                    <BaseButton styleClassName="btnRemove" />
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
          <div class="sectionInnerBox">
            <SectionTitle
              title="끝지점"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
              <template v-slot:right>
                <FileInputWrapper label="파일 선택">
                  <template v-slot:right>
                    <FileInputBox filePlaceholder="선택된 파일없음" />
                  </template>
                  <template v-slot:button>
                    <BaseButton styleClassName="btnRemove" />
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
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import NoData from '@/components/sub/section/NoData.vue'

const right = ref(true)
const descState = ref(true)
const current1 = ref('도로구간')
const current2 = ref('건물')

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const tabs1 = [
  {
    id: 1,
    name: '도로구간',
    count: 2,
  },
  {
    id: 2,
    name: '실폭도로',
    count: 1,
  },
  {
    id: 3,
    name: '수직연결점',
    count: 1,
  },
  {
    id: 4,
    name: '수직이동통로',
    count: 1,
  },
  {
    id: 5,
    name: '교차면',
    count: 0,
  },
  {
    id: 6,
    name: '구조물의 범위',
    count: 0,
  },
]

const tabs2 = [
  {
    id: 1,
    name: '건물',
    count: 2,
  },
  {
    id: 2,
    name: '도로',
    count: 1,
  },
  {
    id: 3,
    name: '사물주소',
    count: 1,
  },
  {
    id: 4,
    name: '통리',
    count: 1,
  },
  {
    id: 5,
    name: '입체도로',
    count: 0,
  },
  {
    id: 6,
    name: '내부도로',
    count: 0,
  },
  {
    id: 7,
    name: '장소지능정보',
    count: 0,
  },
]

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const explanationData = ref([
  {
    id: 1,
    title: '성과물 공간정보 파일정보',
    items: [
      {
        text: '시군구명_일련번호_형상구분.확장자 &nbsp;&nbsp;&nbsp;&nbsp; (예) 서울시 금천구_1000_buld.shp',
      },
      {
        text: '형상구분 (buld:건물, eqb:건물군,entrc:출입구, cntc:연결선, dongentrc:동출입구, parkingentrc:주차장출입구, eqbroad:단지내도로)',
      },
    ],
  },
  {
    id: 2,
    title: '수시정비 공간정보 파일정보',
    items: [
      {
        text: '수시정비구분_현행화구분_시군구번호_일련번호_형상구분.확장자 &nbsp;&nbsp;&nbsp;&nbsp; (예) om_lii_11110_1000_cntc.shp',
      },
      {
        text: '수시정비구분: om',
      },
      {
        text: '현행화구분 (bd:건물, rd:도로, thadr:사물주소, tl:통리, gnrd:입체도로, inrd:내부도로, lii:장소지능)',
      },
      {
        text: '형상구분 (manage:도로구간, rw:실폭도로, intrvl:기초간격, area:구역, 구조물의범위, 개표구등) ',
      },
    ],
  },
])
</script>
