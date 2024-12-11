<template>
  <SubRoot>
    <div class="searchArea">
      <!-- searchColumnRowContainer -->
      <div class="searchColumnRowContainer">
        <!-- searchColumnRow -->
        <div class="searchColumnRow">
          <div class="searchColumn">
            <span class="searchLabel">기간</span>
            <div class="searchColumnInputBox">
              <BaseInput inputType="text" inputValue="" />
              <span class="betweenText">~</span>
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>
          <div class="searchColumn">
            <span class="searchLabel">기간구분</span>
            <BaseSelect
              initialSelectValue="전체"
              :options="selectList[0].options"
            />
          </div>
          <div class="searchColumn">
            <span class="searchLabel">통계구분</span>

            <div class="searchColumnInputBox">
              <BaseSelect
                initialSelectValue="전체"
                :options="selectList[1].options"
              />
              <BaseInput inputType="text" inputValue="" />
            </div>
          </div>

          <BaseButton label="검색" styleClassName="md bgGray" />
        </div>
        <!-- //searchColumnRow -->
      </div>
      <!-- //searchColumnRowContainer -->
    </div>

    <div class="graphArea">
      <div class="graph" style="height: 440px; background-color: #ffc8c8">
        그래프 영역
      </div>
    </div>
  </SubRoot>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import SubRoot from '@/components/sub/layout/SubRoot.vue'

const selectList = ref([
  {
    id: 1,
    name: '월별',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '개인별',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
