<template>
  <div
    :class="`sectionTitleGroup ${descBox ? 'aife' : ''} ${descRight ? 'hasDescRight' : ''} ${hasFile ? 'hasFile' : ''}`"
  >
    <slot name="left" />
    <h3
      :class="`sectionTitle ${titleClassName ? titleClassName : ''} ${required ? 'required' : ''}`"
      v-if="title && !titleType"
    >
      {{ title }}
    </h3>
    <strong class="sectionTitle dot" v-else-if="titleType === 'dot'">{{
      title
    }}</strong>

    <strong
      class="sectionTitle dot listStyleNone bullet-play"
      v-else-if="titleType === 'bullet-play'"
      >{{ title }}</strong
    >

    <div
      :class="`sectionDescriptionArea ${descRight ? 'wd100' : ''}`"
      v-if="descState"
    >
      <SectionDescriptionBox :descGroupData="descGroupData" v-if="descBox" />

      <p
        :class="`sectionDescription ${textColor ? textColor : ''}`"
        v-if="descText"
      >
        {{ descText }}
      </p>
      <div class="sectionTitleRightGroup" v-if="descRight">
        <slot name="descRight" />
      </div>
    </div>

    <div
      :style="rightGroupStyle ? rightGroupStyle : ''"
      :class="`sectionTitleRightGroup ${!title && !descState ? 'right' : ''}`"
      v-if="right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
import SectionDescriptionBox from './SectionDescriptionBox.vue'

defineProps({
  title: {
    type: String,
  },
  titleClassName: {
    type: String,
  },
  titleType: {
    type: String,
  },
  right: {
    type: Boolean,
  },
  rightGroupStyle: {
    type: String,
  },
  descState: {
    type: Boolean,
  },
  descText: {
    type: String,
  },
  textColor: {
    type: String,
  },
  descBox: {
    type: Boolean,
  },
  descGroupData: {
    type: Array,
  },
  descRight: {
    type: Boolean,
  },
  required: {
    type: Boolean,
  },
  hasFile: {
    type: Boolean,
  },
})
</script>
