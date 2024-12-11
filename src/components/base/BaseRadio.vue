<template>
  <div :class="`baseRadioWrapper ${styleClassName ? styleClassName : ''}`">
    <input
      type="radio"
      :name="name"
      :id="id"
      :disabled="disabled"
      :checked="checked"
      :class="`baseRadio baseInput ${disabled ? 'disabled' : ''}`"
    />
    <label class="baseRadioLabel" :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  label: {
    type: String,
    required: true,
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
})
</script>
