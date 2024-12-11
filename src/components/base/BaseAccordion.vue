<template>
  <div class="accordionArea">
    <ul class="accordionDepth1List">
      <!-- depth1 -->
      <slot name="depth1Item" />
      <li
        :class="`accordionDepth1Item ${
          expansionItem.icon == null ? 'noIcon' : expansionItem.icon
        } ${modelValue === expansionIndex ? 'active' : ''}`"
        v-for="(expansionItem, expansionIndex) in data"
        :key="expansionItem.id"
      >
        <div class="accordionDepth1Header">
          <BaseCheckbox
            v-if="isCheckbox"
            styleClassName="sm2"
            :id="`depth1Check${expansionItem.id}`"
            :hiddenLabel="expansionItem.title"
          />
          <button
            type="button"
            class="accordionDepth1HeaderText"
            @click="toggleAccordion(expansionIndex)"
          >
            {{ expansionItem.title }}
          </button>
        </div>

        <div
          class="accordionDepth1Contents"
          ref="contentRefs"
          :style="`max-height: ${modelValue === expansionIndex ? contentHeights[expansionIndex] + 'px' : '0'}`"
        >
          <ul class="accordionDepth2List">
            <!-- depth2 -->
            <li
              v-for="expansionDepth2Item in expansionItem.menus"
              class="accordionDepth2Item"
              :key="expansionDepth2Item.title"
            >
              <!-- 3뎁스가 존재하는경우 -->
              <template v-if="expansionDepth2Item.menus.length > 0">
                <span class="accordionDepth2ItemText">{{
                  expansionDepth2Item.title
                }}</span>
              </template>

              <!-- 3뎁스가 없고, 체크박스도 없을 때 -->
              <template
                v-else-if="!expansionDepth2Item.menus.length > 0 && !isCheckbox"
              >
                <router-link
                  class="accordionDepth2ItemText"
                  :to="expansionDepth2Item.link ? expansionDepth2Item.link : ''"
                >
                  {{ expansionDepth2Item.title }}
                </router-link>
              </template>

              <!-- 3뎁스는 없지만 체크박스가 있을 때 -->
              <template
                v-else-if="!expansionDepth2Item.menus.length > 0 && isCheckbox"
              >
                <BaseCheckbox
                  v-if="isCheckbox"
                  styleClassName="sm2"
                  :id="`check${expansionDepth2Item.label}`"
                  :hiddenLabel="expansionDepth2Item.title"
                />
                <label
                  :for="`check${expansionDepth2Item.label}`"
                  class="accordionDepth2ItemText"
                >
                  {{ expansionDepth2Item.title }}
                </label>
              </template>
            </li>
            <!-- //depth2 -->
          </ul>
        </div>
      </li>
      <!-- //depth1 -->
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Number,
  },
  isCheckbox: {
    type: Boolean,
  },
})

const emit = defineEmits(['update:modelValue'])

const contentHeights = ref([])
const contentRefs = ref([])

const toggleAccordion = index => {
  emit('update:modelValue', props.modelValue === index ? null : index)
}

onMounted(() => {
  contentHeights.value = contentRefs.value.map(content => content.scrollHeight)
})
</script>
