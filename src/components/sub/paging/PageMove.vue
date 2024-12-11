<template>
  <div :class="`pageMoveArea ${styleClassName ? styleClassName : ''}`">
    <div class="pageMoveInput">
      <BaseInput
        :inlineStyle="inputStyle ? inputStyle : ''"
        :inputValue="inputValue"
        inputType="text"
      />
      <span class="betweenText">/</span>
      <span class="total">{{ total }}</span>
    </div>
    <div class="pageMoveButton">
      <BaseButton label="이동" styleClassName="mixBlue" />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'

defineProps({
  inputValue: {
    type: Number,
  },
  total: {
    type: Number,
  },
  inputStyle: {
    type: String,
  },
  styleClassName: {
    type: String,
  },
})
</script>
