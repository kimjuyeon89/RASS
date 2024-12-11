<template>
  <Popup :maxWidth="1280" :visible="popupVisible">
    <SectionTitle
      title="국가지점번호 상세보기"
      titleIcon="phone"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <section class="popupSection">
        <BaseTable styleClassName="rowType">
          <colgroup>
            <col style="width: 140px" />
            <col style="width: 266px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 140px" />
            <col style="width: 266px" />
          </colgroup>

          <tbody>
            <tr>
              <th scope="row" class="text-center">국가지점번호</th>
              <td class="text-left" colspan="2">나라73250452</td>
              <th scope="row" class="text-center">시설물종류</th>
              <td class="text-left" colspan="2">송전철탑</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">설치기관구분</th>
              <td class="text-left" colspan="2">한국전력공사</td>
              <th scope="row" class="text-center">설치기관명칭</th>
              <td class="text-left" colspan="2">한국전력공사 서울지역본부</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">설치기관주소</th>
              <td class="text-left" colspan="2">
                전라남도 나주시 전력로 55 (빛가람동, 한국전력공사) 을지로2가
                199-4
              </td>
              <th scope="row" class="text-center">설치유형</th>
              <td class="text-left" colspan="2">독립지주식형</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">지역본부</th>
              <td class="text-left" colspan="2">서울지역본부</td>
              <th scope="row" class="text-center">지사</th>
              <td class="text-left" colspan="2">공간정보사업처</td>
            </tr>
            <tr>
              <th scope="row" class="text-center table-background-gray">
                검증자 자격
              </th>
              <td class="text-left" colspan="2">지적기사</td>
              <th scope="row" class="text-center">검증자</th>
              <td class="text-left" colspan="2">박형래</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">검증기관장</th>
              <td class="text-left" colspan="2">서울지역본부장</td>
              <th scope="row" class="text-center">기관장통보일자</th>
              <td class="text-left" colspan="2">2017-11-20</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">X(N)좌표</th>
              <td class="text-left">1959430.312</td>
              <th scope="row" class="text-center">Y(E)좌표</th>
              <td class="text-left">947569.077</td>
              <th scope="row" class="text-center">Z좌표(표고)</th>
              <td class="text-left">152.747</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">표기위치 X좌표</th>
              <td class="text-left">-</td>
              <th scope="row" class="text-center">표기위치 Y좌표</th>
              <td class="text-left">-</td>
              <th scope="row" class="text-center">표기위치 Z좌표</th>
              <td class="text-left">-</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">ΔX좌표</th>
              <td class="text-left">1959430.312</td>
              <th scope="row" class="text-center">ΔY좌표</th>
              <td class="text-left">947569.077</td>
              <th scope="row" class="text-center">거리차</th>
              <td class="text-left">2176523.444</td>
            </tr>
            <tr>
              <th scope="row" class="text-center">경도(deg)</th>
              <td class="text-left">126.90577200</td>
              <th scope="row" class="text-center">위도(deg)</th>
              <td class="text-left">37.63284200</td>
              <th scope="row" class="text-center">높이(타원체고)</th>
              <td class="text-left">11.000</td>
            </tr>
          </tbody>
        </BaseTable>
      </section>

      <section class="popupSection">
        <div class="sectionContainer cg40 half">
          <div class="sectionBox">
            <div class="sectionInnerContainer">
              <div class="sectionInnerBox">
                <SubSectionTitle
                  title="전경사진 (전경)"
                  :right="true"
                  :hasFile="true"
                  titleType="dot"
                >
                </SubSectionTitle>
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
                <SubSectionTitle
                  title="전경사진 (원경)"
                  :right="true"
                  :hasFile="true"
                  titleType="dot"
                >
                </SubSectionTitle>

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

          <div class="sectionBox">
            <SubSectionTitle
              title="약도"
              :right="true"
              :hasFile="true"
              titleType="dot"
            >
            </SubSectionTitle>

            <div class="sectionInnerContainer">
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
      </section>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { getImageUrl } from '@/util/sub/getImageUrl'

import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import SubSectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import NoData from '@/components/sub/section/NoData.vue'

const popupVisible = ref(true)
</script>
