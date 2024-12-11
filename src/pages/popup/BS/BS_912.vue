<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="보완요청"
      titleIcon="target"
      @close="popupVisible = false"
    />
    <PopupSectionBody>
      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">검수보완 사유</span>

          <BaseSelect initialSelectValue="선택" :options="selectOption1" />
        </div>
      </div>

      <div class="textareaBox">
        <label for="t01" class="textareaTitle">검수보완 사유 입력</label>
        <BaseTextarea
          id="t01"
          inputValue="Text"
          inlineStyle="height: 144px"
          v-model="text"
        />

        <div class="stringCount">
          <span class="text-color-blue">{{ textLength }}</span>
          <span class="unit">/</span>
          <span>1000</span>
        </div>
      </div>

      <BottomArea right="true">
        <template v-slot:right>
          <BaseButton label="저장" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSelect from '@/components/base/BaseSelect.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'

const popupVisible = ref(true)
const text = ref('')

const textLength = computed(() => text.value.length)

const selectOption1 = ref(['옵션1', '옵션2', '옵션3', '옵션4'])
/* --- */
</script>
