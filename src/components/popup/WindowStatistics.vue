<template>
  <section class="popupStatArea">
    <div class="popupStatTitleArea">
      <i class="ico building-title"></i>
      <h2 class="popupStatTitleText">본&nbsp;사</h2>
    </div>

    <ul class="popupStatList">
      <li
        v-for="(popupStatItem, popupStatIndex) in data"
        :key="popupStatItem.id"
        :class="`popupStatItem  ${backgroundCondition(popupStatItem.id)}`"
      >
        <div class="popupStatItemBox">
          <div
            v-for="(row, rowIndex) in popupStatItem.items"
            :key="rowIndex"
            :class="`popupStatRow ${rowState[popupStatIndex] === rowIndex ? 'active' : ''}`"
          >
            <button
              type="button"
              class="popupStatRowTitle"
              @click="rowClick(popupStatIndex, rowIndex)"
            >
              <i :class="`ico ${row.icon}`"></i>
              <p class="popupStatRowTitleText">{{ row.title }}</p>
            </button>

            <div class="popupStatRowCounter">
              <strong class="popupStatRowCounterText">{{ row.count }}</strong>
              <span class="popupStatRowCounterText">건</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const rowState = ref(props.data.map(() => null))

const backgroundCondition = id => {
  if (id === 1) return 'blue'
  if (id === 2) return 'aqua'
  if (id === 3) return 'orange'

  return undefined
}

const rowClick = (itemIndex, rowIndex) => {
  rowState.value = rowState.value.map((state, i) =>
    i === itemIndex ? rowIndex : null,
  )
}
</script>
