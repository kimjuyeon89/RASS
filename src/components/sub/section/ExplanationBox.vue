<template>
  <div
    :class="`explanationBox ${styleType ? styleType : ''} ${styleType === 'noList' ? 'gray' : ''}`"
  >
    <strong class="explanationTitle" v-if="title">{{ title }}</strong>

    <div class="explanationList" v-if="data">
      <div
        v-for="explanationItem in data"
        :key="explanationItem.id"
        class="explanationItem"
      >
        <div class="explanationItemTitleArea" v-if="title">
          <strong class="explanationItemTitle">{{
            explanationItem.title
          }}</strong>
        </div>

        <div class="explanationTextArea">
          <p
            v-for="explanationText in explanationItem.items"
            :key="explanationText.text"
            class="explanationText"
          >
            {{ explanationText.text }}
          </p>
        </div>
      </div>
    </div>

    <template v-else>
      <slot name="content" />
    </template>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ExplanationBox',
})

defineProps({
  styleType: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
  },
})
</script>
