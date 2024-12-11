<template>
  <Popup :maxWidth="400" :visible="popupVisible">
    <SectionTitle
      title="메뉴 생성"
      titleIcon="list-check"
      @close="popupVisible = false"
    />
    <PopupSectionBody>
      <div class="searchArea">
        <div class="searchColumn">
          <span class="searchLabel">권한코드</span>
          <BaseInput
            inputType="text"
            inputValue="ROLE_ENTRPRSMBER_MANAGE"
            disabled
          />
        </div>
      </div>

      <BaseAccordion
        :isCheckbox="true"
        :data="accordionData"
        v-model="openIndex"
      >
        <template v-slot:depth1Item>
          <li class="accordionDepth1Item">
            <div class="accordionDepth1Header noAccordion">
              <BaseCheckbox
                hiddenLabel="메뉴목록"
                styleClassName="sm2"
                id="depth1Check0"
              />
              <button type="button" class="accordionDepth1HeaderText">
                메뉴목록
              </button>
              <BaseButton label="메뉴 생성" styleClassName="bdBlue" />
            </div>
          </li>
        </template>
      </BaseAccordion>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
        </template>
      </BottomArea>
    </PopupSectionBody>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import Popup from '@/components/popup/Popup.vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import BaseAccordion from '@/components/base/BaseAccordion.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'

const popupVisible = ref(true)

const openIndex = ref(0)

/* Accordion.vue data */
const accordionData = [
  {
    id: 1,
    title: '시스템 관리',
    icon: 'folder',
    menus: [
      {
        label: 1,
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        label: 2,
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        label: 3,
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        label: 4,
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 2,
    title: '메뉴 관리',
    icon: 'list-check',
    menus: [
      {
        label: 5,
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        label: 6,
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        label: 7,
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        label: 8,
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 3,
    title: '코드 관리',
    icon: 'code',
    menus: [
      {
        label: 9,
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        label: 10,
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        label: 11,
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
        label: 12,
        title: '부서 관리',
        link: '/',
        menus: [],
      },
    ],
  },
  {
    id: 4,
    title: '로그 관리',
    icon: 'set',
    menus: [
      {
        label: 13,
        title: '권한 관리',
        menus: [],
      },
      {
        label: 14,
        title: '롤 관리',
        menus: [],
      },
      {
        label: 15,
        title: '사용자 관리',
        menus: [],
      },
      {
        label: 16,
        title: '부서 관리',
        menus: [],
      },
    ],
  },
]
</script>
