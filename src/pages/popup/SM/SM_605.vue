<template>
  <Popup :maxWidth="400" :visible="popupVisible">
    <SectionTitle
      title="상위메뉴 검색"
      titleIcon="list-check"
      @close="popupVisible = false"
    />
    <PopupSectionBody>
      <BaseAccordion :data="accordionData" v-model="openIndex" />

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
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
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
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
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
        title: '권한 관리',
        link: '/',
        menus: [],
      },
      {
        title: '롤 관리',
        link: '/',
        menus: [],
      },
      {
        title: '사용자 관리',
        link: '/',
        menus: [],
      },
      {
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
        title: '권한 관리',
        menus: [],
      },
      {
        title: '롤 관리',
        menus: [],
      },
      {
        title: '사용자 관리',
        menus: [],
      },
      {
        title: '부서 관리',
        menus: [],
      },
    ],
  },
]
</script>
