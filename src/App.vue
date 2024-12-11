<template>
  <router-view />
</template>

<script setup>
import loader from '@ibsheet/loader'

loader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: '/src/lib/ibsheet', // ibsheet.js 파일 위치
      theme: 'mint', // css 파일 테마  (설정이 없으면 /css/default/main.css 사용)
      locales: ['en', 'ko'], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용)
      plugins: [
        // plugin 파일
        'dialog',
      ],
      // ibsheet license string
      license:
        'W2FtSztPKCJzazYxYjJxbn8QYkI6Rjd0ODh4bDBkLWMrKwQnTXcJYS4gXTwlZjF5AhpYJ3FCPxMjPWVgMWYydA==',
    },
  ],
})
loader.load() // 실제 ibsheet파일을 로드
</script>
