<template>
  <div class="intergratedSearchArea">
    <div class="intergratedSearchGroup">
      <h2 class="intergratedSearchTitle">
        <img
          width="421"
          height="29"
          src="../../assets/logo/logo-integratedSearch.svg"
          alt="RASS 주소정보 지원시스템"
        />
      </h2>
      <div class="intergratedSearchInput">
        <BaseInput inputType="text" :placeholder="placeholder">
          <template v-slot:prepend>
            <BaseButton
              hiddenText="검색"
              styleClassName="btnIntegratedSearch"
            />
          </template>
        </BaseInput>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

defineOptions({
  name: 'IntergratedSearch',
})

const { placeholder } = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
})
</script>
