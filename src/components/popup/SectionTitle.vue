<template>
  <section class="popupSectionTitleArea">
    <strong :class="`popupSectionTitleText ${titleIcon}`">{{ title }}</strong>
    <button type="button" class="baseButton i-close" @click="closePopup">
      <span class="hidden">팝업 닫기</span>
    </button>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titleIcon: {
    type: String,
  },
})

const emit = defineEmits(['close'])

const closePopup = () => {
  console.log('close!')
  emit('close')
}
</script>
