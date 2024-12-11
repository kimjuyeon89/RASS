<template>
  <div class="topArea">
    <BreadCrumbs
      :data="routeValue.breadCrumbs"
      :title="routeValue.title"
      :prev="routeValue.prev"
    />
    <div class="topRow">
      <h2 class="topTitle">{{ routeValue.title }}</h2>
    </div>

    <div :class="`topRow bottom ${routeValue.desc != '' ? '' : 'noDesc'}`">
      <p v-if="routeValue.desc != ''" class="topRowDesc">
        {{ routeValue.desc }}
      </p>
    </div>

    <div class="topRowButtonGroup" v-if="routeValue.buttons != null">
      <BaseButton
        v-for="button in routeValue.buttons"
        :key="button.id"
        :label="button.name"
        :styleClassName="`md pd-sm ${button.styleClassName ? button.styleClassName : ''} ${button.icon ? button.icon : ''}`"
      />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/base/BaseButton.vue'
import BreadCrumbs from '@/components/sub/layout/BreadCrumbs.vue'

const props = defineProps({
  routeId: {
    type: String,
  },
  routeCategory: {
    type: String,
  },
})

console.log(props.routeId)

const routeCondition = (id, category) => {
  if (id === '1101' && category === 'bs') {
    return {
      title: '총괄공정관리',
      prev: '유지관리 업무지원',
      desc: '건물 구축실적 통계정보를 관리합니다.',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          icon: 'i-excel-green bdGray',
        },
      ],
    }
  }

  if (id === '1201' && category === 'bs') {
    return {
      title: '정합계수 통합 관리',
      prev: '유지관리 업무지원',
      desc: '정합계수 통합 정보를 관리합니다.',
      buttons: [
        {
          id: 1,
          name: '수정',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '삭제',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: '등록',
          styleClassName: 'bgBlue',
        },
        {
          id: 4,
          name: '일괄등록',
          styleClassName: 'bgBlue',
        },
        {
          id: 5,
          name: '검증확인',
          styleClassName: 'bgAqua',
        },
        {
          id: 6,
          name: '엑셀출력',
          icon: 'bdGray i-excel-green',
        },
      ],
    }
  }

  if (
    (id === '901' && category === 'bs') ||
    (id === '901_noData' && category === 'bs')
  ) {
    return {
      title: '사물주소 현장조사',
      prev: '현장조사 관리',
      desc: '사물주소 현장조사 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '일괄등록',
          styleClassName: 'bgBlue',
        },
        {
          id: 2,
          name: '현장조사결과서',
          styleClassName: 'bgBlue',
        },
        {
          id: 3,
          name: '엑셀출력',
          icon: 'bdGray i-excel-green',
        },
      ],
    }
  }

  if (id === '905' && category === 'bs') {
    return {
      title: '사물주소 현장조사 통계',
      prev: '현장조사 관리',
      desc: '사물주소 현장조사 통계를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          icon: 'bdGray i-excel-green',
        },
      ],
    }
  }

  if (id === '911' && category === 'bs') {
    return {
      title: '장소지능정보 현장조사',
      prev: '현장조사 관리',
      desc: '장소지능정보 현장조사 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '삭제',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '검색',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: '일괄등록',
          styleClassName: 'bgBlue',
        },
        {
          id: 4,
          name: '현장조사결과서',
          styleClassName: 'bgBlue',
        },
        {
          id: 5,
          name: '엑셀출력',
          icon: 'bdGray i-excel-green',
        },
      ],
    }
  }

  if (id === '914' && category === 'bs') {
    return {
      title: '장소지능정보 현장조사 통계',
      prev: '현장조사 관리',
      desc: '',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          icon: 'bdGray i-excel-green',
        },
      ],
    }
  }

  if (id === '301' && category === 'sm') {
    return {
      title: '사용자관리',
      prev: '운영관리',
      desc: 'RASS시스템의 사용자를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '동기화',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '신규등록',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '401' && category === 'sm') {
    return {
      title: '접속정보조회',
      prev: '운영관리',
      desc: '사용자 접속 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '동기화',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '신규등록',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '402' && category === 'sm') {
    return {
      title: '접속통계조회',
      prev: '운영 관리',
      desc: '사용자 접속 통계 정보를 조회합니다.',
      buttons: null,
    }
  }

  if (id === '501' && category === 'sm') {
    return {
      title: '프로그램 목록 관리',
      prev: '운영 관리',
      desc: '프로그램 목록',
      buttons: null,
    }
  }

  if (id === '504' && category === 'sm') {
    return {
      title: '롤 관리',
      prev: '운영관리',
      desc: '롤 목록',
      buttons: null,
    }
  }

  if (id === '604' && category === 'bs') {
    return {
      title: '내부도로현행화 성과물등록',
      prev: null,
      desc: null,
      buttons: null,
    }
  }

  if (id === '507' && category === 'sm') {
    return {
      title: '권한 관리',
      prev: '운영관리',
      desc: '권한 목록',
      buttons: null,
    }
  }

  if (id === '508' && category === 'sm') {
    return {
      title: '권한 - 롤 관리',
      prev: '운영관리',
      desc: '권한 - 롤 관리',
      buttons: null,
    }
  }

  if (id === '601' && category === 'sm') {
    return {
      title: '메뉴목록 관리',
      prev: '운영관리',
      desc: '메뉴 목록',
      buttons: null,
    }
  }

  if (id === '604' && category === 'sm') {
    return {
      title: '메뉴목록 관리',
      prev: '운영관리',
      desc: '메뉴 목록 (Tree)',
      buttons: null,
    }
  }

  if (id === '607' && category === 'sm') {
    return {
      title: '메뉴생성 관리',
      prev: '운영관리',
      desc: '권한 목록',
      buttons: null,
    }
  }

  if (id === '701' && category === 'sm') {
    return {
      title: '커뮤니티',
      prev: '운영관리',
      desc: '공지사항 목록',
      buttons: null,
    }
  }

  if (id === '711' && category === 'sm') {
    return {
      title: '커뮤니티',
      prev: '운영관리',
      desc: '질의응답 목록',
      buttons: null,
    }
  }

  if (id === '801' && category === 'sm') {
    return {
      title: '연계정보관리',
      prev: '운영관리',
      desc: '건물 구축실적 통계정보를 관리합니다.',
      buttons: null,
    }
  }

  if (id === '901_1' && category === 'sm') {
    return {
      title: '공통코드 관리',
      prev: '운영관리',
      desc: '공통코드 분류',
      buttons: null,
    }
  }

  if (id === '901_2' && category === 'sm') {
    return {
      title: '공통코드 관리',
      prev: '운영관리',
      desc: '공통코드 상세',
      buttons: null,
    }
  }

  if (id === '101' && category === 'bs') {
    return {
      title: '건물 현행화 접수',
      prev: null,
      desc: '건물 현행화 의뢰접수 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '일괄접수 다운로드',
          styleClassName: 'bgBlue',
        },
        {
          id: 2,
          name: '과거측량/기준점',
          styleClassName: 'bgBlue',
        },
        {
          id: 3,
          name: '보완요청',
          styleClassName: 'bgAqua',
        },
        {
          id: 4,
          name: '접수',
          styleClassName: 'bgAqua',
        },
        {
          id: 5,
          name: '엑셀출력',
          icon: 'i-excel-green bdGray',
        },
      ],
    }
  }

  if (id === '102' && category === 'bs') {
    return {
      title: '건물 현행화 진행현황',
      prev: null,
      desc: '',
      buttons: null,
    }
  }

  if (id === '104' && category === 'bs') {
    return {
      title: '건물 현행화 성과물등록 (1차)',
      prev: null,
      desc: '',
      buttons: null,
    }
  }

  if (id === '105' && category === 'bs') {
    return {
      title: '건물 현행화 건물군내 동별정보 성과물등록 (2차)',
      prev: null,
      desc: '',
      buttons: null,
    }
  }

  if (id === '106' && category === 'bs') {
    return {
      title: '건물현행화 의뢰보완(반려) 이력관리',
      prev: null,
      desc: '건물현행화 의뢰보안(반려) 이력 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '201' && category === 'bs') {
    return {
      title: '도로현행화 접수',
      prev: null,
      desc: '',
      buttons: [
        {
          id: 1,
          name: '접수/다운로드',
          styleClassName: 'bgBlue',
        },
        {
          id: 2,
          name: '보완요청',
          styleClassName: 'bgAqua',
        },
        {
          id: 3,
          name: '엑셀출력',
          icon: 'i-excel-green bdGray',
        },
      ],
    }
  }

  if (id === '202' && category === 'bs') {
    return {
      title: '도로현행화 진행현황',
      prev: null,
      desc: '',
      buttons: null,
    }
  }

  if (id === '204' && category === 'bs') {
    return {
      title: '도로현행화 성과물등록',
      prev: null,
      desc: '',
      buttons: null,
    }
  }

  if (id === '205' && category === 'bs') {
    return {
      title: '도로현행화 신청보완(반려) 이력관리',
      prev: null,
      desc: '',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '1001' && category === 'bs') {
    return {
      title: '일변동 자료정보',
      prev: null,
      desc: '일변동 자료를 조회합니다.',
      buttons: null,
    }
  }

  if (id === '801' && category === 'bs') {
    return {
      title: '수시정비 현행화 신규 등록',
      prev: '유지관리 업무지원',
      desc: null,
      buttons: null,
    }
  }

  if (id === '704' && category === 'bs') {
    return {
      title: '장소지능정보 현행화 성과물 등록',
      prev: '유지관리 업무지원',
      desc: null,
      buttons: [
        {
          id: 1,
          name: '상세보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '504' && category === 'bs') {
    return {
      title: '입체도로 현행화 성과물 등록',
      prev: null,
      desc: null,
      buttons: null,
    }
  }

  if (id === '404' && category === 'bs') {
    return {
      title: '행정구역통리 현행화 성과물 등록',
      prev: null,
      desc: null,
      buttons: [
        {
          id: 1,
          name: '상세보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '304' && category === 'bs') {
    return {
      title: '사물주소 현행화 성과물 등록',
      prev: null,
      desc: null,
      buttons: null,
    }
  }

  if (id === '101' && category === 'pm') {
    return {
      title: '업무접수',
      prev: null,
      desc: '국가지점번호 COS 접수 내역을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '접수',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '102' && category === 'pm') {
    return {
      title: '성과작성',
      prev: null,
      desc: '국가지점번호 성과작성 파일을 등록합니다.',
      buttons: [
        {
          id: 1,
          name: '지도에서 보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '등록',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '103' && category === 'pm') {
    return {
      title: '성과작성',
      prev: null,
      desc: '국가지점번호 성과작성 파일을 등록합니다.',
      buttons: [
        {
          id: 1,
          name: '수정',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '본부확인',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: '지도에서 보기',
          styleClassName: 'bdGray',
        },
        {
          id: 4,
          name: '전자결재',
          styleClassName: 'bgBlue',
        },
        {
          id: 5,
          name: 'KAIS 통보',
          styleClassName: 'bgBlue',
        },
        {
          id: 6,
          name: '일괄등록',
          styleClassName: 'bgBlue',
        },
        {
          id: 7,
          name: '일괄에서 업무로 변경',
          styleClassName: 'bgBlue',
        },
        {
          id: 8,
          name: '총계정별 검색',
          styleClassName: 'bgAqua',
        },
        {
          id: 9,
          name: '결과통보서 업로드',
          styleClassName: 'bgAqua',
        },
      ],
    }
  }

  if (id === '104' && category === 'pm') {
    return {
      title: '전자결재',
      prev: null,
      desc: '국가지점번호 전자결재 요청 내역을 조회 및 승인합니다. 일괄승인은 10건씩으로 제한합니다.',
      buttons: [
        {
          id: 1,
          name: '반려',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '결재',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '105' && category === 'pm') {
    return {
      title: '본부확인',
      prev: null,
      desc: '국가지점번호 본부확인 요청 내역을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '수정',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '반려',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: 'KAIS 통보',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '106' && category === 'pm') {
    return {
      title: '진행현황',
      prev: null,
      desc: '국가지점번호 진행현황 내역을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '삭제',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '상세보기',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: '지도에서 보기',
          styleClassName: 'bdGray',
        },
        {
          id: 4,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '107' && category === 'pm') {
    return {
      title: '검증결과',
      prev: null,
      desc: '국가지점번호 검증결과 내역을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '지도에서 보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '108' && category === 'pm') {
    return {
      title: '상태이력',
      prev: null,
      desc: '국가지점번호 상태이력을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '상세보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '지도에서 보기',
          styleClassName: 'bdGray',
        },
        {
          id: 3,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '109' && category === 'pm') {
    return {
      title: '통계',
      prev: null,
      desc: '국가지점번호 통계정보를 관리합니다.',
      buttons: [
        {
          id: 1,
          name: '상세보기',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '110' && category === 'pm') {
    return {
      title: '지점번호 일제조사',
      prev: null,
      desc: '국가지점번호 일제조사 목록을 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '엑셀출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '111' && category === 'pm') {
    return {
      title: '국가지점번호 일제조사 통계',
      prev: null,
      desc: '국가지점번호 일제조사 통계 정보를 조회합니다.',
      buttons: [
        {
          id: 1,
          name: '출력',
          styleClassName: 'bdGray',
        },
      ],
    }
  }

  if (id === 'temp1') {
    return {
      title: '행정구역명 축약관리',
      prev: null,
      desc: null,
      buttons: [
        {
          id: 1,
          name: '삭제',
          styleClassName: 'bdGray',
        },
        {
          id: 2,
          name: '등록',
          styleClassName: 'bgBlue',
        },
      ],
    }
  }

  if (id === '301') {
    return {
      title: '사물주소현행화 접수',
      prev: null,
      desc: null,
      buttons: [
        {
          id: 1,
          name: '접수/다운로드',
          styleClassName: 'bgBlue',
          icon: 'i-download-white',
        },
        {
          id: 2,
          name: '보완요청',
          styleClassName: 'bgAqua',
        },
        {
          id: 3,
          name: '엑셀 출력',
          styleClassName: 'bdGray',
          icon: 'i-excel-green',
        },
      ],
    }
  }

  if (id === '1501') {
    return {
      title: '건축물대장 조회',
      prev: null,
      desc: '건축물대장을 조회합니다.',
      buttons: null,
    }
  }

  if (id === '1502') {
    return {
      title: '건축물대장 도면 다운로드',
      prev: null,
      desc: '일괄등록은 1000 건 이하로 등록 가능. 18:00~06:00 등록가능',
      buttons: [
        {
          id: 1,
          name: '엑셀 업로드',
          styleClassName: 'bdBlue',
          icon: 'i-upload',
        },
        {
          id: 2,
          name: '삭제',
          styleClassName: 'bdGray',
        },
      ],
    }
  }

  if (id === '1401') {
    return {
      title: '육안검수 검수사업',
      prev: null,
      desc: '육안검수 검수사업을 조회합니다.',
    }
  }
  if (id === '1402') {
    return {
      title: '육안검수 검수상세조회(검수사업명)',
      prev: null,
      // desc: '등록된 검수대상 목록의 통계를 조회합니다.',
    }
  }

  return undefined
}

const routeValue = routeCondition(props.routeId, props.routeCategory)

console.log(routeValue)
</script>
