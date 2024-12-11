<template>
  <BaseTab>
    <template v-slot:tabItem>
      <BaseTabItem :data="tabs1" v-model="current1" />
    </template>

    <template v-slot:tabContent>
      <BaseTabContent :current="current1" name="건물">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue="2024-05-09"
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
                inputValue="2024-05-09"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">제공물량</th>
              <th scope="col" class="text-center">[KAIS 미처리] <br />의뢰</th>
              <th scope="col" class="text-center">[KAIS 미처리] <br />접수</th>
              <th scope="col" class="text-center">
                [KAIS 미처리] <br />검수보완
              </th>
              <th scope="col" class="text-center">
                [KAIS 미처리] <br />검사보완
              </th>
              <th scope="col" class="text-center">취소건수</th>
              <th scope="col" class="text-center">목표량</th>
              <th scope="col" class="text-center">요청률(%)</th>
              <th scope="col" class="text-center">동별정보<br />제공물량</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">30</td>
              <td class="text-center">100</td>
              <td class="text-center">79</td>
              <td class="text-center">11</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">30</td>
              <td class="text-center">100</td>
              <td class="text-center">79</td>
              <td class="text-center">11</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
              <td class="text-center">30</td>
              <td class="text-center">100</td>
              <td class="text-center">79</td>
              <td class="text-center">11</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group1.currentPage"
          :totalPages="pagination.group1.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="도로">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect
              initialSelectValue="일반"
              :options="selectList"
              inlineStyle="min-width: 90px;"
            />
            <BaseSelect
              initialSelectValue="신규"
              :options="selectList"
              inlineStyle="min-width: 90px;"
            />
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList"
              inlineStyle="min-width: 120px;"
            />
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList"
              inlineStyle="min-width: 120px;"
            />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                inputValue="2024-06-03"
                styleClassName="hasCalendar"
                inlineStyle="width: 150px;"
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
                inputValue="2024-06-03"
                styleClassName="hasCalendar"
                inlineStyle="width: 150px;"
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
            <div class="searchButtonGroup">
              <BaseButton styleClassName="bdGray md pd-sm" label="1개월" />
              <BaseButton styleClassName="bdGray md pd-sm" label="3개월" />
              <BaseButton styleClassName="bdGray md pd-sm" label="6개월" />
              <BaseButton styleClassName="bdGray md pd-sm" label="1년" />
            </div>
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">제공물량</th>
              <th scope="col" class="text-center">[KAIS 미처리] <br />의뢰</th>
              <th scope="col" class="text-center">[KAIS 미처리] <br />접수</th>
              <th scope="col" class="text-center">
                [KAIS 미처리] <br />검수보완
              </th>
              <th scope="col" class="text-center">
                [KAIS 미처리] <br />검사보안
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group2.currentPage"
          :totalPages="pagination.group2.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="광역도로">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
            <div class="searchColumnInputBox">
              <BaseInput
                inputType="date"
                styleClassName="hasCalendar"
                inputValue="2024-06-03"
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">도로구간<br />검수요청</th>
              <th scope="col" class="text-center">도로구간<br />검사요청</th>
              <th scope="col" class="text-center">도로구간<br />완료</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">실폭도로 <br />완료</th>
              <th scope="col" class="text-center">기초구간 <br />검수요청</th>
              <th scope="col" class="text-center">기초구간 <br />검사요청</th>
              <th scope="col" class="text-center">기초구간 <br />완료</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group3.currentPage"
          :totalPages="pagination.group3.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="사물주소">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">
                [사물주소]<br />의뢰 미처리
              </th>
              <th scope="col" class="text-center">
                [사물주소]<br />접수 미처리
              </th>
              <th scope="col" class="text-center">
                [사물주소]<br />검수보완 미처리
              </th>
              <th scope="col" class="text-center">
                [사물주소]<br />검수보안 미처리
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group4.currentPage"
          :totalPages="pagination.group4.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="행정구역 통리">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">
                [행정구역 통리]<br />의뢰 미처리
              </th>
              <th scope="col" class="text-center">
                [행정구역 통리]<br />접수 미처리
              </th>
              <th scope="col" class="text-center">
                [행정구역 통리]<br />검수보완 미처리
              </th>
              <th scope="col" class="text-center">
                [행정구역 통리]<br />검수의뢰 미처리
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group5.currentPage"
          :totalPages="pagination.group5.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="입체도로">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">
                [입체도로]<br />의뢰 미처리
              </th>
              <th scope="col" class="text-center">
                [입체도로]<br />접수 미처리
              </th>
              <th scope="col" class="text-center">
                [입체도로]<br />검수보완 미처리
              </th>
              <th scope="col" class="text-center">
                [입체도로]<br />검수의뢰 미처리
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group6.currentPage"
          :totalPages="pagination.group6.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="내부도로">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">
                [내부도로]<br />의뢰 미처리
              </th>
              <th scope="col" class="text-center">
                [내부도로]<br />접수 미처리
              </th>
              <th scope="col" class="text-center">
                [내부도로]<br />검수보완 미처리
              </th>
              <th scope="col" class="text-center">
                [내부도로]<br />검수의뢰 미처리
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group6.currentPage"
          :totalPages="pagination.group6.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="장소지능정보">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
            <col style="width: 104px" />
          </colgroup>
          <thead>
            <tr class="tr-h73">
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">요청건수</th>
              <th scope="col" class="text-center">[전체]<br />미처리 건수</th>
              <th scope="col" class="text-center">[전체]<br />처리건수</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
              <th scope="col">실폭도로<br />검사요청</th>
              <th scope="col" class="text-center">제공물량</th>
              <th scope="col" class="text-center">
                [장소지능정보]<br />의뢰 미처리
              </th>
              <th scope="col" class="text-center">
                [장소지능정보]<br />접수 미처리
              </th>
              <th scope="col" class="text-center">
                [장소지능정보]<br />검수보완 미처리
              </th>
              <th scope="col" class="text-center">
                [장소지능정보]<br />검수의뢰 미처리
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">서울특별시</td>
              <td class="text-center tdBlue">종로구</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
              <td class="text-center">95</td>
              <td class="text-center">375</td>
              <td class="text-center">0</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">1</td>
              <td class="text-center">3</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group6.currentPage"
          :totalPages="pagination.group6.totalPages"
        />
      </BaseTabContent>
      <BaseTabContent :current="current1" name="수시정비">
        <div class="searchArea">
          <div class="searchColumn">
            <span class="searchLabel">구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">등록일자</span>
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
                inputValue="2024-06-03"
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

        <BaseTable>
          <colgroup>
            <col style="width: auto" />
            <col style="width: 260px" />
            <col style="width: 200px" />
            <col style="width: 260px" />
            <col style="width: 260px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" class="text-center">시도명</th>
              <th scope="col" class="text-center">시군구명</th>
              <th scope="col" class="text-center">[전체]<br />제공물량</th>
              <th scope="col" class="text-center">[전체]<br />완료물량</th>
              <th scope="col" class="text-center">[전체]<br />공정율(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
            </tr>
            <tr class="trBlue">
              <td class="text-center">총계</td>
              <td class="text-center">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
            </tr>
            <tr>
              <td class="text-center tdBlue">총계</td>
              <td class="text-center tdBlue">소계</td>
              <td class="text-center">100</td>
              <td class="text-center">5</td>
              <td class="text-center">95</td>
            </tr>
          </tbody>
        </BaseTable>

        <Pagination
          :currentPage="pagination.group6.currentPage"
          :totalPages="pagination.group6.totalPages"
        />
      </BaseTabContent>
    </template>
  </BaseTab>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 10,
  },
  group2: {
    currentPage: 1,
    totalPages: 10,
  },
  group3: {
    currentPage: 1,
    totalPages: 10,
  },
  group4: {
    currentPage: 1,
    totalPages: 10,
  },
  group5: {
    currentPage: 1,
    totalPages: 10,
  },
  group6: {
    currentPage: 1,
    totalPages: 10,
  },
  group7: {
    currentPage: 1,
    totalPages: 10,
  },
  group8: {
    currentPage: 1,
    totalPages: 10,
  },
  group9: {
    currentPage: 1,
    totalPages: 10,
  },
})

const current1 = ref('건물')

const tabs1 = [
  {
    id: 1,
    name: '건물',
  },
  {
    id: 2,
    name: '도로',
  },
  {
    id: 3,
    name: '광역도로',
  },
  {
    id: 4,
    name: '사물주소',
  },
  {
    id: 5,
    name: '행정구역 통리',
  },
  {
    id: 6,
    name: '입체도로',
  },
  {
    id: 7,
    name: '내부도로',
  },
  {
    id: 8,
    name: '장소지능정보',
  },
  {
    id: 9,
    name: '수시정비',
  },
]

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
</script>
