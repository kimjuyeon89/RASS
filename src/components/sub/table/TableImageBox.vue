<template>
  <div class="tableImageBox">
    <div class="tableImageArea">
      <img
        :src="src"
        :width="imgWidth ? imgWidth : 319"
        :height="imgHeight ? imgHeight : 186"
        alt="첨부파일 이미지"
        :class="imgClassName ? imgClassName : ''"
      />
    </div>
    <div class="tableImageBoxGroup">
      <BaseInput inputType="text" :readonly="true" :inputValue="value" />
      <BaseButton label="첨부파일 다운로드" styleClassName="md bdBlue" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

defineProps({
  src: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  imgClassName: {
    type: String,
  },
  imgWidth: {
    type: Number,
  },
  imgHeight: {
    type: Number,
  },
})
</script>
