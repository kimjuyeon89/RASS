<template>
  <!--  -->
  <div class="noticeWrapper">
    <div class="noticeHead">
      <h3 class="noticeHeadTitle">공지사항</h3>
      <button type="button" class="btnNoticeMore">
        <span>더보기</span>
        <i class="ico plus"></i>
      </button>
    </div>

    <div class="noticeBody">
      <ul class="noticeList">
        <li v-for="noticeItem in data" :key="noticeItem.id" class="noticeItem">
          <router-link :to="noticeItem.link" class="noticeLink">
            <h4 class="noticeTitle">
              {{ noticeItem.title }}
            </h4>
            <div class="noticeUser">
              <i class="ico user"></i>
              <span class="noticeUserText">{{ noticeItem.username }}</span>
            </div>
            <time :datetime="noticeItem.date" class="noticeDate">{{
              noticeItem.date
            }}</time>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MainNotice',
})

defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
