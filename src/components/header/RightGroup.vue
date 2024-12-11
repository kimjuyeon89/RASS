<template>
  <div class="headerRightGroup">
    <div class="headerRightAuthArea">
      <div class="headerRightAuthTextArea">
        <strong class="text-color-deep-blue">홍길동</strong>
        <span class="headerRightAuthText">님이 로그인 하셨습니다.</span>
      </div>
    </div>

    <div class="headerRightButtonGroup">
      <button class="btnLogout">
        <i class="ico logout"></i>
        <span>로그아웃</span>
      </button>

      <button
        type="button"
        @click="toggleExpansion()"
        :class="`btnToggleExpansion ${expansion ? 'active' : ''}`"
      >
        <span class="hidden">확장</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expansion = ref(false)

const toggleExpansion = () => {
  expansion.value = !expansion.value
}
</script>
