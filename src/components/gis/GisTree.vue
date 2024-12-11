<template>
  <div class="treeWrapper">
    <!-- depth1 -->
    <ul class="treeDepth1List">
      <li
        v-for="(depth1Item, depth1Index) in data"
        :key="depth1Item.id"
        :class="`treeDepth1Item treeItem ${depth1Item.items ? 'hasItems' : ''} ${depth1Item?.disabled ? 'disabled' : ''} ${isExpanded(depth1Item.id) ? 'active' : ''}`"
      >
        <div class="treeDepth1ItemBox">
          <button
            type="button"
            class="treeItemExpandButton"
            @click="toggleExpand(depth1Item.id)"
          >
            <span class="hidden">펼치기</span>
            <BaseCheckbox
              :id="`${checkboxPrefix.prefix1}-${depth1Index + 1}`"
            />
            <label
              :for="`${checkboxPrefix.prefix1}-${depth1Index + 1}`"
              class="treeItemText"
              >{{ depth1Item.title }}</label
            >
          </button>
        </div>

        <!-- depth2 -->
        <ul
          class="treeDepth2List"
          v-if="isExpanded(depth1Item.id) && depth1Item.items"
        >
          <li
            v-for="(depth2Item, depth2Index) in depth1Item.items"
            :key="depth2Item.title"
            :class="`treeDepth2Item treeItem ${depth2Item.items2 ? 'hasItems' : ''} ${depth2Item?.disabled ? 'disabled' : ''} ${isExpanded(depth2Item.title) ? 'active' : ''}`"
          >
            <div class="treeDepth2ItemBox">
              <BaseCheckbox
                :id="`${checkboxPrefix.prefix2}-${depth2Index + 1}`"
              />
              <button
                type="button"
                class="treeItemExpandButton"
                @click="toggleExpand(depth2Item.title)"
              >
                <span class="hidden">펼치기</span>
                <label
                  :for="`${checkboxPrefix.prefix2}-${depth2Index + 1}`"
                  class="treeItemText"
                  >{{ depth2Item.title }}</label
                >
              </button>
            </div>

            <!-- depth3 -->
            <ul
              class="treeDepth3List"
              v-if="isExpanded(depth2Item.title) && depth2Item.items2"
            >
              <li
                v-for="(depth3Item, depth3Index) in depth2Item.items2"
                :key="depth3Item.title"
                :class="`treeDepth3Item treeItem  ${depth3Item?.disabled ? 'disabled' : ''} ${isExpanded(depth3Item.title) ? 'active' : ''}`"
              >
                <div class="treeDepth3ItemBox">
                  <BaseCheckbox
                    :disabled="depth3Item?.disabled || false"
                    :id="`${checkboxPrefix.prefix3}-${depth3Index + 1}`"
                  />
                  <button type="button" class="treeItemText">
                    <label
                      :for="`${checkboxPrefix.prefix3}-${depth3Index + 1}`"
                    >
                      {{ depth3Item.title }}</label
                    >
                  </button>
                </div>
              </li>
            </ul>
            <!-- //depth3 -->
          </li>
        </ul>
        <!-- //depth2 -->
      </li>
    </ul>
    <!-- //depth1 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
  checkboxPrefix: {
    type: Object,
    required: true,
  },
})

const expandedState = ref({})

const toggleExpand = id => {
  expandedState.value[id] = !expandedState.value[id]
}

const isExpanded = id => {
  return expandedState.value[id]
}
</script>
