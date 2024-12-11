<template>
  <div
    :class="`baseCheckboxWrapper ${styleClassName ? styleClassName : ''} ${indeterminate && disabled ? 'disabled' : ''} `"
    :aria-checked="checkboxState === null ? 'mixed' : null"
    @click="handleClick"
    :style="inlineStyle ? inlineStyle : ''"
  >
    <input
      ref="checkbox"
      type="checkbox"
      :id="id"
      :name="name"
      :disabled="disabled"
      :checked="checkboxState === true"
      :class="`baseCheckbox baseInput ${disabled ? 'disabled' : ''}`"
    />
    <label class="baseCheckboxLabel" :for="id">
      <span v-if="!hiddenLabel && isLabel">{{ label }}</span>
      <span class="hidden" v-else-if="hiddenLabel">{{ hiddenLabel }}</span>
    </label>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  hiddenLabel: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  checked: {
    type: Boolean,
  },
  styleClassName: {
    type: String,
  },
  isLabel: {
    type: Boolean,
  },
  indeterminate: {
    type: Boolean,
  },
  inlineStyle: {
    type: String,
  },
})

const checkbox = ref(null)

/* 체크박스 컴포넌트 사용시 indeterminate가 true 면 null로 바꾸고, 
아니면 props로 받은 checked값, 혹은 checked props가 없으면 false로 사용 */
const checkboxState = ref(props.indeterminate ? null : props.checked || false)

const handleClick = () => {
  if (props.indeterminate && !props.disabled) {
    toggleCheckbox()
  }
}

const toggleCheckbox = () => {
  if (checkboxState.value === null) {
    checkboxState.value = true
  } else if (checkboxState.value === true) {
    checkboxState.value = false
  } else {
    checkboxState.value = null
  }
  updateCheckboxState()
}

const updateCheckboxState = () => {
  checkbox.value.indeterminate = checkboxState.value === null
  checkbox.value.checked = checkboxState.value === true

  //   console.log(checkboxState)
}

onMounted(() => {
  updateCheckboxState()
})
</script>
