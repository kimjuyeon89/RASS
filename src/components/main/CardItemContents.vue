<template>
  <div class="cardItemContents">
    <slot name="empty" />
    <div class="cardTop">
      <div class="cardTitleArea">
        <h3 class="cardTitleText">{{ title }}</h3>
        <button type="button" class="btnCardShortcut">
          <span>바로가기</span>
          <i class="ico shortcut"></i>
        </button>
      </div>
    </div>

    <div class="cardBottom">
      <div class="cardBottomRowList">
        <div v-for="row in counts" :key="row.id" class="cardBottomRow">
          <span class="cardBottomRowText">{{ row.name }}</span>
          <div class="cardBottomCount">
            <strong class="cardBottomCountText number">{{ row.count }}</strong>
            <span class="cardBottomCountText">건</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  counts: {
    type: Object,
  },
})
</script>
