<template>
  <div
    ref="wrapper"
    :class="`contentListWrapper ${name === 'noDrag' ? '' : 'gisElement'} ${styleClassName ? styleClassName : ''}`"
    :style="style"
  >
    <div class="contentListInner" :style="inlineStyle ? inlineStyle : ''">
      <div
        :ref="drag ? 'el' : null"
        class="contentListHead"
        v-if="name !== 'noDrag' || count"
      >
        <strong class="contentListTitle">{{ title }}</strong>
        <div class="contentListTitle" v-if="count">
          <span>검색결과</span>
          <strong class="contentListCountText">{{ count }}</strong>
          <span>건</span>
        </div>
        <slot name="headRight" />
      </div>
      <div class="contentListBody">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDraggable } from '@vueuse/core'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  name: {
    type: String,
  },
  drag: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  inlineStyle: {
    type: [Object, String],
  },
  styleClassName: {
    type: String,
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
  count: {
    type: Number,
  },
})

const el = ref(null)
const wrapper = ref(null)

const { style, x, y } = useDraggable(el, {
  draggingElement: wrapper.value || document.body,
  initialValue: { x: props.x, y: props.y },
})

const boundary = ref({
  left: 0,
  top: 0,
  right: window.innerWidth,
  bottom: window.innerHeight,
})

const updateBoundaries = () => {
  if (wrapper.value) {
    boundary.value.right = window.innerWidth - wrapper.value.offsetWidth
    boundary.value.bottom = window.innerHeight - wrapper.value.offsetHeight
  }
}

watch([x, y], ([newX, newY]) => {
  x.value = Math.max(boundary.value.left, Math.min(boundary.value.right, newX))
  y.value = Math.max(boundary.value.top, Math.min(boundary.value.bottom, newY))
})

onMounted(() => {
  updateBoundaries()
  window.addEventListener('resize', updateBoundaries)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBoundaries)
})
</script>
