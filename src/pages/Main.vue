<template>
  <div class="pageContainerInner">
    <IntegratedSearch :placeholder="'검색어를 입력하세요'" />
    <Card :data="cardList" :state="setting" @setting-click="settingClick" />
    <MenuBox :state="setting" :data="menus" />
    <Notice :data="noticeList" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IntegratedSearch from '@/components/main/IntegratedSearch.vue'
import Card from '@/components/main/Card.vue'
import MenuBox from '@/components/main/MenuBox.vue'
import Notice from '@/components/main/Notice.vue'

defineOptions({
  name: 'IndexPage',
})

const setting = ref(false)

const settingClick = state => {
  setting.value = state
}

const menus = [
  {
    id: 1,
    title: '내부도로',
    link: '/',
    color: 'purple',
    icon: 'pinMap',
  },
  {
    id: 2,
    title: '장소지능',
    link: '/',
    color: 'blue',
    icon: 'satellite',
  },
  {
    id: 3,
    title: '국가지점',
    link: '/',
    color: 'blue2',
    icon: 'pin',
  },
  {
    id: 4,
    title: '현장조사',
    link: '/',
    color: 'mint',
    icon: 'mapSearch',
  },
  {
    id: 5,
    title: '입체도로',
    link: '/',
    color: 'green',
    icon: 'cube',
  },
  {
    id: 6,
    title: '검수',
    link: '/',
    color: 'red',
    icon: 'pinCheck',
  },
]

const cardList = ref([
  {
    id: 1,
    title: '국가지점번호 현장조사',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 2,
    title: '건물 현행화',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 3,
    title: '사물주소',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
  {
    id: 4,
    title: '입체도로',
    quantityCounts: [
      {
        id: 1,
        name: '요청물량',
        count: 10,
      },
      {
        id: 2,
        name: '진행물량',
        count: 5,
      },
      {
        id: 3,
        name: '완료물량',
        count: 4,
      },
    ],
  },
])

const noticeList = [
  {
    id: 1,
    title:
      '랜디고 현장조사 데이터 등록 알림 랜디고 현장조사 데이터 등록 알림랜디고 현장조사 데이터 등록 알림',
    username: 'DB구축 담당자',
    date: '2024-07-03 12:10',
    link: '/',
  },
  {
    id: 2,
    title: '랜디고 현장조사 데이터 등록 알림',
    username: 'DB구축 담당자',
    date: '2024-07-03 12:10',
    link: '/',
  },
  {
    id: 3,
    title: '랜디고 현장조사 데이터 등록 알림',
    username: 'DB구축 담당자',
    date: '2024-07-03 12:10',
    link: '/',
  },
  {
    id: 4,
    title: '랜디고 현장조사 데이터 등록 알림',
    username: 'DB구축 담당자',
    date: '2024-07-03 12:10',
    link: '/',
  },
]
</script>
