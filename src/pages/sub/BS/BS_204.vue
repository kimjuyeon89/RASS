<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>
            <BaseInput inputType="text" inputValue="" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[0].options"
              />
            </div>
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
          <col style="width: 60px" />
          <col style="width: 60px" />
          <col style="width: 90px" />
          <col style="width: 60px" />
          <col style="width: 140px" />
          <col style="width: 70px" />
          <col style="width: 70px" />
          <col style="width: 100px" />
          <col style="width: 200px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">시도</th>
            <th scope="col" class="text-center">시군구</th>
            <th scope="col" class="text-center">접수관리번호</th>
            <th scope="col" class="text-center">신청종류</th>
            <th scope="col" class="text-center">도로종류</th>
            <th scope="col" class="text-center">진행상태</th>
            <th scope="col" class="text-center">신청일자</th>
            <th scope="col" class="text-center">배치도 변경 경과일</th>
            <th scope="col" class="text-center">신청메모</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">부산광역시</td>
            <td class="text-center">-</td>
            <td class="text-center">
              <p class="tableData">00000000</p>
              <p class="tableData">00000000</p>
            </td>
            <td class="text-center">신규</td>
            <td class="text-center">일반도로</td>
            <td class="text-center">검수보완(LX본부)</td>
            <td class="text-center">2024-07-05</td>
            <td class="text-center">-</td>
            <td class="text-center">신청합니다.</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">
              <p class="tableData">00000000</p>
              <p class="tableData">00000000</p>
            </td>
            <td class="text-center">신규</td>
            <td class="text-center">광역도로(시도)</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-05</td>
            <td class="text-center">-</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">-</td>
            <td class="text-center">
              <p class="tableData">00000000</p>
              <p class="tableData">00000000</p>
            </td>
            <td class="text-center">변경</td>
            <td class="text-center">일반도로</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-05</td>
            <td class="text-center">-</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">전국</td>
            <td class="text-center">-</td>
            <td class="text-center">
              <p class="tableData">00000000</p>
              <p class="tableData">00000000</p>
            </td>
            <td class="text-center">변경</td>
            <td class="text-center">광역도로(행안부)</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-04</td>
            <td class="text-center">2일</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">전라북도</td>
            <td class="text-center">덕진구</td>
            <td class="text-center">
              <p class="tableData">00000000</p>
              <p class="tableData">00000000</p>
            </td>
            <td class="text-center">신규</td>
            <td class="text-center">자전거 광역도로(행안부)</td>
            <td class="text-center">검사보완(지자체)</td>
            <td class="text-center">2024-07-04</td>
            <td class="text-center">-</td>
            <td class="text-center"></td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      />

      <div :class="['colorBox blue', { sticky: isSticky }]">
        <strong class="colorBoxTitle">상세내용은 아래와 같습니다.</strong>

        <span class="colorBoxDescription"
          >필수항목은 반드시 입력부탁드립니다</span
        >
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle titleClassName="bullet" title="결과작성" :right="right">
          <template v-slot:right>
            <BaseButton label="접수취소" styleClassName="md pd-sm bgGray" />
            <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 200px" />
            <col style="width: 400px" />
            <col style="width: 200px" />
            <col style="width: 400px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">작성방법</span>
              </th>
              <td class="text-center">
                <div class="searchColumnInputBox wrap">
                  <BaseRadio name="r01" id="r01" label="참고도면 활용" />
                  <BaseRadio name="r01" id="r02" label="위성영상 활용" />
                </div>
              </td>
              <th scope="col" class="text-center">
                <span class="required center">도로길이</span>
              </th>
              <td class="text-center">
                <div class="tableBox">
                  <BaseInput inputType="text" inputValue="" />
                  <span class="tableUnit">(km)</span>
                  <span class="tableUnit">(소수점 2자리까지)</span>
                </div>
              </td>
            </tr>

            <tr>
              <th scope="col" class="text-center">
                <span class="required center">주도로 시점주소</span>
              </th>
              <td colspan="3" class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">주도로 종점주소</span>
              </th>
              <td colspan="3" class="text-center">
                <BaseInput inputType="text" inputValue="" />
              </td>
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
          titleClassName="bullet"
          title="협의의견 (지자체협의용)"
          :right="right"
        >
          <template v-slot:right>
            <BaseButton label="상세보기" styleClassName="md pd-sm bgBlue" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 70px" />
            <col style="width: auto" />
            <col style="width: 100px" />
            <col style="width: 120px" />
            <col style="width: 120px" />
            <col style="width: 180px" />
            <col style="width: 140px" />
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
                  styleClassName="md pd-sm bgGreen i-download-white"
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
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle titleClassName="bullet" title="이력관리" />

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
              <th scope="col" class="text-center">반려사유분류</th>
              <th scope="col" class="text-center">내용</th>
              <th scope="col" class="text-center">담당자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">2024-07-18</td>
              <td class="text-center">현행화 신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">2024-07-18</td>
              <td class="text-center">현행화 접수</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">2024-07-24</td>
              <td class="text-center">검수요청(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">2024-07-25</td>
              <td class="text-center">검수보완(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">박OO</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">00000000000000000000</td>
              <td class="text-center">2024-07-29</td>
              <td class="text-center">검수요청(LX본부)</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">이OO</td>
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
          titleClassName="bullet"
          title="현행화 이슈(LX내부용)"
          :right="right"
        >
          <template v-slot:right>
            <BaseButton label="상세조회" styleClassName="md pd-sm bgBlue" />
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
              <td class="text-left">20일날 파일 받기로 했습니다.</td>
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
                  styleClassName="md pd-sm bgGreen i-download-white"
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
          titleClassName="bullet"
          title="광역도로 시점,경유,종점(시군구) 정보"
          :right="right"
        >
          <template v-slot:right>
            <BaseButton
              label="삭제"
              styleClassName="md pd-sm bdGray i-remove"
            />
            <BaseButton
              label="추가"
              styleClassName="md pd-sm bdBlue i-plus-blue"
            />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 180px" />
            <col style="width: 180px" />
            <col style="width: 150px" />
            <col style="width: 150px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check1" />
              </th>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">경유 시군구</th>
              <th scope="col" class="text-center">시점주소</th>
              <th scope="col" class="text-center">종점주소</th>
              <th scope="col" class="text-center">도로길이(km)</th>
              <th scope="col" class="text-center">지역본부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">부산광역시 중구</td>
              <td class="text-center">부산광역시 중구 중앙동5가 대교로 144</td>
              <td class="text-center">부산광역시 중구 중앙동4가 15-8</td>
              <td class="text-center">111</td>
              <td class="text-center">부산울산지역본부</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">부산광역시 동구</td>
              <td class="text-center">부산광역시 동구 초량동 1232</td>
              <td class="text-center">부산광역시 동구 초량동 45-69</td>
              <td class="text-center">1.18</td>
              <td class="text-center">부산울산지역본부</td>
            </tr>
          </tbody>
        </BaseTable>

        <p class="tableDescription text-color-blue2">
          ※ 현행화 도로(광역도로)가 경유하는 2개 이상의 지자체(시군구)가
          등록되어야 합니다. 광역도로 현행화 요청시 화면에 표시됩니다.
        </p>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          titleClassName="bullet"
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
                <BaseCheckbox id="check4" />
              </th>
              <th scope="col" class="text-center"></th>
              <th scope="col" class="text-center">파일구분</th>
              <th scope="col" class="text-center">파일명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">도로구간</td>
              <td class="text-center">부산광역시 금정구_298_manage</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">실폭도로</td>
              <td class="text-center">부산광역시 금정구_308_rw</td>
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
        <SectionTitle
          titleClassName="bullet"
          title="성과물 공간정보파일 등록 정보"
        />

        <BaseTab styleClassName="hasTabLength9 tabType3">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="도로구간">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 146px"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 150px" />
                    <col style="width: 158px" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">index</span>
                      </th>
                      <th scope="col" class="text-center">파일구분</th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">파일명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">도로구간</td>
                      <td class="text-center">298</td>
                      <td class="text-center">부산 금정구_298_manage</td>
                    </tr>
                    <tr>
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
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="실폭도로">
              <div>실폭도로</div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="기초간격">
              <div>기초간격</div>
            </BaseTabContent>
          </template>
        </BaseTab>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          titleClassName="bullet"
          title="수시정비 공간정보파일 등록 정보"
        />

        <BaseTab styleClassName="hasTabLength9 tabType3">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs2" v-model="current2" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current2" name="건물">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 146px"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 250px" />
                    <col style="width: 200px" />
                    <col style="width: 200px" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <span class="hidden">index</span>
                      </th>
                      <th scope="col" class="text-center">현행화 구분</th>
                      <th scope="col" class="text-center">파일구분</th>
                      <th scope="col" class="text-center">일련번호</th>
                      <th scope="col" class="text-center">파일명</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center">도로분</td>
                      <td class="text-center">실폭도로</td>
                      <td class="text-center">1</td>
                      <td class="text-center">Om_rd_298_rw</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center">도로분</td>
                      <td class="text-center">실폭도로</td>
                      <td class="text-center">1</td>
                      <td class="text-center">Om_rd_298_rw</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center">도로분</td>
                      <td class="text-center">실폭도로</td>
                      <td class="text-center">1</td>
                      <td class="text-center">Om_rd_298_rw</td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="도로">
              <div>도로</div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="사물주소">
              <div>사물주소</div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="통리">
              <div>통리</div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="입체도로">
              <div>입체도로</div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="내부도로">
              <div>내부도로</div>
            </BaseTabContent>
            <BaseTabContent :current="current2" name="장소지능정보">
              <div>장소지능정보</div>
            </BaseTabContent>
          </template>
        </BaseTab>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          titleClassName="bullet"
          title="준공도면 (총10개까지 등록가능)"
          :right="true"
        >
          <template v-slot:right>
            <BaseButton label="파일등록" styleClassName="md bgGray" />
          </template>
        </SectionTitle>

        <BaseTable>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: auto" />
            <col style="width: 250px" />
            <col style="width: 250px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">파일확장자</th>
              <th scope="col" class="text-center">등록일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">1</td>
              <td class="text-center">도로구간 현황도</td>
              <td class="text-center">jpg</td>
              <td class="text-center">2024-07-09</td>
            </tr>
          </tbody>
        </BaseTable>

        <p class="tableDescription text-color-blue2">
          ※ 파일등록 시 기존 등록한 준공도면파일은 삭제되고 새로 등록이 됩니다.
        </p>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="성과도면 (전체구간 필수)"
          titleClassName="bullet"
        />

        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle
              title="전체구간"
              :right="true"
              :hasFile="true"
              titleType="bullet-play"
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
              titleType="bullet-play"
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
              titleType="bullet-play"
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
import { ref, onMounted, onUnmounted } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import NoData from '@/components/sub/section/NoData.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const isSticky = ref(false); 
let pageContainer = null; 

const handleScroll = () => {
  const scrollPosition = pageContainer?.scrollTop || 0; 
  isSticky.value = scrollPosition >= 700; 
};

onMounted(() => {
  pageContainer = document.querySelector('.pageContainer');

  if (pageContainer) {
    pageContainer.addEventListener('scroll', handleScroll); 
  }
});

onUnmounted(() => {
  if (pageContainer) {
    pageContainer.removeEventListener('scroll', handleScroll); 
  }
});

const right = ref(true)
const descState = ref(true)

const tabs1 = [
  {
    id: 1,
    name: '도로구간',
  },
  {
    id: 2,
    name: '실폭도로',
  },
  {
    id: 3,
    name: '기초간격',
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

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

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

const current1 = ref('도로구간')
const current2 = ref('건물')

const explanationData = ref([
  {
    id: 1,
    title: '성과물 공간정보 파일정보',
    items: [
      {
        text: '시군구명_일련번호_형상구분.확장자     (예) 부산광역시 금정구_1000_buld.shp',
      },
      {
        text: '형상구분 (manage:도로구간, rw:실폭도로, intrvl:기초간격)',
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
<style scoped>
.colorBox.sticky {
  position: fixed;
  top: 50px;
  left:275px;
  z-index: 1000;
  border-radius: 0 0 8px 8px;  
}
</style>