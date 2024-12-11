<template>
  <div class="cardWrapper">
    <div class="cardRowGroup end">
      <button
        type="button"
        class="btnCardSettingSave"
        @click="settingClickFn(false)"
        v-if="state"
      >
        저장
      </button>
      <button
        type="button"
        class="btnCardSetting"
        @click="settingClickFn(true)"
        v-if="!state"
      >
        <span class="hidden">기능 편집하기</span>
      </button>
    </div>

    <div class="cardList">
      <CardItem :emptyText="emptyText" :state="state" :data="data" />
    </div>
  </div>
</template>

<script setup>
import CardItem from '@/components/main/CardItem.vue'

defineOptions({
  name: 'MainCard',
})

defineProps({
  state: {
    type: Boolean,
  },
  data: {
    type: Array,
  },
  emptyText: {
    type: String,
    required: true,
  },
})

const settingEmit = defineEmits(['settingClick'])

const settingClickFn = state => {
  settingEmit('settingClick', state)
}
</script>
