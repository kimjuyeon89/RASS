<template>
  <SubRoot>
    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          :title="
            current1 === '신규정비'
              ? '수시정비 현행화 신규 등록'
              : '수시정비 현행화'
          "
        />

        <BaseTab styleClassName="hasTabLength7">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="신규정비">
              <BaseTab styleClassName="hasTabLngth9 tabType2">
                <template v-slot:tabItem>
                  <BaseTabItem :data="tabs2" v-model="current2">
                    <template v-slot:listButton>
                      <BaseButton
                        styleClassName="md pd-sm bgAqua"
                        label="검수요청"
                      />
                    </template>
                  </BaseTabItem>
                </template>

                <template v-slot:tabContent>
                  <BaseTabContent :current="current2" name="건물">
                    <section class="sectionContainer col">
                      <div class="sectionBox">
                        <BaseTable
                          styleClassName="overflow-y"
                          inlineStyle="max-height: 146px"
                        >
                          <colgroup>
                            <col style="width: 60px" />
                            <col style="width: 70px" />
                            <col style="width: 300px" />
                            <col style="width: 300px" />
                            <col style="width: 300px" />
                            <col style="width: auto" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th scope="col" class="text-center">
                                <BaseCheckbox id="check1" :isLabel="true" />
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
                                <BaseCheckbox id="check2" :isLabel="true" />
                              </td>
                              <td class="text-center">1</td>
                              <td class="text-center">건물현행화</td>
                              <td class="text-center">출입구</td>
                              <td class="text-center">1</td>
                              <td class="text-center">om_lii_1_entrc</td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                <BaseCheckbox id="check3" :isLabel="true" />
                              </td>
                              <td class="text-center">2</td>
                              <td class="text-center"></td>
                              <td class="text-center"></td>
                              <td class="text-center"></td>
                              <td class="text-center"></td>
                            </tr>
                          </tbody>
                        </BaseTable>
                      </div>
                    </section>

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
                            <BaseButton
                              label="양식 다운로드"
                              styleClassName="md pd-sm bdBlue i-upload"
                            />
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
                              <td class="text-center">출입구</td>
                              <td class="text-center">
                                서울시 금천구_1000_entrc
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                <BaseCheckbox id="check6" />
                              </td>
                              <td class="text-center">2</td>
                              <td class="text-center">출입구</td>
                              <td class="text-center">
                                서울시 금천구_1000_entrc
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                <BaseCheckbox id="check7" />
                              </td>
                              <td class="text-center">3</td>
                              <td class="text-center">출입구</td>
                              <td class="text-center">
                                서울시 금천구_1000_entrc
                              </td>
                            </tr>
                            <tr>
                              <td class="text-center">
                                <BaseCheckbox id="check8" />
                              </td>
                              <td class="text-center">4</td>
                              <td class="text-center">출입구</td>
                              <td class="text-center">
                                서울시 금천구_1000_entrc
                              </td>
                            </tr>
                          </tbody>
                        </BaseTable>
                      </div>
                    </section>
                    <!-- //sectionContainer -->
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
            </BaseTabContent>
            <BaseTabContent :current="current1" name="반려관리">
              <div class="searchArea">
                <!-- searchColumnRowContainer -->
                <div class="searchColumnRowContainer">
                  <!-- searchColumnRow -->
                  <div class="searchColumnRow" style="padding-right: 119px">
                    <div class="searchColumn">
                      <span class="searchLabel">행정구역</span>

                      <BaseSelect
                        initialSelectValue="전체"
                        :options="selectList"
                      />

                      <BaseSelect
                        initialSelectValue="전체"
                        :options="selectList"
                      />

                      <BaseSelect
                        initialSelectValue="전체"
                        :options="selectList"
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
                        :options="selectList"
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
                <BaseTable>
                  <colgroup>
                    <col style="width: 70px" />
                    <col style="width: 249px" />
                    <col style="width: 249px" />
                    <col style="width: 249px" />
                    <col style="width: 249px" />
                    <col style="width: 249px" />
                    <col style="width: 249px" />
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
                      <th scope="col" class="text-center">등록일자</th>
                      <th scope="col" class="text-center">구분</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="trBlue">
                      <td class="text-center">1</td>
                      <td class="text-center">전라북도</td>
                      <td class="text-center">원산구</td>
                      <td class="text-center">전라북도 완산구-76126</td>
                      <td class="text-center">검수보완 (LX본사)</td>
                      <td class="text-center">2024-07-28</td>
                      <td class="text-center">건물</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center">전라북도</td>
                      <td class="text-center">원산구</td>
                      <td class="text-center">전라북도 완산구-76126</td>
                      <td class="text-center">검수보완 (LX본사)</td>
                      <td class="text-center">2024-07-28</td>
                      <td class="text-center">건물</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center">전라북도</td>
                      <td class="text-center">원산구</td>
                      <td class="text-center">전라북도 완산구-76126</td>
                      <td class="text-center">검수보완 (LX본사)</td>
                      <td class="text-center">2024-07-28</td>
                      <td class="text-center">건물</td>
                    </tr>
                    <tr>
                      <td class="text-center">4</td>
                      <td class="text-center">전라북도</td>
                      <td class="text-center">원산구</td>
                      <td class="text-center">전라북도 완산구-76126</td>
                      <td class="text-center">검수보완 (LX본사)</td>
                      <td class="text-center">2024-07-28</td>
                      <td class="text-center">건물</td>
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

              <section class="sectionContainer col">
                <BaseTab styleClassName="hasTabLngth9 tabType2">
                  <template v-slot:tabItem>
                    <BaseTabItem :data="tabs3" v-model="current3" />
                  </template>

                  <template v-slot:tabContent>
                    <BaseTabContent :current="current3" name="건물">
                      <section class="sectionContainer col">
                        <div class="sectionBox">
                          <BaseTable
                            styleClassName="overflow-y"
                            inlineStyle="max-height: 146px"
                          >
                            <colgroup>
                              <col style="width: 60px" />
                              <col style="width: 70px" />
                              <col style="width: 300px" />
                              <col style="width: 300px" />
                              <col style="width: 300px" />
                              <col style="width: auto" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th scope="col" class="text-center">
                                  <BaseCheckbox id="check9" :isLabel="true" />
                                </th>
                                <th scope="col" class="text-center"></th>
                                <th scope="col" class="text-center">구분</th>
                                <th scope="col" class="text-center">
                                  파일구분
                                </th>
                                <th scope="col" class="text-center">
                                  일련번호
                                </th>
                                <th scope="col" class="text-center">파일명</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check10" :isLabel="true" />
                                </td>
                                <td class="text-center">1</td>
                                <td class="text-center">건물현행화</td>
                                <td class="text-center">출입구</td>
                                <td class="text-center">1</td>
                                <td class="text-center">om_lii_1_entrc</td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check11" :isLabel="true" />
                                </td>
                                <td class="text-center">2</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                              </tr>
                            </tbody>
                          </BaseTable>
                        </div>
                      </section>

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
                              <BaseButton
                                label="양식 다운로드"
                                styleClassName="md pd-sm bdBlue i-upload"
                              />
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
                                  <BaseCheckbox id="check12" />
                                </th>
                                <th scope="col" class="text-center"></th>
                                <th scope="col" class="text-center">
                                  파일구분
                                </th>
                                <th scope="col" class="text-center">파일명</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check13" />
                                </td>
                                <td class="text-center">1</td>
                                <td class="text-center">출입구</td>
                                <td class="text-center">
                                  서울시 금천구_1000_entrc
                                </td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check14" />
                                </td>
                                <td class="text-center">2</td>
                                <td class="text-center">출입구</td>
                                <td class="text-center">
                                  서울시 금천구_1000_entrc
                                </td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check7" />
                                </td>
                                <td class="text-center">3</td>
                                <td class="text-center">출입구</td>
                                <td class="text-center">
                                  서울시 금천구_1000_entrc
                                </td>
                              </tr>
                              <tr>
                                <td class="text-center">
                                  <BaseCheckbox id="check8" />
                                </td>
                                <td class="text-center">4</td>
                                <td class="text-center">출입구</td>
                                <td class="text-center">
                                  서울시 금천구_1000_entrc
                                </td>
                              </tr>
                            </tbody>
                          </BaseTable>
                        </div>
                      </section>
                      <!-- //sectionContainer -->

                      <section class="sectionContainer col">
                        <div class="sectionBox">
                          <SectionTitle title="협의의견">
                            <template v-slot:descRight>
                              <BaseButton
                                label="상세보기"
                                styleClassName="md pd-sm bdGray"
                              />
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
                                <th scope="col" class="text-center">
                                  협의내용 구분
                                </th>
                                <th scope="col" class="text-center">
                                  협의내용
                                </th>
                                <th scope="col" class="text-center">
                                  발신구분
                                </th>
                                <th scope="col" class="text-center">
                                  작성기관
                                </th>
                                <th scope="col" class="text-center">작성자</th>
                                <th scope="col" class="text-center">
                                  발신/수신일시
                                </th>
                                <th scope="col" class="text-center">
                                  첨부파일
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="trBlue">
                                <td class="text-center">1</td>
                                <td class="text-center">상세신청배치도</td>
                                <td class="text-center">
                                  상세신청배치도입니다
                                </td>
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
                                <td class="text-center">
                                  요청파일이 잘못된 파일로 왔습니다.
                                </td>
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
                                <td class="text-center">
                                  요청파일이 잘못된 파일로 왔습니다.
                                </td>
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
                          <SectionTitle title="이력" />

                          <BaseTable>
                            <colgroup>
                              <col style="width: 70px" />
                              <col style="width: 230px" />
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
                                <th scope="col" class="text-center">
                                  접수관리번호
                                </th>
                                <th scope="col" class="text-center">상태</th>
                                <th scope="col" class="text-center">일자</th>
                                <th scope="col" class="text-center">구분</th>
                                <th scope="col" class="text-center">내용</th>
                                <th scope="col" class="text-center">담당자</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="trBlue">
                                <td class="text-center">1</td>
                                <td class="text-center"></td>
                                <td class="text-center">검사완료</td>
                                <td class="text-center">2023-12-28 13:01:56</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">김**</td>
                              </tr>
                              <tr>
                                <td class="text-center">2</td>
                                <td class="text-center"></td>
                                <td class="text-center">검사완료</td>
                                <td class="text-center">2023-12-28 13:01:56</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">김**</td>
                              </tr>
                              <tr>
                                <td class="text-center">3</td>
                                <td class="text-center"></td>
                                <td class="text-center">검사완료</td>
                                <td class="text-center">2023-12-28 13:01:56</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">김**</td>
                              </tr>
                              <tr>
                                <td class="text-center">4</td>
                                <td class="text-center"></td>
                                <td class="text-center">검사완료</td>
                                <td class="text-center">2023-12-28 13:01:56</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">김**</td>
                              </tr>
                              <tr>
                                <td class="text-center">5</td>
                                <td class="text-center"></td>
                                <td class="text-center">검사완료</td>
                                <td class="text-center">2023-12-28 13:01:56</td>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center">김**</td>
                              </tr>
                            </tbody>
                          </BaseTable>
                        </div>

                        <div class="sectionBox">
                          <SectionTitle title="현행화 이슈">
                            <template v-slot:descRight>
                              <BaseButton
                                label="상세보기"
                                styleClassName="md pd-sm bdGray"
                              />
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
                                <th scope="col" class="text-center">
                                  이슈내용
                                </th>
                                <th scope="col" class="text-center">작성자</th>
                                <th scope="col" class="text-center">
                                  작성일시
                                </th>
                                <th scope="col" class="text-center">
                                  첨부파일
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="trBlue">
                                <td class="text-center">1</td>
                                <td class="text-center">
                                  20일날 파일받기로 했습니다.
                                </td>
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
                    </BaseTabContent>

                    <BaseTabContent :current="current3" name="도로">
                      <div>도로</div>
                    </BaseTabContent>
                    <BaseTabContent :current="current3" name="사물주소">
                      <div>사물주소</div>
                    </BaseTabContent>
                    <BaseTabContent :current="current3" name="통리">
                      <div>통리</div>
                    </BaseTabContent>
                  </template>
                </BaseTab>
              </section>
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
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const descState = ref(true)

const tabs1 = [
  {
    id: 1,
    name: '신규정비',
  },
  {
    id: 2,
    name: '반려관리',
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

const tabs3 = [
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

const current1 = ref('신규정비')
const current2 = ref('건물')
const current3 = ref('건물')
</script>
