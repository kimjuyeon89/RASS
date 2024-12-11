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
          <col style="width: 70px" />
          <col style="width: 170px" />
          <col style="width: 170px" />
          <col style="width: 170px" />
          <col style="width: 170px" />
          <col style="width: 170px" />
          <col style="width: auto" />
          <col style="width: 170px" />
          <col style="width: 170px" />
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
            <th scope="col" class="text-center">경과일</th>
            <th scope="col" class="text-center">도로명주소</th>
            <th scope="col" class="text-center">신청일자</th>
            <th scope="col" class="text-center">신청메모</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">경기도</td>
            <td class="text-center">평택시</td>
            <td class="text-center">750011</td>
            <td class="text-center">접수</td>
            <td class="text-center">0</td>
            <td class="text-center">경기도 평택시 오성면죽리 274-11</td>
            <td class="text-center">2024-05-24</td>
            <td class="text-center">잘 부탁드립니다</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">경기도</td>
            <td class="text-center">평택시</td>
            <td class="text-center">750011</td>
            <td class="text-center">접수</td>
            <td class="text-center">0</td>
            <td class="text-center">경기도 평택시 오성면죽리 274-11</td>
            <td class="text-center">2024-05-24</td>
            <td class="text-center">잘 부탁드립니다</td>
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
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="결과작성" :right="right">
          <template v-slot:right>
            <BaseButton label="초기화" styleClassName="md pd-sm bdGray" />
            <BaseButton label="접수취소" styleClassName="md pd-sm bdGray" />
            <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
          </template>
        </SectionTitle>

        <BaseTable class="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 250px" />
            <col style="width: 270px" />
            <col style="width: 250px" />
            <col style="width: 270px" />
            <col style="width: 250px" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="col" class="text-center">상세주소</th>
              <td class="text-center" colspan="2">
                <BaseInput
                  inputType="text"
                  inputValue="전북 전주시 덕진구경동로 19"
                />
              </td>
              <th scope="col" class="text-center">조사일자</th>
              <td class="text-center" colspan="2">
                <BaseInput inputType="text" inputValue="2005-05-27" />
              </td>
            </tr>

            <tr>
              <th scope="col" class="text-center">
                <span class="required center">출입구 명칭</span>
              </th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="OO아파트 정문" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">출입구 구분</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">출입구 유형</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">출입구 위치</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">출입구 형태</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">진입로 형태</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">자동개폐</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">출입구 층 위치</span>
              </th>
              <td class="text-center">
                <BaseInput inputType="text" inputValue="1" />
              </td>
              <th scope="col" class="text-center">
                <span class="required center">사용자 권한</span>
              </th>
              <td class="text-center">
                <BaseSelect initialSelectValue="선택" :options="selectList" />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center" rowspan="2">관련소재지1</th>
              <td style="padding: 0" class="text-center" colspan="5">
                <div class="rowTableItemBox">
                  <div class="borderBox">
                    <span class="text-center borderBoxText">1</span>
                  </div>
                  <BaseInput
                    inputType="text"
                    inputValue="별칭1"
                    inputId="i01"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 0" class="text-center" colspan="5">
                <div class="rowTableItemBox">
                  <div class="borderBox">
                    <span class="text-center borderBoxText">1</span>
                  </div>
                  <BaseInput
                    inputType="text"
                    inputValue="별칭1"
                    inputId="i02"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer cg40 half">
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
            :src="getImageUrl('../../assets/popup/img-map02-lg.jpg')"
            alt="데이터가 없습니다."
          />
        </div>
      </div>

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
                :src="getImageUrl('../../assets/popup/img-car.jpg')"
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
                    <FileInputBox filePlaceholder="선택된 파일없음" />
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

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="협의의견 (지자체협의용)" :right="right">
          <template v-slot:right>
            <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
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
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">협의의견 내용입니다.</td>
              <td class="text-center">수신</td>
              <td class="text-center">DAIP</td>
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
              <td class="text-center">협의의견 내용입니다.</td>
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
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="이력조회" />

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
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left">의뢰 신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left">의뢰 신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left">의뢰 신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">4</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left">의뢰 신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
            <tr>
              <td class="text-center">5</td>
              <td class="text-center">전라북도 덕진구-75011</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left">의뢰 신청합니다.</td>
              <td class="text-center">김OO</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="이슈관리 (LX내부용)" :right="right">
          <template v-slot:right>
            <BaseButton label="상세조회" styleClassName="md pd-sm bdGray" />
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
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check6" />
              </td>
              <td class="text-center">5</td>
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" />
              </td>
              <td class="text-center">6</td>
              <td class="text-center">출입구</td>
              <td class="text-center">전라북도 덕진구_75020_entrc</td>
            </tr>
          </tbody>
        </BaseTable>
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
            <BaseTabContent :current="current1" name="출입구">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 146px"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 70px" />
                    <col style="width: auto" />
                    <col style="width: auto" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <BaseCheckbox id="check8" :isLabel="true" />
                      </th>
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
                      <td>
                        <BaseCheckbox id="check9" :isLabel="true" />
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-center">80121</td>
                      <td class="text-center">298</td>
                      <td class="text-center">전라북도 덕진구_75020_entrc</td>
                    </tr>
                    <tr>
                      <td>
                        <BaseCheckbox id="check10" :isLabel="true" />
                      </td>
                      <td class="text-center">2</td>
                      <td class="text-center">80121</td>
                      <td class="text-center">298</td>
                      <td class="text-center">전라북도 덕진구_75020_entrc</td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="연결선">
              <div>연결선</div>
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
                  inlineStyle="max-height: 146px"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 70px" />
                    <col style="width: 358px" />
                    <col style="width: 358px" />
                    <col style="width: 358px" />
                    <col style="width: 358px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <BaseCheckbox id="check17" :isLabel="true" />
                      </th>
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
                      <td>
                        <BaseCheckbox id="check15" :isLabel="true" />
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">80121</td>
                      <td class="text-center">전라북도 덕진구_75020_entrc</td>
                    </tr>
                    <tr>
                      <td>
                        <BaseCheckbox id="check16" :isLabel="true" />
                      </td>
                      <td class="text-center">2</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">80121</td>
                      <td class="text-center">전라북도 덕진구_75020_entrc</td>
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
          </template>
        </BaseTab>
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="의뢰배치도/성과도면 등록"
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
              <th scope="col" class="text-center">의뢰현황도</th>
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
                <BaseCheckbox id="check11-1" />
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
                <BaseCheckbox id="check11" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">의뢰배치도</td>
              <td class="text-center">req_칠원동</td>
              <td class="text-center">png</td>
              <td class="text-center">388796</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check12" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">칠원동</td>
              <td class="text-center">png</td>
              <td class="text-center">388796</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check13" />
              </td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
              <td class="text-center"></td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check14" />
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
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import NoData from '@/components/sub/section/NoData.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'

const right = ref(true)
const descState = ref(true)

const tabs1 = [
  {
    id: 1,
    name: '출입구',
  },
  {
    id: 2,
    name: '연결선',
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
]

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const pageMoveValue = ref(5)
const total = ref(22)

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const current1 = ref('출입구')
const current2 = ref('건물')
</script>
