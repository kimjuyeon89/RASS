<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel required">시/도</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel required">시/군/구</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel required">읍/면/동</span>

            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
        </div>
        <!-- //searchColumnRow -->

        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel required">리</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel required">대지/산 구분</span>
            <BaseSelect initialSelectValue="전체" :options="selectList" />
          </div>
          <div class="searchColumn">
            <span class="searchLabel required">지번</span>

            <div class="searchColumnInputBox">
              <BaseInput inputType="text" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" />
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
      <BaseTable styleClassName="overflow-y" inlineStyle="max-height: 202px;">
        <colgroup>
          <col style="width: 70px" />
          <col style="width: 213px" />
          <col style="width: 213px" />
          <col style="width: 80px" />
          <col style="width: 100px" />
          <col style="width: auto" />
          <col style="width: 150px" />
          <col style="width: 120px" />
          <col style="width: 150px" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">통합분류코드</th>
            <th scope="col" class="text-center">건축물대장 일련번호</th>
            <th scope="col" class="text-center">대장구분명</th>
            <th scope="col" class="text-center">대장종류명</th>
            <th scope="col" class="text-center">지번명</th>
            <th scope="col" class="text-center">도로명주소</th>
            <th scope="col" class="text-center">건물명</th>
            <th scope="col" class="text-center">처리일시</th>
          </tr>
        </thead>
        <tbody>
          <tr class="trBlue">
            <td class="text-center">1</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">2</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">3</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">4</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">5</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">6</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">7</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">8</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">9</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
          <tr>
            <td class="text-center">10</td>
            <td class="text-center">1002</td>
            <td class="text-center">10021100208385</td>
            <td class="text-center">집합</td>
            <td class="text-center">총괄표제부</td>
            <td class="text-center">서울특별시 종로구 명륜2가 *****</td>
            <td class="text-center">서울특별시 종로구 명륜~~~</td>
            <td class="text-center">글로리아 하우스</td>
            <td class="text-center">2024-10-10 10:25:05</td>
          </tr>
        </tbody>
      </BaseTable>
    </section>
    <!-- //sectionContainer -->

    <section class="sectionContainer col">
      <div class="sectionBox">
        <BaseTab styleClassName="hasTabLength7">
          <template v-slot:tabItem>
            <BaseTabItem :data="tabs1" v-model="current1" />
          </template>

          <template v-slot:tabContent>
            <BaseTabContent :current="current1" name="총괄표제부">
              <SectionTitle title="상세보기 - 총괄표제부" />

              <BaseTable styleClassName="rowType">
                <colgroup>
                  <col style="width: 100px" />
                  <col style="width: 120px" />
                  <col style="width: 100px" />
                  <col style="width: 120px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                </colgroup>

                <tbody>
                  <tr>
                    <th scope="row" class="text-center">고유번호</th>
                    <td class="text-left" colspan="9"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">대지위치</th>
                    <td class="text-left" colspan="3"></td>
                    <th scope="row" class="text-center">지번</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">건축물명칭</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">특이사항</th>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">대지면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">연면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">지역</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">지구</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">구역</th>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">건축면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">용적률 산정 연면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">건축물 수</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">주용도</th>
                    <td class="text-left" colspan="3"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">건폐율</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">%</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">용적률</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <Baseinput type="text" />
                        <p class="tableUnit">%</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">총 호수</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">총 주차 대수</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">부속 건축물</th>
                    <td class="text-left">
                      <div class="tableBox hasInput">
                        <BaseInput inputType="text" inputValue="123223" />
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </BaseTable>

              <BaseTable styleClassName="join">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">건축물현황</th>
                  </tr>
                </thead>
              </BaseTable>

              <BaseTable
                styleClassName="overflow-y"
                inlineStyle="max-height: 202px"
              >
                <colgroup>
                  <col style="width: 40px" />
                  <col style="width: 50px" />
                  <col style="width: 70px" />
                  <col style="width: 120px" />
                  <col style="width: 120px" />
                  <col style="width: 150px" />
                  <col style="width: 100px" />
                  <col style="width: 100px" />
                  <col style="width: 100px" />
                  <col style="width: 150px" />
                  <col style="width: 120px" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" class="text-center">
                      <span class="hidden">index</span>
                    </th>
                    <th scope="col" class="text-center">구분</th>
                    <th scope="col" class="text-center">명칭</th>
                    <th scope="col" class="text-center">도로명주소</th>
                    <th scope="col" class="text-center">건축물 주구조</th>
                    <th scope="col" class="text-center">건축물 지붕</th>
                    <th scope="col" class="text-center">층수</th>
                    <th scope="col" class="text-center">용도</th>
                    <th scope="col" class="text-center">연면적(㎡)</th>
                    <th scope="col" class="text-center">변동일</th>
                    <th scope="col" class="text-center">변동원인</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="trBlue">
                    <td class="text-center">1</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">2</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">3</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">4</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">5</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">6</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">7</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">8</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">9</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">10</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                </tbody>
              </BaseTable>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="표제부">
              <SectionTitle title="상세보기 - 표제부" />

              <BaseTable styleClassName="rowType">
                <colgroup>
                  <col style="width: 100px" />
                  <col style="width: 120px" />
                  <col style="width: 100px" />
                  <col style="width: 120px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                </colgroup>

                <tbody>
                  <tr>
                    <th scope="row" class="text-center">고유번호</th>
                    <td class="text-left" colspan="3"></td>
                    <th scope="row" class="text-center">명칭</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">호수/가구수/세대수</th>
                    <td class="text-left" colspan="3"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">대지위치</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">지번</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">도로명주소</th>
                    <td class="text-left" colspan="5"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">대지면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">연면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">지역</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">지구</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">구역</th>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">건축면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">용적률 산정 연면적</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">주구조</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">주용도</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">층수</th>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">건폐율</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <p class="tableUnit">%</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">용적률</th>
                    <td class="text-left">
                      <div class="tableBox end">
                        <Baseinput type="text" />
                        <p class="tableUnit">%</p>
                      </div>
                    </td>
                    <th scope="row" class="text-center">높이</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">지붕</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">부속 건축물</th>
                    <td class="text-left">
                      <div class="tableBox hasInput">
                        <BaseInput inputType="text" inputValue="123223" />
                        <p class="tableUnit">㎡</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </BaseTable>

              <BaseTable styleClassName="join">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">건축물현황</th>
                  </tr>
                </thead>
              </BaseTable>

              <BaseTable
                styleClassName="overflow-y"
                inlineStyle="max-height: 202px"
              >
                <colgroup>
                  <col style="width: 70px" />
                  <col style="width: 200px" />
                  <col style="width: 250px" />
                  <col style="width: 200px" />
                  <col style="width: 250px" />
                  <col style="width: auto" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" class="text-center">
                      <span class="hidden">index</span>
                    </th>
                    <th scope="col" class="text-center">구분</th>
                    <th scope="col" class="text-center">층정보</th>
                    <th scope="col" class="text-center">구조</th>
                    <th scope="col" class="text-center">용도</th>
                    <th scope="col" class="text-center">면적(㎡)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="trBlue">
                    <td class="text-center">1</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">2</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">3</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">4</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">5</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">6</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">7</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">8</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">9</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">10</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                </tbody>
              </BaseTable>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="층별개요">
              <SectionTitle title="상세보기 - 층별개요" />

              <BaseTable
                styleClassName="overflow-x overflow-y"
                inlineStyle="max-height: 202px;"
                tableInlineStyle="width: 1920px;"
              >
                <colgroup>
                  <col style="width: 40px" />
                  <col style="width: 60px" />
                  <col style="width: 100px" />
                  <col style="width: 100px" />
                  <col style="width: 160px" />
                  <col style="width: 100px" />
                  <col style="width: 80px" />
                  <col style="width: 140px" />
                  <col style="width: 140px" />
                  <col style="width: 140px" />
                  <col style="width: 80px" />
                  <col style="width: 140px" />
                  <col style="width: 160px" />
                </colgroup>

                <thead>
                  <tr>
                    <th scope="col" class="text-center">
                      <span class="hidden">index</span>
                    </th>
                    <th scope="col" class="text-center">일련번호</th>
                    <th scope="col" class="text-center">건축물대장 일련번호</th>
                    <th scope="col" class="text-center">주 부속 구분코드</th>
                    <th scope="col" class="text-center">주 부속 일련번호</th>

                    <th scope="col" class="text-center">층 구분 코드</th>
                    <th scope="col" class="text-center">층 번호</th>
                    <th scope="col" class="text-center">층 번호 명</th>
                    <th scope="col" class="text-center">구조 명</th>
                    <th scope="col" class="text-center">기타구조</th>
                    <th scope="col" class="text-center">주 용도 명</th>
                    <th scope="col" class="text-center">기타 용도</th>
                    <th scope="col" class="text-center">면적(㎡)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="trBlue">
                    <td class="text-center">1</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">2</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">3</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">4</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">5</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">6</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">7</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">8</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">9</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center">10</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                </tbody>
              </BaseTable>
            </BaseTabContent>
            <BaseTabContent :current="current1" name="전유부">
              <SectionTitle title="상세보기 - 전유부" />

              <BaseTable styleClassName="rowType">
                <colgroup>
                  <col style="width: 100px" />
                  <col style="width: 250px" />
                  <col style="width: 100px" />
                  <col style="width: 150px" />
                  <col style="width: 100px" />
                  <col style="width: 250px" />
                </colgroup>

                <tbody>
                  <tr>
                    <th scope="row" class="text-center">고유번호</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">명칭</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">호명칭</th>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-center">대지위치</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">지번</th>
                    <td class="text-left"></td>
                    <th scope="row" class="text-center">도로명주소</th>
                    <td class="text-left"></td>
                  </tr>
                </tbody>
              </BaseTable>

              <BaseTable styleClassName="join">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">전유부분</th>
                  </tr>
                </thead>
              </BaseTable>

              <BaseTable>
                <colgroup>
                  <col style="width: 300px" />
                  <col style="width: 300px" />
                  <col style="width: 300px" />
                  <col style="width: auto" />
                  <col style="width: 150px" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" class="text-center">구분</th>
                    <th scope="col" class="text-center">층별</th>
                    <th scope="col" class="text-center">구조</th>
                    <th scope="col" class="text-center">용도</th>
                    <th scope="col" class="text-center">면적(㎡)</th>
                  </tr>
                </thead>

                <tbody>
                  <tr class="trBlue">
                    <td class="text-center"></td>
                    <td class="text-center">1F</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center">2F</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center">3F</td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                    <td class="text-center"></td>
                  </tr>
                </tbody>
              </BaseTable>
            </BaseTabContent>
          </template>
        </BaseTab>
      </div>
    </section>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'

const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])

const tabs1 = [
  {
    id: 1,
    name: '총괄표제부',
  },
  {
    id: 2,
    name: '표제부',
  },
  {
    id: 3,
    name: '층별개요',
  },
  {
    id: 4,
    name: '전유부',
  },
]

const current1 = ref('총괄표제부')
</script>
