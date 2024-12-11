<template>
  <div
    :class="`baseSelectWrapper ${styleClassName ? styleClassName : ''} ${disabled ? 'disabled' : ''} ${error ? 'error' : ''} ${isOpen ? 'active' : ''}`"
    :style="`${inlineStyle ? inlineStyle : ''}`"
  >
    <span class="beforeText" v-if="before === 'text'">{{ beforeLabel }}</span>

    <button
      type="button"
      class="baseSelectValue"
      @click="toggleSelect"
      :disabled="disabled"
    >
      {{ selectValue }}
    </button>
    <ul class="baseSelectList" v-if="isOpen">
      <li
        class="baseSelectItem"
        v-for="selectItem in options"
        :key="selectItem.id"
      >
        <button
          type="button"
          class="baseSelectButton"
          @click="updateSelectValue(selectItem)"
        >
          {{ selectItem }}
        </button>
      </li>
    </ul>
    <span class="errorMessage" v-if="error">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialSelectValue: {
    type: String,
    required: true,
  },
  before: {
    type: String,
  },
  beforeLabel: {
    type: String,
  },
  options: {
    type: Object,
    required: true,
  },
  styleClassName: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  error: {
    type: Boolean,
  },
  errorMessage: {
    type: String,
  },
  inlineStyle: {
    type: String,
  },
})

const selectValue = ref(props.initialSelectValue)
const isOpen = ref(false)

const toggleSelect = () => {
  isOpen.value = !isOpen.value
}

const updateSelectValue = newValue => {
  selectValue.value = newValue
  isOpen.value = false // 선택 후 드롭다운 닫기
}
</script>
