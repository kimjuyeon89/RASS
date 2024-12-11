<template>
  <div class="fileInputBox" :style="maxWidth ? `max-width: ${maxWidth}px` : ''">
    <input
      type="text"
      class="baseTextField placeholderInput"
      :placeholder="filePlaceholder"
      :value="inputValue"
    />
    <input type="file" class="baseTextField fileInput" :id="inputId" />
  </div>
</template>

<script setup>
defineProps({
  filePlaceholder: {
    type: String,
  },
  maxWidth: {
    type: Number,
  },
  isLabel: {
    type: Boolean,
  },
  inputId: {
    type: String,
  },
  inputValue: {
    type: String,
  },
})
</script>
