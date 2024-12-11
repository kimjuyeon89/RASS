<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
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
          <col style="width: 100px" />
          <col style="width: 130px" />
          <col style="width: 130px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: 180px" />
          <col style="width: 180px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">시도</th>
            <th scope="col" class="text-center">시군구</th>
            <th scope="col" class="text-center">접수관리번호</th>
            <th scope="col" class="text-center">사물주소종류</th>
            <th scope="col" class="text-center">진행상태</th>
            <th scope="col" class="text-center">신청일자</th>
            <th scope="col" class="text-center">배치도 변경여부</th>
            <th scope="col" class="text-center">도로명 주소</th>
            <th scope="col" class="text-center">신청메모</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">경상남도</td>
            <td class="text-center">합천군</td>
            <td class="text-center">R2016451110000000001</td>
            <td class="text-center">인명구조함</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">N</td>
            <td class="text-center">경상남도 합천군 문송길 537</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">경상남도</td>
            <td class="text-center">합천군</td>
            <td class="text-center">R2016451110000000001</td>
            <td class="text-center">인명구조함</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">N</td>
            <td class="text-center">경상남도 합천군 문송길 537</td>
            <td class="text-center"></td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">경상남도</td>
            <td class="text-center">합천군</td>
            <td class="text-center">R2016451110000000001</td>
            <td class="text-center">인명구조함</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">2024-07-25</td>
            <td class="text-center">N</td>
            <td class="text-center">경상남도 합천군 문송길 537</td>
            <td class="text-center"></td>
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
                  <BaseCheckbox
                    id="check1"
                    label="참고도면 활용"
                    :isLabel="true"
                    styleClassName="sm"
                  />
                  <BaseCheckbox
                    id="check2"
                    label="현장조사 결과활용"
                    :isLabel="true"
                    styleClassName="sm"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">현장조사결과서 파일등록</th>
              <td class="text-center">
                <div class="rowTableItem flexNone">
                  <BaseInput
                    inputType="text"
                    inputValue="파일 없음"
                    inlineStyle="width: 500px;"
                    disabled
                  />
                  <FileInputWrapper
                    buttonStyleClassName="pd-sm"
                    label="파일 선택"
                  >
                    <template v-slot:right>
                      <FileInputBox
                        :maxWidth="500"
                        inputId="f01"
                        filePlaceholder="선택된 파일없음"
                      />
                    </template>
                  </FileInputWrapper>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">원점분류</th>
              <td class="text-left">좌표계는 세계측지계로 작동합니다.</td>
            </tr>
            <tr>
              <th scope="col" class="text-center">드론배달점</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input1"
                      beforeLabel="위도"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      beforeLabel="경도"
                      inputId="input2"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      beforeLabel="고도"
                      inputId="input3"
                      styleClassName="hasBeforeText"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">협의조서(기본도정비)</th>
              <td class="text-center">
                <div class="searchColumnInputBox">
                  <BaseRadio id="r01" name="r01" label="유" checked />
                  <BaseRadio id="r02" name="r02" label="무" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">협의조서 내용</th>
              <td class="text-center">
                <BaseInput inputType="text" />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 382px;"
                      before="text"
                      inputId="input4"
                      beforeLabel="PNU:"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 382px;"
                      before="text"
                      beforeLabel="형상일련번호:"
                      inputId="input5"
                      styleClassName="hasBeforeText"
                    />

                    <BaseButton
                      styleClassName="md pd-sm bdGray i-plus-blue"
                      label="추가"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지(1)</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input6"
                      beforeLabel="법정동"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input7"
                      beforeLabel="본번"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input8"
                      beforeLabel="부번"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input9"
                      beforeLabel="대장구분"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input10"
                      beforeLabel="구역일련번호"
                      styleClassName="hasBeforeText"
                    />

                    <BaseButton
                      styleClassName="md pd-sm bdGray i-remove"
                      label="삭제"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지(2)</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input11"
                      beforeLabel="법정동"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input12"
                      beforeLabel="본번"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input13"
                      beforeLabel="부번"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 170px;"
                      before="text"
                      inputId="input14"
                      beforeLabel="대장구분"
                      styleClassName="hasBeforeText"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 159px;"
                      before="text"
                      inputId="input15"
                      beforeLabel="출입구일련번호"
                      styleClassName="hasBeforeText"
                    />

                    <BaseButton
                      styleClassName="md pd-sm bdGray i-remove"
                      label="삭제"
                    />
                  </div>
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
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">
                수정된 파일로 첨부했습니다 확인해주세요.
              </td>
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
              <td class="text-center">
                요청파일이 잘못된 파일로 왔습니다. 다시 보내주세요
              </td>
              <td class="text-center">발신</td>
              <td class="text-center">LX</td>
              <td class="text-center">이OO</td>
              <td class="text-center">2024-07-11</td>
              <td class="text-center">
                <BaseButton
                  label="다운로드"
                  styleClassName="md pd-sm bdBlue i-download"
                />
              </td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">출입구로쓴걸 연결선으로 고쳐주세요.</td>
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
          :descRight="true"
          :descState="true"
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

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 147px;">
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
                <BaseCheckbox id="check2-1" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">연결선</td>
              <td class="text-center">덕진구_1000_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2-2" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">연결선</td>
              <td class="text-center">덕진구_1000_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2-3" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">연결선</td>
              <td class="text-center">덕진구_1000_entrc</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check2-4" :isLabel="true" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">구역</td>
              <td class="text-center">덕진구_2000_entrc</td>
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
            <BaseTabContent :current="current1" name="구역">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 147px;"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 70px" />
                    <col style="width: 130px" />
                    <col style="width: 130px" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <BaseCheckbox id="check3-1" />
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
                        <BaseCheckbox id="check3-2" />
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-center">출입구</td>
                      <td class="text-center">1000</td>
                      <td class="text-center">부산 금정구_1000_entrc</td>
                    </tr>
                    <tr>
                      <td>
                        <BaseCheckbox id="check3-3" />
                      </td>
                      <td class="text-center">2</td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="출입구"> </BaseTabContent>
            <BaseTabContent :current="current1" name="연결선"> </BaseTabContent>
            <BaseTabContent :current="current1" name="위치점"> </BaseTabContent>
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
                      <td class="text-center">덕진구_01_entrc</td>
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

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="현황도/성과도면 등록"
          descText="등록할 신청현황도/성과도면 파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (파일명이 req_로 시작하면 현황도 파일, 대소문자 구분없음)"
          :descRight="true"
          :descState="true"
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

        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 270px" />
            <col style="width: 512px" />
            <col style="width: 270px" />
            <col style="width: 512px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="col" class="text-center">현황도</th>
              <td class="text-center">
                <BaseInput
                  inputType="text"
                  inputValue="현황도 파일명"
                  inlineStyle="width: 300px"
                />
              </td>
              <th scope="col" class="text-center">성과도면</th>
              <td class="text-center">
                <BaseInput
                  inputType="text"
                  inputValue="성과도면 파일명"
                  inlineStyle="width: 300px"
                />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">현황도 변경사유</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 300px;"
                    />
                    <BaseButton styleClassName="md pd-sm bdGray" label="완료" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 147px;">
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 70px" />
            <col style="width: 300px" />
            <col style="width: auto" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">
                <BaseCheckbox id="check6" :isLabel="true" />
              </th>
              <th scope="col" class="text-center">
                <span class="index"></span>
              </th>
              <th scope="col" class="text-center">구분</th>
              <th scope="col" class="text-center">파일명</th>
              <th scope="col" class="text-center">확장자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check7" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">신청현황도</td>
              <td class="text-center">req_덕진구</td>
              <td class="text-center">png</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check8" :isLabel="true" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">성과도면</td>
              <td class="text-center">덕진구</td>
              <td class="text-center">png</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check9" :isLabel="true" />
              </td>
              <td class="text-center">3</td>
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
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const right = ref(true)
const current1 = ref('구역')
const current2 = ref('건물')

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const pageMoveValue = ref(5)
const total = ref(22)

const tabs1 = [
  {
    id: 1,
    name: '구역',
    count: 2,
  },
  {
    id: 2,
    name: '출입구',
    count: 1,
  },
  {
    id: 3,
    name: '연결선',
    count: 1,
  },
  {
    id: 4,
    name: '위치점',
    count: 1,
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
</script>
