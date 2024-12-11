<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">접수관리번호</span>
            <BaseInput inputType="text" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">진행상태</span>
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
          <col style="width: 60px" />
          <col style="width: 150px" />
          <col style="width: 130px" />
          <col style="width: 220px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: 110px" />
          <col style="width: auto" />
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
            <th scope="col" class="text-center">내부도로종류</th>
            <th scope="col" class="text-center">신청일자</th>
            <th scope="col" class="text-center">경과일</th>
            <th scope="col" class="text-center">신청메모</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">구로구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">지하철 역사</td>
            <td class="text-center">2024-07-22</td>
            <td class="text-center">2</td>
            <td class="text-center">신도림역</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">구로구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">지하철 역사</td>
            <td class="text-center">2024-07-22</td>
            <td class="text-center">2</td>
            <td class="text-center">신도림역</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">구로구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">지하철 역사</td>
            <td class="text-center">2024-07-22</td>
            <td class="text-center">2</td>
            <td class="text-center">신도림역</td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">구로구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">지하철 역사</td>
            <td class="text-center">2024-07-22</td>
            <td class="text-center">2</td>
            <td class="text-center">신도림역</td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">서울특별시</td>
            <td class="text-center">구로구</td>
            <td class="text-center">R2016451110000000029</td>
            <td class="text-center">현행화 접수</td>
            <td class="text-center">지하철 역사</td>
            <td class="text-center">2024-07-22</td>
            <td class="text-center">2</td>
            <td class="text-center">신도림역</td>
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
              <td class="text-left">첨부파일 추가하였습니다.</td>
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
              <td class="text-left">첨부파일 재첨부 부탁드립니다.</td>
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
        <SectionTitle title="현행화 이력 " />

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
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">2024-07-05</td>
              <td class="text-center">현행화 의뢰</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">2</td>
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">2024-07-05</td>
              <td class="text-center">현행화 접수</td>
              <td class="text-center"></td>
              <td class="text-left"></td>
              <td class="text-center">김**</td>
            </tr>
            <tr>
              <td class="text-center">3</td>
              <td class="text-center">R2016451110000000004</td>
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
              <td class="text-left">불일치한 공간정보 자료 수정바랍니다.</td>
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
        <SectionTitle title="성과물 공간정보파일 등록 정보" />

        <BaseTab styleClassName="tabType2">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="건물">
              <div class="sectionBox">
                <BaseTable
                  styleClassName="overflow-y"
                  inlineStyle="max-height: 147px;"
                >
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 130px" />
                    <col style="width: 130px" />
                    <col style="width: auto" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" class="text-center">
                        <BaseCheckbox id="check1" :isLabel="true" />
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
                      <td class="text-center">
                        <BaseCheckbox id="check2" :isLabel="true" />
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-center">건물</td>
                      <td class="text-center">02</td>
                      <td class="text-center">경기도_02_manage</td>
                    </tr>
                  </tbody>
                </BaseTable>
              </div>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="출입구"> </BaseTabContent>
            <BaseTabContent :current="current1" name="연결선"> </BaseTabContent>
            <BaseTabContent :current="current1" name="도로구간">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="실폭도로">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="수직연결점">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="수직이동점">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="구조물의범위">
            </BaseTabContent>
            <BaseTabContent :current="current1" name="개표구"> </BaseTabContent>
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
                      <td class="text-center">덕진구_01_출입구</td>
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
        <SectionTitle title="기타참고자료 등록" />

        <div class="rowTableItem inSection flexNone">
          <BaseInput
            inputType="text"
            inputValue="파일 없음"
            inlineStyle="width: 500px;"
            disabled
          />
          <FileInputWrapper buttonStyleClassName="pd-sm" label="파일 선택">
            <template v-slot:right>
              <FileInputBox
                :maxWidth="500"
                inputId="f01"
                filePlaceholder="선택된 파일없음"
              />
            </template>
            <template v-slot:button>
              <BaseButton styleClassName="btnRemove" />
            </template>
          </FileInputWrapper>
        </div>
      </div>
    </section>

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="현황도 (총 10개까지 등록가능)"
          :right="true"
          :required="true"
        >
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
            <col style="width: 200px" />
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
              <th scope="col">접수관리번호</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">등록일시</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check16" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">현황도</td>
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">스타필드 코엑스몰 지하 2층</td>
              <td class="text-center">JPG</td>
              <td class="text-center">2024-07-09 15:43:43</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="현황도 정보" :right="true">
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
              <th scope="col">접수관리번호</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">등록일시</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check20" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">현황도</td>
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">스타필드 코엑스몰 지하 1층</td>
              <td class="text-center">JPG</td>
              <td class="text-center">2024-07-09 15:43:43</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="성과도면 (전체구간)" :required="true" />

        <div class="sectionInnerContainer row">
          <div class="sectionInnerBox">
            <SectionTitle
              title="전체구간"
              :right="true"
              :hasFile="true"
              titleType="dot"
              rightGroupStyle="max-width: 459px"
            >
              <template v-slot:right>
                <FileInputWrapper
                  buttonStyleClassName="pd-sm"
                  label="파일 선택"
                >
                  <template v-slot:left>
                    <FileInputBox
                      :right="true"
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
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="층별 성과도면 등록" :right="true" :required="true">
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
            <col style="width: 200px" />
            <col style="width: auto" />
            <col style="width: 200px" />
            <col style="width: 200px" />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">
                <BaseCheckbox id="check17" :isLabel="true" />
              </th>
              <th scope="col">
                <span class="hidden">index</span>
              </th>
              <th scope="col">파일구분</th>
              <th scope="col">접수관리번호</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">등록일시</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check18" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">지하2층</td>
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">스타필드 코엑스몰 지하 2층</td>
              <td class="text-center">JPG</td>
              <td class="text-center">2024-07-09 15:43:43</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle
          title="층별 성과도면 등록 정보"
          :right="true"
          :required="true"
        >
          <template v-slot:right>
            <BaseButton label="파일 선택" styleClassName="md pd-sm bgGray" />
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
            <col style="width: 200px" />
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
              <th scope="col">접수관리번호</th>
              <th scope="col">파일명</th>
              <th scope="col">파일확장자</th>
              <th scope="col">등록일시</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <BaseCheckbox id="check20" :isLabel="true" />
              </td>
              <td class="text-center">1</td>
              <td class="text-center">지하2층</td>
              <td class="text-center">R2016451110000000004</td>
              <td class="text-center">스타필드 코엑스몰 지하 2층</td>
              <td class="text-center">JPG</td>
              <td class="text-center">2024-07-09 15:43:43</td>
            </tr>
          </tbody>
        </BaseTable>
      </div>
    </section>

    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="내부도로의뢰 첨부파일" :right="true">
          <template v-slot:right>
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdBlue i-download"
            />
            <ButtonCollapse
              :state="collapse"
              @update:state="collapse = $event"
            />
          </template>
        </SectionTitle>

        <BaseCollapse :activeState="collapse">
          <BaseTable>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 70px" />
              <col style="width: 150px" />
              <col style="width: 200px" />
              <col style="width: auto" />
              <col style="width: 200px" />
              <col style="width: 200px" />
            </colgroup>

            <thead>
              <tr>
                <th scope="col">
                  <BaseCheckbox id="check21" :isLabel="true" />
                </th>
                <th scope="col">
                  <span class="hidden">index</span>
                </th>
                <th scope="col">파일구분</th>
                <th scope="col">접수관리번호</th>
                <th scope="col">파일명</th>
                <th scope="col">파일확장자</th>
                <th scope="col">등록일시</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <BaseCheckbox id="check22" :isLabel="true" />
                </td>
                <td class="text-center">1</td>
                <td class="text-center">지하2층</td>
                <td class="text-center">R2016451110000000004</td>
                <td class="text-center">스타필드 코엑스몰 현황도</td>
                <td class="text-center">pdf</td>
                <td class="text-center">2024-07-09 15:43:43</td>
              </tr>
            </tbody>
          </BaseTable>
        </BaseCollapse>
      </div>
    </section>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import Pagination from '@/components/sub/paging/Pagination.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import BaseCollapse from '@/components/base/BaseCollapse.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import NoData from '@/components/sub/section/NoData.vue'
import ButtonCollapse from '@/components/button/ButtonCollapse.vue'

const right = ref(true)
const current1 = ref('건물')
const current2 = ref('건물')
const collapse = ref(true)

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
    name: '건물',
  },
  {
    id: 2,
    name: '출입구',
  },
  {
    id: 3,
    name: '연결선',
  },
  {
    id: 4,
    name: '도로구간',
  },
  {
    id: 5,
    name: '실폭도로',
  },
  {
    id: 6,
    name: '수직연결점',
  },
  {
    id: 7,
    name: '수직이동점',
  },
  {
    id: 8,
    name: '구조물의범위',
  },
  {
    id: 9,
    name: '개표구',
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
