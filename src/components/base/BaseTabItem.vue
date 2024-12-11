<template>
  <div class="baseTabInner">
    <div class="baseTabInnerGroup">
      <slot name="listButton" />
    </div>
    <ul class="baseTabList" v-if="!itemType">
      <li
        @click="selectTab(tabItem.name)"
        v-for="tabItem in data"
        :key="tabItem.id"
        :class="`baseTabItem ${modelValue === tabItem.name ? 'active' : ''}`"
      >
        <button type="button" class="baseTabItemButton">
          <span class="baseTabText"> {{ tabItem.name }}</span>
          <span class="baseTabCount" v-if="tabItem.count">
            {{ tabItem.count }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
/* modelValue: tab current */

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
  itemType: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const selectTab = index => {
  console.log(props.modelValue)
  emit('update:modelValue', index)
}
</script>
