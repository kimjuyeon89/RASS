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
              <BaseInput inputType="date" inputValue="">
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
              <th scope="col" class="text-center">
                <span class="required center">작성구분</span>
              </th>
              <td class="text-center">
                <div class="searchColumnInputBox wrap">
                  <BaseRadio
                    name="r01"
                    id="r01"
                    label="기존측량자료 활용(기준점)"
                  />
                  <BaseRadio
                    name="r01"
                    id="r02"
                    label="기존측량자료 활용(현형)"
                  />
                  <BaseRadio name="r01" id="r03" label="참고도면 활용" />
                  <BaseRadio name="r01" id="r04" label="지적현황측량" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">측량 기준점 이동수치</th>
              <td class="text-center">
                <BaseInput
                  inputType="text"
                  inputValue=""
                  inlineStyle="max-width: 500px;"
                />
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">측량소재지</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                  </div>

                  <div class="rowTableItem">
                    <div class="searchColumnInputBox wide">
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />
                      <span class="betweenText">~</span>
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />

                      <BaseButton
                        label="삭제"
                        styleClassName="md pd-sm bdGray i-remove"
                      />
                      <BaseButton
                        label="대표소재지복사"
                        styleClassName="md pd-sm bgGray wd160"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col">
                <span class="required center">정합계수</span>
              </th>
              <td>
                <div class="searchColumnInputBox">
                  <BaseRadio name="r02" id="r05" label="추가작성" />
                  <BaseRadio name="r02" id="r06" label="해당없음" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">정합계수 파일</th>
              <td>
                <div class="rowTableItem wide flexNone">
                  <BaseInput
                    inputType="text"
                    inputValue="파일 없음"
                    inlineStyle="width: 337px;"
                    disabled
                  />

                  <FileInputWrapper :maxWidth="300" label="파일 선택">
                    <template v-slot:right>
                      <FileInputBox filePlaceholder="선택된 파일없음" />
                    </template>
                    <template v-slot:button>
                      <BaseButton styleClassName="btnRemove" />
                    </template>
                  </FileInputWrapper>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">상세신청배치도 제공요청</span>
              </th>
              <td>
                <div class="rowTableItemBox">
                  <BaseRadio name="r03" id="r07" label="유" />
                  <BaseRadio name="r03" id="r08" label="무" />

                  <p class="tableDescription">
                    ※ 상세신청배치도가 존재합니다. (수신날짜: 2023/04/01)
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">
                <span class="required center">대표소재지</span>
              </th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                  </div>

                  <div class="rowTableItem">
                    <BaseCheckbox id="check1" :isLabel="true" label="산" />
                  </div>

                  <div class="rowTableItem">
                    <div class="searchColumnInputBox wide">
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />
                      <span class="betweenText">~</span>
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지1</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                  </div>
                  <div class="rowTableItem">
                    <BaseCheckbox id="check2" :isLabel="true" label="산" />
                  </div>

                  <div class="rowTableItem">
                    <div class="searchColumnInputBox wide">
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />
                      <span class="betweenText">~</span>
                      <BaseInput
                        inputType="text"
                        inputValue=""
                        inlineStyle="width: 139px;"
                      />
                      <BaseButton
                        label="검색"
                        styleClassName="md pd-sm bdGray i-search"
                      />
                      <BaseButton
                        label="추가"
                        styleClassName="md pd-sm bdGray i-plus-blue"
                      />
                      <BaseButton
                        label="대표소재지복사"
                        styleClassName="md pd-sm bgGray"
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지2</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지3</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지4</th>
              <td class="text-center">
                <div class="rowTableItemBox">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="col" class="text-center">관련소재지5</th>
              <td class="text-center overflow-y">
                <div class="rowTableItemBox column" style="max-height: 130px">
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                  <div class="rowTableItem">
                    <BaseInput
                      inputType="text"
                      inputValue=""
                      inlineStyle="width: 500px;"
                    />
                    <BaseButton
                      label="삭제"
                      styleClassName="md pd-sm bdGray i-remove"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </BaseTable>

        <p class="tableDescription text-color-blue2">
          ※ “상세신청배치도 제공요청” 유무는 건물용도명이
          아파트연립주택,종합병원,대학교,전문대학,국가기관청사,자치단체청사,오피스텔
          일 경우 표시 됩니다. 원점 분류 좌표계는 5179로 들어갑니다.
        </p>
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
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
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
              <td class="text-center">의견</td>
              <td class="text-center">
                수정된 파일로 첨부했습니다. 확인해주세요.
              </td>
              <td class="text-center">수신</td>
              <td class="text-center">KAIS</td>
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
              <td class="text-center">상세의뢰배치도</td>
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
              <td class="text-center">출입구로쓴걸 연결선으로 고쳐주세요.</td>
              <td class="text-center">수신</td>
              <td class="text-center">KAIS</td>
              <td class="text-center">아무개</td>
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
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">신청</td>
              <td class="text-center"></td>
              <td class="text-left">신청합니다.</td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">R2016451110000000029</td>
              <td class="text-center">2024-05-24</td>
              <td class="text-center">접수</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">R2016451110000000029</td>
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
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="이슈관리 (LX 내부용)" :right="right">
          <template v-slot:right>
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
              <th scope="col" class="text-center">
                <span class="hidden">index</span>
              </th>
              <th scope="col" class="text-center">이슈내용</th>
              <th scope="col" class="text-center">작성자</th>
              <th scope="col" class="text-center">작성일</th>
              <th scope="col" class="text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">1</td>
              <td class="text-left">20일날 파일 받기로 했습니다.</td>
              <td class="text-center">김**</td>
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
              <td class="text-left">파일 수령했습니다.</td>
              <td class="text-center">김**</td>
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
              <td class="text-left">확인했습니다.</td>
              <td class="text-center">김**</td>
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
              <td class="text-center">경기도_297_manage</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check3" />
              </td>
              <td class="text-center">2</td>
              <td class="text-center">출입구</td>
              <td class="text-center">경기도_297_manage</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check4" />
              </td>
              <td class="text-center">3</td>
              <td class="text-center">출입구</td>
              <td class="text-center">경기도_297_manage</td>
            </tr>
            <tr>
              <td class="text-center">
                <BaseCheckbox id="check5" />
              </td>
              <td class="text-center">4</td>
              <td class="text-center">출입구</td>
              <td class="text-center">경기도_297_manage</td>
            </tr>
          </tbody>
        </BaseTable>

        <p class="tableDescription text-color-blue2">
          ※ 건물군내 상세정보는 건물용도명이
          아파트연림주택,종합병원,대학교,전문대학,국가기관청사,자치단체청사,오피스텔
          일 경우 등록 가능합니다.
        </p>

        <ExplanationBox title="파일형식" :data="explanationData" />
      </div>
    </section>
    <!-- //sectionContainer -->

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="수시정비 공간정보파일 등록 정보" />

        <BaseTab styleClassName="hasTabLength9 tabType2">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="건물">
              <div class="sectionBox">
                <BaseTable>
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
                        <BaseCheckbox id="check6" />
                      </th>
                      <th scope="col" class="text-center"></th>
                      <th scope="col" class="text-center">구분</th>
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
                      <td class="text-center">장소지능정보</td>
                      <td class="text-center">덕진구_80121_출입구</td>
                      <td class="text-center">1</td>
                      <td class="text-center">om_lii_1_entrc</td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <BaseCheckbox id="check8" />
                      </td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                    <tr>
                      <td class="text-center">
                        <BaseCheckbox id="check9" />
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
                <SectionTitle
                  title="신청배치도/성과도면 등록"
                  descText="등록할 의뢰현황도/성과도면 파일을 끌어넣기(Drag&Drop)를 통해서 추가할 수 있습니다. (파일명이 req_로 시작하면 현황도 파일, 대소문자 구분없음)"
                  :descRight="descState"
                  :descState="descState"
                >
                  <template v-slot:descRight>
                    <BaseButton
                      label="파일 선택"
                      styleClassName="md pd-sm bgGray"
                    />
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

                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 193px"
                >
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
                        <BaseCheckbox id="check10" />
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
            </BaseTabContent>
            <BaseTabContent :current="current1" name="건물군"> </BaseTabContent>
            <BaseTabContent :current="current1" name="출입구"> </BaseTabContent>
            <BaseTabContent :current="current1" name="연결선"> </BaseTabContent>
            <BaseTabContent :current="current1" name="동별출입구">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="주차장 출입구">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="단지내도로">
            </BaseTabContent>
          </template>
        </BaseTab>
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

const right = ref(true)
const descState = ref(true)
const current1 = ref('건물')

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
})

const tabs1 = [
  {
    id: 1,
    name: '건물',
    count: 2,
  },
  {
    id: 2,
    name: '건물군',
    count: 1,
  },
  {
    id: 3,
    name: '출입구',
    count: 1,
  },
  {
    id: 4,
    name: '연결선',
    count: 1,
  },
  {
    id: 5,
    name: '동별출입구',
    count: 0,
  },
  {
    id: 6,
    name: '주차장 출입구',
    count: 0,
  },
  {
    id: 7,
    name: '단지내도로',
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
