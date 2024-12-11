<template>
  <aside class="drawerRoot">
    <div class="drawerInner">
      <div class="drawerLogoArea">
        <h1>
          <router-link to="/" class="drawerLogoLink">
            <img
              width="180"
              height="20"
              src="../../../assets/logo/logo-side.svg"
              alt="LX 한국국토정보공사"
            />
          </router-link>
        </h1>
      </div>

      <DepthItem :links-list="linksList" />
    </div>
  </aside>
</template>

<script setup>
defineOptions({
  name: 'SubSidebar',
})

import DepthItem from './DepthItem.vue'

const linksList = [
  {
    id: 1,
    title: '유지관리 업무지원',
    icon: 'side01',
    state: '',
    links: [
      {
        state: '',
        title: '건물 현행화',
        links: [],
      },
      {
        state: '',
        title: '도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '사물주소 현행화',
        links: [],
      },
      {
        state: '',
        title: '행정구역(통리) 현행화',
        links: [],
      },
      {
        state: '',
        title: '입체도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '내부도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '장소지능정보 현행화',
        links: [],
      },
      {
        state: '',
        title: '수시정비 관리',
        links: [
          {
            title: '성과물 등록',
          },
          {
            title: '진행현황',
          },
          {
            title: '신청취소목록',
          },
        ],
      },

      {
        state: '',
        title: '일변동 자료정보',
        links: [],
      },
      {
        state: '',
        title: '업무지원검수',
        links: [],
      },
      {
        state: '',
        title: '정합계수 통합 관리',
        links: [],
      },
      {
        state: '',
        title: '정합계수 통합 관리',
        links: [],
      },
    ],
  },
  {
    id: 2,
    title: '현장조사 관리',
    icon: 'side02',
    state: '',
    links: [
      {
        state: '',
        title: '건물 현행화',
        links: [],
      },
      {
        state: '',
        title: '도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '사물주소 현행화',
        links: [],
      },
      {
        state: '',
        title: '행정구역(통리) 현행화',
        links: [],
      },
      {
        state: '',
        title: '입체도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '내부도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '장소지능정보 현행화',
        links: [],
      },
      {
        state: '',
        title: '수시정비 관리',
        links: [],
      },
      {
        state: '',
        title: '성과물 등록',
        links: [
          {
            title: '진행현황',
          },
          {
            title: '신청취소목록',
          },
        ],
      },
      {
        state: '',
        title: '일변동 자료정보',
        links: [],
      },
      {
        state: '',
        title: '업무지원검수',
        links: [],
      },
      {
        state: '',
        title: '정합계수 통합 관리',
        links: [],
      },
    ],
  },
  {
    id: 3,
    title: '국가지점번호 관리',
    icon: 'side03',
    state: '',
    links: [
      {
        state: '',
        title: '건물 현행화',
        links: [],
      },
      {
        state: '',
        title: '도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '사물주소 현행화',
        links: [],
      },
      {
        state: '',
        title: '행정구역(통리) 현행화',
        links: [],
      },
      {
        state: '',
        title: '입체도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '내부도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '장소지능정보 현행화',
        links: [],
      },
      {
        state: '',
        title: '수시정비 관리',
        links: [],
      },
      {
        state: '',
        title: '성과물 등록',
        links: [
          {
            title: '진행현황',
          },
          {
            title: '신청취소목록',
          },
        ],
      },
      {
        state: '',
        title: '일변동 자료정보',
        links: [],
      },
      {
        state: '',
        title: '업무지원검수',
        links: [],
      },
      {
        state: '',
        title: '정합계수 통합 관리',
        links: [],
      },
    ],
  },
  {
    id: 4,
    title: '운영 관리',
    icon: 'side04',
    state: '',
    links: [
      {
        state: '',
        title: '건물 현행화',
        links: [],
      },
      {
        state: '',
        title: '도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '사물주소 현행화',
        links: [],
      },
      {
        state: '',
        title: '행정구역(통리) 현행화',
        links: [],
      },
      {
        state: '',
        title: '입체도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '내부도로 현행화',
        links: [],
      },
      {
        state: '',
        title: '장소지능정보 현행화',
        links: [],
      },
      {
        state: '',
        title: '수시정비 관리',
        links: [],
      },
      {
        state: '',
        title: '성과물 등록',
        links: [
          {
            title: '진행현황',
          },
          {
            title: '신청취소목록',
          },
        ],
      },
      {
        state: '',
        title: '일변동 자료정보',
        links: [],
      },
      {
        state: '',
        title: '업무지원검수',
        links: [],
      },
      {
        state: '',
        title: '정합계수 통합 관리',
        links: [],
      },
    ],
  },
]
</script>
