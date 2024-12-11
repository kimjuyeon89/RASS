<template>
  <div id="guideRoot">
    <div class="titleLabel">
      <h1>Components</h1>
    </div>

    <div class="groupWrapper">
      <GroupBox title="Button">
        <GroupContent title="기본">
          <BaseButton label="버튼" styleClassName="bdGray" />
          <BaseButton label="버튼" styleClassName="bdBlue" />
          <BaseButton label="버튼" styleClassName="bgBlue" />
          <BaseButton label="버튼" styleClassName="bgGreen" />
          <BaseButton label="버튼" styleClassName="bgRed" />
          <BaseButton label="버튼" styleClassName="mixBlue" />
          <BaseButton label="버튼" styleClassName="bgAqua" />
          <BaseButton label="버튼" styleClassName="bgGray" />
          <BaseButton label="검색" styleClassName="md bgGray" />
          <!-- 사이즈는 같으나 pd-sm이 padding이 더 작음 -->
          <BaseButton label="검색" styleClassName="md pd-sm bgGray" />
        </GroupContent>

        <GroupContent title="기본 + 아이콘">
          <BaseButton label="엑셀출력" styleClassName="bdGray i-excel" />
          <BaseButton label="엑셀출력" styleClassName="bdGray i-excel-green" />
          <BaseButton label="다운로드" styleClassName="bdBlue i-download" />
          <BaseButton
            label="업로드"
            styleClassName="md pd-sm bdBlue i-upload"
          />
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray i-remove" />
          <BaseButton label="검색" styleClassName="md pd-sm bdGray i-search" />
          <BaseButton
            label="추가"
            styleClassName="md pd-sm bdGray i-plus-blue"
          />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Form">
        <GroupContent title="input">
          <BaseInput inputType="text" placeholder="Placeholder" />
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
          <BaseInput
            inputType="month"
            styleClassName="hasCalendar"
            inputValue="2024-05-09"
          >
            <template v-slot:prepend>
              <button type="button" class="btnCalendar">
                <span class="hidden">달력</span>
              </button>
            </template>
          </BaseInput>
          <BaseInput
            inputType="text"
            placeholder="Placeholder (error)"
            inputError
            inputErrorMessage="메시지 내용"
          />
          <BaseInput
            inputType="text"
            placeholder="Placeholder (disabled)"
            disabled
          />
          <BaseInput
            inputType="text"
            placeholder="Placeholder"
            inputValue="readonly"
            readonly
          />
        </GroupContent>

        <GroupContent title="file input left / right / remove (BS_204)">
          <FileInputWrapper label="파일 선택">
            <template v-slot:left>
              <FileInputBox inputId="f01" filePlaceholder="선택된 파일없음" />
            </template>
          </FileInputWrapper>
          <FileInputWrapper label="파일 선택">
            <template v-slot:right>
              <FileInputBox inputId="f02" filePlaceholder="선택된 파일없음" />
            </template>
          </FileInputWrapper>
          <FileInputWrapper label="파일 선택">
            <template v-slot:right>
              <FileInputBox inputId="f03" filePlaceholder="선택된 파일없음" />
            </template>
            <template v-slot:button>
              <BaseButton styleClassName="btnRemove" />
            </template>
          </FileInputWrapper>
        </GroupContent>

        <GroupContent title="Textarea">
          <BaseTextarea inlineStyle="height: 100px" />
        </GroupContent>

        <GroupContent title="Select">
          <BaseSelect initialSelectValue="전체" :options="selectList" />
          <BaseSelect
            initialSelectValue="disabled"
            disabled
            :options="selectList"
          />
          <BaseSelect
            initialSelectValue="전체"
            :options="selectList"
            error
            errorMessage="메시지 내용"
          />
        </GroupContent>

        <GroupContent title="Radio">
          <BaseRadio
            name="r01"
            id="r01"
            label="radio1 (default)"
            :checked="true"
          />
          <BaseRadio name="r01" id="r02" label="radio2 (default)" />
          <BaseRadio
            name="r02"
            id="r03"
            label="radio1 (small)"
            :checked="true"
            styleClassName="sm"
          />
          <BaseRadio
            name="r02"
            id="r04"
            label="radio2 (small)"
            styleClassName="sm"
          />
          <BaseRadio
            name="r03"
            id="r05"
            label="radio1 (default disabled)"
            :checked="true"
            :disabled="true"
          />
          <BaseRadio
            name="r03"
            id="r06"
            label="radio2 (default disabled)"
            :disabled="true"
          />

          <BaseRadio
            name="r04"
            id="r07"
            label="radio1 (small disabled)"
            :checked="true"
            :disabled="true"
            styleClassName="sm"
          />
          <BaseRadio
            name="r04"
            id="r08"
            label="radio1 (small disabled)"
            :checked="true"
            :disabled="true"
            styleClassName="sm"
          />
        </GroupContent>

        <GroupContent title="Checkbox">
          <BaseCheckbox
            id="check1"
            :isLabel="true"
            label="check1"
            :checked="true"
          />
          <BaseCheckbox id="check2" :isLabel="true" label="check2" />

          <BaseCheckbox
            id="check3"
            :isLabel="true"
            label="check1 (small)"
            :checked="true"
            styleClassName="sm"
          />
          <BaseCheckbox
            id="check4"
            :isLabel="true"
            label="check2 (small)"
            styleClassName="sm"
          />

          <BaseCheckbox
            id="check5"
            :isLabel="true"
            label="check1 (default disabled)"
            :checked="true"
            :disabled="true"
          />
          <BaseCheckbox
            id="check6"
            :isLabel="true"
            label="check2 (default disabled)"
            :disabled="true"
          />

          <BaseCheckbox
            id="check7"
            :isLabel="true"
            label="check1 (small disabled)"
            styleClassName="sm"
            :checked="true"
            :disabled="true"
          />
          <BaseCheckbox
            id="check8"
            :isLabel="true"
            label="check2 (small disabled)"
            styleClassName="sm"
            :disabled="true"
          />

          <BaseCheckbox
            id="check9"
            :isLabel="true"
            label="check (default indeterminate)"
            :indeterminate="true"
          />

          <BaseCheckbox
            id="check10"
            :isLabel="true"
            label="check (small indeterminate)"
            styleClassName="sm"
            :indeterminate="true"
          />

          <BaseCheckbox
            id="check11"
            :isLabel="true"
            label="check (disabled indeterminate)"
            styleClassName="sm"
            :disabled="true"
            :indeterminate="true"
          />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Pagination">
        <GroupContent title="Inactive">
          <Pagination
            :currentPage="pagination.group1.currentPage"
            :totalPages="pagination.group1.totalPages"
          />
        </GroupContent>

        <GroupContent title="Pressed">
          <Pagination
            :currentPage="pagination.group2.currentPage"
            :totalPages="pagination.group2.totalPages"
          />
        </GroupContent>

        <GroupContent title="Disbaled">
          <Pagination
            stateClassName="disabled"
            :currentPage="pagination.group3.currentPage"
            :totalPages="pagination.group3.totalPages"
          />
        </GroupContent>

        <GroupContent title="Prev disabled">
          <Pagination
            :currentPage="pagination.group4.currentPage"
            :totalPages="pagination.group4.totalPages"
          />
        </GroupContent>

        <GroupContent title="Next disabled">
          <Pagination
            :currentPage="pagination.group5.currentPage"
            :totalPages="pagination.group5.totalPages"
          />
        </GroupContent>

        <GroupContent
          title="Page move (input 길이 기본값은 숫자 5자리까지 들어갈 수 있을정도)"
        >
          <Pagination
            :currentPage="pagination.group4.currentPage"
            :totalPages="pagination.group4.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue" :total="total" />
            </template>
          </Pagination>
        </GroupContent>

        <GroupContent title="Page move input 길이조절">
          <Pagination
            :currentPage="pagination.group6.currentPage"
            :totalPages="pagination.group6.totalPages"
          >
            <template v-slot:right>
              <PageMove
                inputStyle="width: 120px;"
                styleClassName="width-auto"
                :inputValue="pageMoveValue2"
                :total="total2"
              />
            </template>
          </Pagination>
        </GroupContent>

        <GroupContent
          title="팝업에 페이지네이션이 전부 안들어갈경우엔 5개만 표출"
        >
          <Pagination
            :currentPage="pagination.group7.currentPage"
            :totalPages="pagination.group7.totalPages"
          >
            <template v-slot:right>
              <PageMove :inputValue="pageMoveValue3" :total="total3" />
            </template>
          </Pagination>
        </GroupContent>
      </GroupBox>

      <GroupBox title="Tabs (사이드바 있을 때 기준)">
        <GroupContent title="탭 개수가 7개 이하">
          <BaseTab styleClassName="hasTabLength7">
            <template v-slot:tabItem>
              <BaseTabItem :data="tabs1" v-model="current1" />
            </template>

            <template v-slot:tabContent>
              <BaseTabContent :current="current1" name="Tab1">
                <div>1</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab2">
                <div>2</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab3">
                <div>3</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab4">
                <div>4</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab5">
                <div>5</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab6">
                <div>6</div>
              </BaseTabContent>
              <BaseTabContent :current="current1" name="Tab7">
                <div>7</div>
              </BaseTabContent>
            </template>
          </BaseTab>
        </GroupContent>

        <GroupContent title="탭 개수가 7개 이상">
          <BaseTab>
            <template v-slot:tabItem>
              <BaseTabItem :data="tabs2" v-model="current2" />
            </template>

            <template v-slot:tabContent>
              <BaseTabContent :current="current2" name="Tab1">
                <div>1</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab2">
                <div>2</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab3">
                <div>3</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab4">
                <div>4</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab5">
                <div>5</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab6">
                <div>6</div>
              </BaseTabContent>
              <BaseTabContent :current="current2" name="Tab7">
                <div>7</div>
              </BaseTabContent>
            </template>
          </BaseTab>
        </GroupContent>

        <GroupContent title="탭 메뉴 텍스트 안에 결과 수 ">
          <BaseTab styleClassName="hasTabLength7">
            <template v-slot:tabItem>
              <BaseTabItem :data="tabs3" v-model="current3" />
            </template>

            <template v-slot:tabContent>
              <BaseTabContent :current="current3" name="주차장출입구">
                <div>1</div>
              </BaseTabContent>
              <BaseTabContent :current="current3" name="동출입구">
                <div>2</div>
              </BaseTabContent>
              <BaseTabContent :current="current3" name="단지내도로">
                <div>3</div>
              </BaseTabContent>
            </template>
          </BaseTab>
        </GroupContent>

        <GroupContent title="탭 다른 스타일 (BS_110)">
          <BaseTab styleClassName="hasTabLength7 tabType2">
            <template v-slot:tabItem>
              <BaseTabItem :data="tabs4" v-model="current4" />
            </template>

            <template v-slot:tabContent>
              <BaseTabContent :current="current4" name="신청정보">
                <div>1</div>
              </BaseTabContent>
              <BaseTabContent :current="current4" name="성과물정보">
                <div>2</div>
              </BaseTabContent>
            </template>
          </BaseTab>
        </GroupContent>

        <GroupContent title="탭 다른 스타일 (BS_204)">
          <BaseTab styleClassName="hasTabLength7 tabType3">
            <template v-slot:tabItem>
              <BaseTabItem :data="tabs5" v-model="current5" />
            </template>

            <template v-slot:tabContent>
              <BaseTabContent :current="current5" name="신청정보">
                <div>1</div>
              </BaseTabContent>
              <BaseTabContent :current="current5" name="성과물정보">
                <div>2</div>
              </BaseTabContent>
            </template>
          </BaseTab>
        </GroupContent>
      </GroupBox>

      <GroupBox title="Section">
        <GroupContent>
          <SectionTitle title="타이틀 1개일 때" />

          <SectionTitle title="타이틀 + 버튼" :right="true">
            <template v-slot:right>
              <BaseButton label="상세보기" styleClassName="md pd-sm bdGray" />
              <BaseButton label="검수요청" styleClassName="md pd-sm bgAqua" />
            </template>
          </SectionTitle>

          <SectionTitle
            title="타이틀 + 설명 + 버튼"
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
        </GroupContent>
        <GroupContent title="타이틀 없고 설명만 있을 때">
          <SectionTitle
            :descState="true"
            descText="※ 재접수 건은 노란색으로 표시됩니다."
            textColor="text-color-blue2"
          />
        </GroupContent>
        <GroupContent title="타이틀 왼쪽에 dot 있을 때 (BS_110)">
          <SectionTitle title="신청정보" titleType="dot" />
        </GroupContent>
        <GroupContent title="bullet1 (BS_204)">
          <SectionTitle title="신청정보" titleClassName="bullet" />
        </GroupContent>
        <GroupContent title="bullet2 (BS_204)">
          <SectionTitle title="전체구간" titleType="bullet-play" />
        </GroupContent>
        <GroupContent title="ExplanationBox.vue">
          <ExplanationBox title="파일형식" :data="explanationData" />
        </GroupContent>
        <GroupContent title="NoData.vue">
          <NoData height="370px" :src="noData" alt="데이터가 없습니다." />
        </GroupContent>
        <GroupContent title="Statistics.vue">
          <Statistics :data="statisticsData" />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Table">
        <GroupContent title="결과">
          <Result :count="3" />
        </GroupContent>

        <GroupContent title="joinType">
          <div style="flex: 1">
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
                    <BaseCheckbox id="check8" />
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
                    <BaseCheckbox id="check9" />
                  </td>
                  <td class="text-center">1</td>
                  <td class="text-center">신청배치도</td>
                  <td class="text-center">req_칠원</td>
                  <td class="text-center">png</td>
                  <td class="text-center">388796</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check10" />
                  </td>
                  <td class="text-center">2</td>
                  <td class="text-center">성과도면</td>
                  <td class="text-center">칠원동</td>
                  <td class="text-center">png</td>
                  <td class="text-center">388796</td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check11" />
                  </td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                </tr>
                <tr>
                  <td class="text-center">
                    <BaseCheckbox id="check12" />
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
        </GroupContent>

        <GroupContent title="rowType">
          <BaseTable class="rowType" :caption="tableCaptions.example">
            <colgroup>
              <col style="width: 140px" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" class="text-left">권한 ID</th>
                <td>
                  <BaseInput inputType="text" inputValue="ROLE_USER" />
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-left">권한명</th>
                <td>
                  <BaseInput inputType="text" inputValue="사용자" />
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-left">설명</th>
                <td>
                  <BaseInput
                    inputType="text"
                    inputValue="행정일반 RASS 사용자 권한을 지정하는 권한달력"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" class="text-left">등록일자</th>
                <td>
                  <BaseInput inputType="text" inputValue="2024-07-02" />
                </td>
              </tr>
            </tbody>
          </BaseTable>
        </GroupContent>

        <GroupContent title="라벨">
          <StateLabel labelType="blue" />
          <StateLabel labelType="red" />
          <StateLabel labelType="black" />
        </GroupContent>

        <GroupContent title="팝업 테이블 조회팝업 (BS-114, BS-117)">
          <div style="max-width: 319px">
            <TableImageBox :src="imgMap" value="첨부파일 이미지.png" />
          </div>
        </GroupContent>

        <GroupContent title="팝업 테이블 조회팝업 파일없음">
          <div style="max-width: 319px">
            <TableImageBox
              :imgWidth="86"
              :imgHeight="109"
              :src="imgNoFile"
              value="첨부파일 이미지.png"
              styleClassName="noFile"
            />
          </div>
        </GroupContent>

        <GroupContent title="팝업 테이블 조회팝업 기타파일">
          <div style="max-width: 319px">
            <TableImageBox
              :imgWidth="80"
              :imgHeight="80"
              :src="imgEtcFile"
              value="첨부파일 이미지.png"
              styleClassName="noFile"
            />
          </div>
        </GroupContent>
      </GroupBox>

      <GroupBox title="Search">
        <GroupContent title="1줄">
          <div class="searchArea">
            <div class="searchColumn">
              <span class="searchLabel">구분</span>
              <BaseSelect initialSelectValue="전체" :options="selectList" />
            </div>
            <div class="searchColumn">
              <span class="searchLabel">구분</span>
              <div class="searchColumnInputBox">
                <BaseInput inputType="text" inputValue="2024-05-29" />
                <span class="betweenText">~</span>
                <BaseInput inputType="text" inputValue="2024-05-29" />
              </div>
            </div>

            <BaseButton label="검색" styleClassName="md bgGray" />
          </div>
        </GroupContent>

        <GroupContent title="2줄">
          <div class="searchArea">
            <!-- searchColumnRowContainer -->
            <div class="searchColumnRowContainer">
              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn">
                  <span class="searchLabel">행정구역</span>

                  <BaseSelect initialSelectValue="전체" :options="selectList" />

                  <BaseSelect initialSelectValue="전체" :options="selectList" />

                  <BaseSelect initialSelectValue="전체" :options="selectList" />
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">접수관리번호</span>

                  <BaseInput inputType="text" />
                </div>
              </div>
              <!-- //searchColumnRow -->

              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn">
                  <span class="searchLabel">신청일자</span>
                  <div class="searchColumnInputBox">
                    <BaseInput inputType="text" />
                    <span class="betweenText">~</span>
                    <BaseInput inputType="text" />
                  </div>
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">진행상태</span>
                  <BaseSelect initialSelectValue="전체" :options="selectList" />
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">초과일</span>

                  <div class="searchInputBox">
                    <BaseInput inputType="text" />
                    <span class="searchInputLabel">일 초과</span>
                  </div>
                </div>
                <BaseButton label="검색" styleClassName="md bgGray" />
              </div>
              <!-- //searchColumnRow -->
            </div>
            <!-- //searchColumnRowContainer -->
          </div>
        </GroupContent>

        <GroupContent title="input width 개별조정 (props inlineStyle)">
          <div class="searchArea">
            <!-- searchColumnRowContainer -->
            <div class="searchColumnRowContainer">
              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn">
                  <span class="searchLabel">행정구역</span>

                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList"
                    inlineStyle="min-width: 300px;"
                  />

                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList"
                    inlineStyle="min-width: 300px;"
                  />

                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList"
                    inlineStyle="min-width: 300px;"
                  />
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">접수관리번호</span>

                  <BaseInput inputType="text" inlineStyle="width: 400px;" />
                </div>
              </div>
              <!-- //searchColumnRow -->

              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn">
                  <span class="searchLabel">신청일자</span>
                  <div class="searchColumnInputBox">
                    <BaseInput inputType="text" />
                    <span class="betweenText">~</span>
                    <BaseInput inputType="text" />
                  </div>
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">진행상태</span>
                  <BaseSelect initialSelectValue="전체" :options="selectList" />
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">초과일</span>

                  <div class="searchInputBox">
                    <BaseInput inputType="text" inlineStyle="width: 300px;" />
                    <span class="searchInputLabel">일 초과</span>
                  </div>
                </div>
                <BaseButton label="검색" styleClassName="md bgGray" />
              </div>
              <!-- //searchColumnRow -->
            </div>
            <!-- //searchColumnRowContainer -->
          </div>
        </GroupContent>

        <GroupContent title="기본 column 3개이상 (col3more 클래스)">
          <div class="searchArea">
            <!-- searchColumnRowContainer -->
            <div class="searchColumnRowContainer">
              <!-- searchColumnRow -->
              <div
                class="searchColumnRow col3more"
                style="padding-right: 119px"
              >
                <div class="searchColumn">
                  <span class="searchLabel">행정구역</span>
                  <div class="searchColumnInputBox">
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[0].options"
                    />
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[0].options"
                    />
                  </div>
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">사물종류</span>
                  <div class="searchColumnInputBox">
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[0].options"
                    />
                    <BaseSelect
                      initialSelectValue="전체"
                      :options="selectList[0].options"
                    />
                  </div>
                </div>
                <div class="searchColumn">
                  <span class="searchLabel">조사일자</span>

                  <div class="searchColumnInputBox">
                    <BaseInput inputType="text" inputValue="" />
                    <span class="betweenText">~</span>
                    <BaseInput inputType="text" inputValue="" />
                  </div>
                </div>
              </div>
              <!-- //searchColumnRow -->

              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn">
                  <span class="searchLabel">본부</span>
                  <BaseSelect
                    initialSelectValue="전체"
                    :options="selectList[0].options"
                  />
                </div>

                <div class="searchColumn">
                  <span class="searchLabel">구분</span>

                  <div class="searchColumnInputBox">
                    <BaseRadio name="r01" id="r01" label="시군구별" />
                    <BaseRadio name="r01" id="r02" label="시도별" />
                    <BaseRadio name="r01" id="r03" label="본부별" />
                  </div>
                </div>

                <BaseButton label="검색" styleClassName="md bgGray" />
              </div>
              <!-- //searchColumnRow -->
            </div>
            <!-- //searchColumnRowContainer -->
          </div>
        </GroupContent>

        <GroupContent
          title="column 3개이상 + 안에 input이 더 많이 들어가는경우 (col3moreSmall 클래스)"
        >
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
                  <span class="searchLabel">계약일자</span>
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

                <div class="searchColumn flex1">
                  <span class="searchLabel">국가지점번호</span>
                  <BaseInput inputType="text" />
                  <!-- <BaseInput inputType="text" inlineStyle="width: 200px"/> -->
                </div>

                <BaseButton label="검색" styleClassName="md bgGray" />
              </div>
              <!-- //searchColumnRow -->
            </div>
            <!-- //searchColumnRowContainer -->
          </div>
        </GroupContent>

        <GroupContent title="full width (flex1 클래스)">
          <div class="searchArea">
            <!-- searchColumnRowContainer -->
            <div class="searchColumnRowContainer">
              <!-- searchColumnRow -->
              <div class="searchColumnRow">
                <div class="searchColumn flex1">
                  <span class="searchLabel">권한 명</span>
                  <BaseInput inputType="text" inputValue="" />
                </div>

                <BaseButton label="검색" styleClassName="md bgGray" />
              </div>
              <!-- //searchColumnRow -->
            </div>
            <!-- //searchColumnRowContainer -->
          </div>
        </GroupContent>
      </GroupBox>

      <GroupBox title="Popup">
        <GroupContent title="Section title">
          <PopupSectionTitle
            title="롤 상세조회/수정"
            titleIcon="system-folder"
          />
        </GroupContent>

        <GroupContent title="bottom left / right / both">
          <BottomArea :left="true">
            <template v-slot:left>
              <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
            </template>
          </BottomArea>

          <BottomArea :right="true">
            <template v-slot:right>
              <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
              <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
            </template>
          </BottomArea>

          <BottomArea :both="true">
            <template v-slot:left>
              <BaseButton
                label="사용자 비밀번호 초기화"
                styleClassName="md pd-sm bdGray"
              />
            </template>
            <template v-slot:right>
              <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
              <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
            </template>
          </BottomArea>
        </GroupContent>
      </GroupBox>

      <GroupBox title="Window">
        <GroupContent title="윈도우 팝업 통계">
          <WindowStatistics :data="windowStatisticsData" />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Accordion">
        <GroupContent title="아코디언 (팝업)">
          <BaseAccordion :data="accordionData" v-model="openIndex" />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Sidebar">
        <GroupContent>
          <Sidebar />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Main">
        <GroupContent title="card">
          <Card
            :data="cardList"
            :state="setting"
            @setting-click="settingClick"
            emptyText="즐겨찾기를 추가해주세요"
          />
        </GroupContent>
        <GroupContent title="card">
          <Card :data="cardList2" emptyText="즐겨찾기를 추가해주세요" />
        </GroupContent>
        <GroupContent title="card empty">
          <div
            style="
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              column-gap: 28px;
              width: 100%;
            "
          >
            <CardEmpty text="즐겨찾기를 추가해주세요" />
          </div>
        </GroupContent>
        <GroupContent title="menuBox">
          <MenuBox :data="menus" :state="setting" />
        </GroupContent>
      </GroupBox>

      <GroupBox title="Ibsheet">
        <GroupContent
          title="241106 예시테이블 (기본 높이값 : row 10개 높이 + 가로스크롤 높이)"
        >
          <Ibsheet styleClassName="big" :sheetId="sheetID1" />
        </GroupContent>

        <!-- https://portal.ibsheet.com/support/solutions/articles/72000529987-%EB%B2%84%ED%8A%BC-button-%EC%9D%B4-%ED%8F%AC%ED%95%A8%EB%90%9C-%EC%97%B4-column-%ED%83%80%EC%9E%85-%EC%84%A4%EC%A0%95 -->
        <GroupContent
          title="커스텀 (체크박스, 인풋, 셀렉트, 라벨 등) 예시테이블"
        >
          <Ibsheet styleClassName="big" :sheetId="sheetID2" />
        </GroupContent>
        <GroupContent title="기본 사이즈 예시테이블">
          <Ibsheet :sheetId="sheetID3" />
        </GroupContent>
        <GroupContent title="병합 예시테이블">
          <Ibsheet :sheetId="sheetID4" />
        </GroupContent>
      </GroupBox>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'CommonComponents',
})

import { ref, onMounted, onUnmounted } from 'vue'
import { ibsheet } from '@/const'
import { tableCaptions } from '@/const'
import { initClCdSheet } from '@/util/ibsheet/initClcdSheet'
import { appendLabel } from '@/util/ibsheet/appendLabel'
import { appendButton } from '@/util/ibsheet/appendButton'
import { removeSheet } from '@/util/ibsheet/removeSheet'
// import { getImageUrl } from '@/util/sub/getImageUrl'
import noData from '@/assets/table/img-no-data.svg'
import imgMap from '@/assets/popup/img-map.jpg'
import imgNoFile from '@/assets/table/img-no-file.svg'
import imgEtcFile from '@/assets/table/img-etc-file.svg'

// base component
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTabItem from '@/components/base/BaseTabItem.vue'
import BaseTabContent from '@/components/base/BaseTabContent.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseAccordion from '@/components/base/BaseAccordion.vue'

// guide component
import GroupBox from '@/components/guide/GroupBox.vue'
import GroupContent from '@/components/guide/GroupContent.vue'

// sub component
import Pagination from '@/components/sub/paging/Pagination.vue'
import PageMove from '@/components/sub/paging/PageMove.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import ExplanationBox from '@/components/sub/section/ExplanationBox.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import PopupSectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import NoData from '@/components/sub/section/NoData.vue'
import Statistics from '@/components/sub/section/Statistics.vue'
import Result from '@/components/sub/table/Result.vue'
import StateLabel from '@/components/sub/table/StateLabel.vue'
import WindowStatistics from '@/components/popup/WindowStatistics.vue'
import TableImageBox from '@/components/sub/table/TableImageBox.vue'
import Sidebar from '@/components/sub/side/Sidebar.vue'
import Card from '@/components/main/Card.vue'
import MenuBox from '@/components/main/MenuBox.vue'
import CardEmpty from '@/components/main/CardEmpty.vue'

// ibsheet
import Ibsheet from '@/components/sub/table/Ibsheet.vue'

const tabs1 = [
  {
    id: 1,
    name: 'Tab1',
  },
  {
    id: 2,
    name: 'Tab2',
  },
  {
    id: 3,
    name: 'Tab3',
  },
  {
    id: 4,
    name: 'Tab4',
  },
  {
    id: 5,
    name: 'Tab5',
  },
  {
    id: 6,
    name: 'Tab6',
  },
  {
    id: 7,
    name: 'Tab7',
  },
]

const tabs2 = [
  {
    id: 1,
    name: 'Tab1',
  },
  {
    id: 2,
    name: 'Tab2',
  },
  {
    id: 3,
    name: 'Tab3',
  },
  {
    id: 4,
    name: 'Tab4',
  },
  {
    id: 5,
    name: 'Tab5',
  },
  {
    id: 6,
    name: 'Tab6',
  },
  {
    id: 7,
    name: 'Tab7',
  },
  {
    id: 8,
    name: 'Tab8',
  },
  {
    id: 9,
    name: 'Tab9',
  },
]

const tabs3 = [
  {
    id: 1,
    name: '주차장출입구',
    count: 1,
  },
  {
    id: 2,
    name: '동출입구',
    count: 2,
  },
  {
    id: 3,
    name: '단지내도로',
    count: 3,
  },
]

const tabs4 = [
  {
    id: 1,
    name: '신청정보',
  },
  {
    id: 2,
    name: '성과물정보',
  },
]

const tabs5 = [
  {
    id: 1,
    name: '신청정보',
  },
  {
    id: 2,
    name: '성과물정보',
  },
]

const current1 = ref('Tab1')
const current2 = ref('Tab1')
const current3 = ref('주차장출입구')
const current4 = ref('신청정보')
const current5 = ref('신청정보')

/* paging */
const pagination = ref({
  group1: {
    currentPage: 0,
    totalPages: 10,
  },
  group2: {
    currentPage: 5,
    totalPages: 10,
  },
  group3: {
    currentPage: 0,
    totalPages: 10,
  },
  group4: {
    currentPage: 1,
    totalPages: 10,
  },
  group5: {
    currentPage: 10,
    totalPages: 10,
  },
  group6: {
    currentPage: 1,
    totalPages: 10,
  },
  group7: {
    currentPage: 1,
    totalPages: 5,
  },
})

const pageMoveValue = ref(99999)
const total = ref(99999)

const pageMoveValue2 = ref(1000000000)
const total2 = ref(22)

const pageMoveValue3 = ref(5)
const total3 = ref(22)
/* --- */

const openIndex = ref(0)

const setting = ref(false)

const settingClick = state => {
  setting.value = state
}

/* select */
const selectList = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
/* --- */

/* Explanation.vue data */
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
/* --- */

/* Statistics.vue data */
const statisticsData = ref([
  {
    id: 1,
    title: '전체(건)',
    count: 22,
  },
  {
    id: 2,
    title: '신청',
    count: 22,
  },
  {
    id: 3,
    title: '접수',
    count: 4,
  },
  {
    id: 4,
    title: '신청보완',
    count: 10,
  },
  {
    id: 5,
    title: '신청취소',
    count: 146,
  },
  {
    id: 6,
    title: '검수요청(LX본부)',
    count: 5500,
  },
  {
    id: 7,
    title: '검수보완(LX본부)',
    count: 2522,
  },
  {
    id: 1,
    title: '검사요청(지자체)',
    count: 1,
  },
  {
    id: 1,
    title: '검사보완(지자체)',
    count: 10425,
  },
  {
    id: 1,
    title: '완료',
    count: 4,
  },
])
/* --- */

/* WindowStatistics.vue data */
const windowStatisticsData = ref([
  {
    id: 1,
    items: [
      {
        icon: 'building',
        title: '건물 1차',
        count: 10,
        active: false,
      },
      {
        icon: 'building',
        title: '건물 1차',
        count: 5,
        active: true,
      },
      {
        icon: 'maintenance',
        title: '수시정비',
        count: 4,
        active: false,
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        icon: 'road',
        title: '도로',
        count: 10,
        active: false,
      },
      {
        icon: 'dimensions',
        title: '입체도로',
        count: 5,
        active: false,
      },
      {
        icon: 'location',
        title: '내부도로',
        count: 4,
        active: true,
      },
    ],
  },
  {
    id: 3,
    items: [
      {
        icon: 'object-address',
        title: '사물주소',
        count: 10,
        active: true,
      },
      {
        icon: 'dimensions',
        title: '통리',
        count: 5,
        active: false,
      },
      {
        icon: 'satellite',
        title: '장소지능정보',
        count: 4,
        active: false,
      },
    ],
  },
])

/* Accordion.vue data */
const accordionData = [
  {
    id: 1,
    title: '시스템 관리',
    icon: 'folder',
    menus: [
      {
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 2,
    title: '메뉴 관리',
    icon: 'list-check',
    menus: [
      {
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 3,
    title: '코드 관리',
    icon: 'code',
    menus: [
      {
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 4,
    title: '로그 관리',
    icon: 'set',
    menus: [
      {
        title: '권한 관리',
        menus: [],
      },
      {
        title: '롤 관리',
        menus: [],
      },
      {
        title: '사용자 관리',
        menus: [],
      },
      {
        title: '부서 관리',
        menus: [],
      },
    ],
  },
]

/* MenuBox.vue data */
const menus = [
  {
    id: 1,
    title: '내부도로',
    link: '/',
    color: 'purple',
    icon: 'pinMap',
  },
  {
    id: 2,
    title: '장소지능',
    link: '/',
    color: 'blue',
    icon: 'satellite',
  },
  {
    id: 3,
    title: '국가지점',
    link: '/',
    color: 'blue2',
    icon: 'pin',
  },
  {
    id: 4,
    title: '현장조사',
    link: '/',
    color: 'mint',
    icon: 'mapSearch',
  },
  {
    id: 5,
    title: '입체도로',
    link: '/',
    color: 'green',
    icon: 'cube',
  },
  {
    id: 6,
    title: '검수',
    link: '/',
    color: 'red',
    icon: 'pinCheck',
  },
  {
    id: 7,
    title: '입체도로',
    link: '/',
    color: 'green',
    icon: 'cube',
  },
  {
    id: 8,
    title: '도로',
    link: '/',
    color: 'purple',
    icon: 'road',
  },
  {
    id: 9,
    title: '통리',
    link: '/',
    color: 'blue',
    icon: 'government',
  },
  {
    id: 10,
    title: '사물주소',
    link: '/',
    color: 'blue2',
    icon: 'column',
  },
  {
    id: 11,
    title: '일변동자료조회',
    link: '/',
    color: 'mint',
    icon: 'loupe',
  },
  {
    id: 12,
    title: '내부도로',
    link: '/',
    color: 'green',
    icon: 'inMap',
  },
  {
    id: 13,
    title: '수시정비',
    link: '/',
    color: 'red',
    icon: 'setting',
  },
]

/* CardItem.vue data */
const cardList = ref([
  {
    id: 1,
    title: '국가지점번호 현장조사',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 2,
    title: '건물 현행화',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 3,
    title: '사물주소',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 4,
    title: '입체도로',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
])

const cardList2 = ref([
  {
    id: 1,
    title: '국가지점번호 현장조사',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 2,
    title: '건물 현행화',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 3,
    title: '사물주소',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
])

const sheetID1 = ibsheet.id.sheet1
const sheetID2 = ibsheet.id.sheet2
const sheetID3 = ibsheet.id.sheet3
const sheetID4 = ibsheet.id.sheet4

const sheetId1Options = {
  Cfg: {
    canEdit: 0,
    Size: 'Big',
    PageLength: 20,
  },
  Def: {
    Col: {
      MinWidth: 111,
      MaxWidth: 111,
      Align: 'Center',
    },
  },
  Cols: [
    {
      Header: '시도별',
      Name: 'bs1101_th01',
    },
    {
      Header: '시군구명',
      Name: 'bs1101_th02',
    },
    {
      Header: '요청건수',
      Name: 'bs1101_th03',
    },
    {
      Header: '[전체]\n 미처리 건수',
      Name: 'bs1101_th04',
    },
    {
      Header: '[전체]\n 처리건수',
      Name: 'bs1101_th05',
    },
    {
      Header: '[전체]\n 공정율(%)',
      Name: 'bs1101_th06',
    },
    {
      Header: '제공물량',
      Name: 'bs1101_th07',
    },
    {
      Header: '[KAIS 미처리]\n 의뢰',
      Name: 'bs1101_th08',
    },
    {
      Header: '[KAIS 미처리]\n 검수보완',
      Name: 'bs1101_th09',
    },
    {
      Header: '[KAIS 미처리]\n 검사보완',
      Name: 'bs1101_th10',
    },
    {
      Header: '취소건수',
      Name: 'bs1101_th11',
    },
    {
      Header: '목표량',
      Name: 'bs1101_th12',
    },
    {
      Header: '요청률(%)',
      Name: 'bs1101_th13',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th14',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th15',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th16',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th17',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th18',
    },
  ],
}

const sheetId1Data = [
  {
    bs1101_th01: '총계',
    bs1101_th02: '소계',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '소계',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
    bs1101_th15: '11',
    bs1101_th16: '11',
    bs1101_th17: '11',
    bs1101_th18: '11',
  },
]

const sheetId2Options = {
  Cfg: {
    canEdit: 0,
    Size: 'Big',
  },
  Def: {
    Col: {
      Width: 111,
      Align: 'Center',
    },
  },
  Cols: [
    {
      Header: '시도별',
      Name: 'bs1101_th01',
      Type: 'Component',
      Component: 'html',
    },
    {
      Header: '시군구명',
      Name: 'bs1101_th02',
      Type: 'Component',
      Component: 'html',
    },
    {
      Header: '요청건수',
      Name: 'bs1101_th03',
      Type: 'Component',
      Component: 'html',
    },
    {
      Header: {
        Value: '',
        HeaderCheck: 1,
      },
      Type: 'Bool',
      Width: 110,
      Align: 'Center',
      CanEdit: 1,
      Name: 'bs1101_th04',
      CanSort: 0,
    },
    {
      Header: '[전체]\n 처리건수',
      Type: 'Radio',
      Radio: 1,
      Enum: '|상|중|하',
      EnumKeys: '|H:1|M:1|L:1',
      Name: 'bs1101_th05',
      RelWidth: 1,
    },
    {
      Header: '[전체]\n 공정율(%)',
      Name: 'bs1101_th06',
      Type: 'Button',
      Button: 'html',
    },
    {
      Header: '제공물량',
      Name: 'bs1101_th07',
      Type: 'Button',
      Button: 'html',
    },
    {
      Header: '[KAIS 미처리]\n 의뢰',
      Name: 'bs1101_th08',
    },
    {
      Header: '[KAIS 미처리]\n 검수보완',
      Name: 'bs1101_th09',
    },
    {
      Header: '[KAIS 미처리]\n 검사보완',
      Name: 'bs1101_th10',
    },
    {
      Header: '취소건수',
      Name: 'bs1101_th11',
    },
    {
      Header: '목표량',
      Name: 'bs1101_th12',
    },
    {
      Header: '요청률(%)',
      Name: 'bs1101_th13',
    },
    {
      Header: '동별정보\n 제공물량',
      Name: 'bs1101_th14',
    },
  ],
}

const sheetId2Data = [
  {
    bs1101_th01: appendLabel('blue'),
    bs1101_th02: appendLabel('red'),
    bs1101_th03: appendLabel('black'),
    bs1101_th04: '1',
    bs1101_th05: '95',
    bs1101_th06: appendButton('bdGray'),
    bs1101_th07: appendButton('bdGray i-excel-green'),
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '소계',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
  },
  {
    bs1101_th01: '서울특별시',
    bs1101_th02: '종로구',
    bs1101_th03: '100',
    bs1101_th04: '5',
    bs1101_th05: '95',
    bs1101_th06: '95',
    bs1101_th07: '375',
    bs1101_th08: '0',
    bs1101_th09: '1',
    bs1101_th10: '3',
    bs1101_th11: '30',
    bs1101_th12: '100',
    bs1101_th13: '79',
    bs1101_th14: '11',
  },
]

const sheetId3Options = {
  Cfg: {
    canEdit: 0,
  },
  Def: {
    Col: {
      Align: 'Center',
    },
  },
  Cols: [
    {
      Header: '',
      Name: 'SEQ',
      Type: 'Int',
      Width: 70,
    },
    {
      Header: '사용자ID',
      Name: 'cell1',
      RelWidth: 1,
    },
    {
      Header: '사용자명',
      Name: 'cell2',
      Type: 'Component',
      Component: 'html',
      RelWidth: 1,
    },
    {
      Header: '기본명',
      Name: 'cell3',
      RelWidth: 1,
    },
    {
      Header: '권한',
      Name: 'cell4',
      RelWidth: 1,
    },
    {
      Header: '최종수정일',
      Name: 'cell5',
      RelWidth: 1,
    },
  ],
}

const sheetId3Data = [
  {
    cell1: '870045',
    cell2:
      '<span class="text-underline text-color-black text-bold">홍길동</span>',
    cell3: '부산광역시 금정구',
    cell4: '관리자',
    cell5: '2020-12-03 11:17',
  },
  {
    cell1: '870045',
    cell2:
      '<span class="text-underline text-color-black text-bold">홍길동</span>',
    cell3: '부산광역시 금정구',
    cell4: '관리자',
    cell5: '2020-12-03 11:17',
  },
  {
    cell1: '870045',
    cell2:
      '<span class="text-underline text-color-black text-bold">홍길동</span>',
    cell3: '부산광역시 금정구',
    cell4: '관리자',
    cell5: '2020-12-03 11:17',
  },
]

const sheetId4Options = {
  Cfg: {
    canEdit: 0,
    HeaderMerge: 3,
  },
  Def: {
    Col: {
      Align: 'Center',
    },
  },
  Cols: [
    {
      Header: ['시도명', '시도명'],
      Name: 'cell1',
      Width: 100,
    },
    {
      Header: ['시군구명', '시군구명'],
      Name: 'cell2',
      Width: 100,
    },
    {
      Header: ['전체', '검수완료\n[완료]'],
      Name: 'cell3',
      RelWidth: 1,
    },
    {
      Header: ['전체', '검수여부\n[반려]'],
      Name: 'cell4',
      RelWidth: 1,
    },
    {
      Header: ['전체', '검수여부\n[확인]'],
      Name: 'cell5',
      RelWidth: 1,
    },
    {
      Header: ['전체', '확인여부\n[확인]'],
      Name: 'cell6',
      RelWidth: 1,
    },
    {
      Header: ['전체', '확인여부\n[확인불가]'],
      Name: 'cell7',
      RelWidth: 1,
    },
    {
      Header: ['전체', '조사대상'],
      Name: 'cell8',
      RelWidth: 1,
    },
    {
      Header: ['전체', '진행율'],
      Name: 'cell9',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '검수완료\n[완료]'],
      Name: 'cell10',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '검수여부\n[반려]'],
      Name: 'cell11',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '검수여부\n[대기]'],
      Name: 'cell12',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '확인여부\n[확인]'],
      Name: 'cell13',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '확인여부\n[확인불가]'],
      Name: 'cell14',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '조사대상'],
      Name: 'cell15',
      RelWidth: 1,
    },
    {
      Header: ['2025년도 목록1', '진행률'],
      Name: 'cell16',
      RelWidth: 1,
    },
  ],
}

const sheetId4Data = [
  {
    cell1: '총계',
    cell2: '소계',
    cell3: '3',
    cell4: '1',
    cell5: '1',
    cell6: '5',
    cell7: '0',
    cell8: '70020',
    cell9: '70.0%',
    cell10: '3',
    cell11: '1',
    cell12: '1',
    cell13: '5',
    cell14: '0',
    cell15: '70020',
    cell16: '70.0%',
  },
  {
    cell1: '총계',
    cell2: '소계',
    cell3: '3',
    cell4: '1',
    cell5: '1',
    cell6: '5',
    cell7: '0',
    cell8: '70020',
    cell9: '70.0%',
    cell10: '3',
    cell11: '1',
    cell12: '1',
    cell13: '5',
    cell14: '0',
    cell15: '70020',
    cell16: '70.0%',
  },
  {
    cell1: '총계',
    cell2: '소계',
    cell3: '3',
    cell4: '1',
    cell5: '1',
    cell6: '5',
    cell7: '0',
    cell8: '70020',
    cell9: '70.0%',
    cell10: '3',
    cell11: '1',
    cell12: '1',
    cell13: '5',
    cell14: '0',
    cell15: '70020',
    cell16: '70.0%',
  },
]

onMounted(async () => {
  initClCdSheet(sheetID1, sheetId1Options, sheetId1Data)
  initClCdSheet(sheetID2, sheetId2Options, sheetId2Data)
  initClCdSheet(sheetID3, sheetId3Options, sheetId3Data)
  initClCdSheet(sheetID4, sheetId4Options, sheetId4Data)
})

onUnmounted(() => {
  removeSheet(sheetID1)
  removeSheet(sheetID2)
  removeSheet(sheetID3)
  removeSheet(sheetID4)
})
</script>

<style lang="scss" scoped>
#guideRoot {
  padding: 23px;
}

.titleLabel {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;

  background-color: #334da0;

  h1 {
    font-weight: 700;
    padding-left: 44px;
    font-size: 36px;
    color: #fff;
  }
}

.groupWrapper {
  margin-top: 30px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
}

/* .fileInputBoxWrapper {
  max-width: 250px;
} */

.popupSectionTitleArea {
  width: 50%;
  padding: 0;
}

.bottomArea {
  width: 50%;
}

.statisticsArea {
  max-width: 1590px;
}

.resultArea {
  justify-content: flex-start;
}

.label {
  margin: 0;
}

.accordionArea {
  max-width: 660px;
}

.drawerRoot {
  height: 911px;
}

.baseSelectWrapper {
  min-width: 150px;
}

.baseTabWrapper {
  &.tabType2,
  &.tabType3 {
    padding: 0;
  }
}

.cardWrapper,
.menuBoxWrapper {
  margin-top: 0;
}
</style>
