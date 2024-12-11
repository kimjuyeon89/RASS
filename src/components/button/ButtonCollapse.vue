<template>
  <button
    type="button"
    @click="emitToggle"
    :class="`btnSectionCollapse ${state ? 'active' : ''}`"
  >
    <span class="hidden">{{ state ? '접기' : '펼치기' }}</span>
  </button>
</template>

<script setup>
defineOptions({
  name: 'ButtonCollapse',
})

const props = defineProps({
  state: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:state'])

const emitToggle = () => {
  emit('update:state', !props.state)
}
</script>
