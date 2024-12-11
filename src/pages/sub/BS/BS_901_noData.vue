<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow" style="padding-right: 119px">
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
            <span class="searchLabel">일련번호</span>
            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
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
            <span class="searchLabel">진행상태</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>

          <div class="searchColumn">
            <span class="searchLabel">검수일자</span>
            <!--  -->
            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" inputValue="" />
            </div>

            <BaseCheckbox
              id="check1"
              styleClassName="abs"
              :islabel="true"
              inlineStyle="right: -40px"
            />
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <!-- sectionContainer -->
    <section class="sectionContainer col">
      <div class="sectionBox">
        <SectionTitle title="사물주소 위치현황도" />

        <NoData
          className="border"
          height="370px"
          :src="getImageUrl('../../assets/table/img-no-data.svg')"
          alt="데이터가 없습니다."
        />
      </div>

      <div class="sectionBox both cg65">
        <div class="sectionBox">
          <SectionTitle title="사물주소 현황조사 사진(원경)" />

          <NoData
            className="border"
            height="370px"
            :src="getImageUrl('../../assets/table/img-no-data.svg')"
            alt="데이터가 없습니다."
          />
        </div>
        <div class="sectionBox">
          <SectionTitle title="사물주소 현황조사 사진(근경)" />

          <NoData
            className="border"
            height="370px"
            :src="getImageUrl('../../assets/table/img-no-data.svg')"
            alt="데이터가 없습니다."
          />
        </div>
      </div>
    </section>
    <!-- //sectionContainer -->
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import NoData from '@/components/sub/section/NoData.vue'
import SectionTitle from '@/components/sub/section/SectionTitle.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { getImageUrl } from '@/util/sub/getImageUrl'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const selectList = ref([
  {
    id: 1,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '2024년',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 4,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 5,
    name: '전체',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
