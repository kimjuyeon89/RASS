<template>
  <footer class="footer" id="footer">
    <div class="footerInner">
      <div class="footerInfoArea">
        <img
          width="128"
          height="22"
          src="../../assets/footer/logo-footer.svg"
          alt="LX 한국국토정보공사"
        />

        <ul class="footerInfoList">
          <li class="footerInfoItem">
            <p class="footerInfoText">
              전북특별자치도 전주시 덕진구 기지로 120(중동)
            </p>
          </li>
          <li class="footerInfoItem">
            <strong class="footerInfoText tel">044-715-5524</strong>
          </li>
        </ul>
      </div>

      <div class="footerSiteArea">
        <button type="button" class="btnTel">
          <i class="ico tel"></i>
          <span>공사 본부별 연락처 보기</span>
        </button>

        <div class="footerSelectList">
          <div
            v-for="(selectItem, selectIndex) in selectList"
            :key="selectItem.id"
            class="footerSelectItem"
          >
            <BaseSelect
              :initialSelectValue="selectList[selectIndex].name"
              :options="selectList[selectIndex].options"
              styleClassName="footerType"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import BaseSelect from '@/components/base/BaseSelect.vue'

defineOptions({
  name: 'LayoutFooter',
})

const selectList = ref([
  {
    id: 1,
    name: '지역본부 사이트',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 2,
    name: '관련 사이트',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
  {
    id: 3,
    name: '패밀리 사이트',
    options: ['옵션1', '옵션2', '옵션3', '옵션4'],
  },
])
</script>
