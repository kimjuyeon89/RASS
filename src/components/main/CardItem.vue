<template>
  <div class="cardItemParent">
    <div
      v-for="(cardItem, cardIndex) in filledData"
      :key="cardIndex"
      :class="`cardItem index${cardIndex + 1}`"
    >
      <div v-if="cardItem">
        <button
          type="button"
          class="btnCardItemRemove btnCardItemButton"
          v-if="state"
        >
          <span class="hidden">삭제하기</span>
        </button>

        <CardItemContents
          :title="cardItem.title"
          :counts="cardItem.quantityCounts"
        />
      </div>

      <CardEmpty :text="emptyText" v-else />
    </div>
  </div>
</template>

<script setup>
import CardItemContents from '@/components/main/CardItemContents.vue'
import CardEmpty from '@/components/main/CardEmpty.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  emptyText: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
  },
})

/* 카드 최대 개수 (4개) 와 card data 개수를 서로 빼서
  card data가 3개 이하로 들어오면 empty 컴포넌트를 렌더링
*/
const filledData = [...props.data, ...Array(4 - props.data.length).fill(null)]
</script>
