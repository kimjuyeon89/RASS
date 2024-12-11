<template>
  <Popup :maxWidth="660" :visible="popupVisible">
    <SectionTitle
      title="정합계수 일괄등록"
      titleIcon="calendar"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <div class="popupSectonDescArea">
        <p class="popupSectionDescText">
          엑셀파일을 추가하여 일괄로 정합계수를 시스템이 등록합니다.
        </p>
        <div class="popupSectionDescGroup">
          <BaseButton label="일괄 등록" styleClassName="md bgBlue pd-sm" />
          <BaseButton
            label="양식 다운로드"
            styleClassName="md bdGray pd-sm i-download-gray"
          />
        </div>
      </div>

      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">정합계수 일괄등록</span>

          <FileInputWrapper label="파일 선택">
            <template v-slot:left>
              <FileInputBox inputId="f01" filePlaceholder="선택된 파일없음" />
            </template>
          </FileInputWrapper>
        </div>
      </div>

      <p class="popupCautionText">
        ※ 기존 등록 정합계수와 비교분석이 진행되어 시간이 소요될 수 있습니다.
      </p>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const popupVisible = ref(true)
</script>
