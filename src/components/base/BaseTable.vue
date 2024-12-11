<template>
  <div
    :class="`baseTable ${styleClassName ? styleClassName : ''}`"
    :style="inlineStyle ? inlineStyle : ''"
  >
    <table :style="tableInlineStyle ? tableInlineStyle : ''">
      <caption v-if="caption">
        {{
          caption.name
        }}
        테이블로
        {{
          caption.cell
        }}
        정보들을 제공합니다.
      </caption>
      <slot />
    </table>
  </div>
</template>

<script setup>
defineProps({
  caption: {
    type: Object,
  },
  styleClassName: {
    type: String,
  },
  inlineStyle: {
    type: String,
  },
  tableInlineStyle: {
    type: String,
  },
})
</script>
