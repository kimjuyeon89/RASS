<template>
  <div class="pagingContainer">
    <!-- paginationArea -->
    <div
      :class="`paginationArea ${stateClassName ? stateClassName : ''} ${typeClassName ? typeClassName : ''}`"
    >
      <div class="paginationArrows">
        <button
          type="button"
          :class="`btnFirst ${currentPage === 1 ? 'disabled' : ''}`"
          v-if="!bothEnd"
        >
          <span>처음</span>
        </button>
        <button
          type="button"
          :class="`btnPrev ${currentPage === 1 ? 'disabled' : ''}`"
        >
          <span>이전</span>
        </button>
      </div>

      <div class="paginationNumbers">
        <button
          v-for="page in totalPages"
          :key="page"
          type="button"
          :class="`btnPage ${page === currentPage ? 'active' : ''}`"
        >
          {{ page }}
        </button>
      </div>

      <div class="paginationArrows">
        <button
          type="button"
          :class="`btnNext ${currentPage === totalPages ? 'disabled' : ''}`"
        >
          <span>다음</span>
        </button>
        <button
          type="button"
          :class="`btnLast ${currentPage === totalPages ? 'disabled' : ''}`"
          v-if="!bothEnd"
        >
          <span>끝</span>
        </button>
      </div>
    </div>
    <!-- //paginationArea -->

    <slot name="right" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'CommonPagination',
})

defineProps({
  typeClassName: {
    type: String,
  },
  stateClassName: {
    type: String,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  bothEnd: {
    type: Boolean,
  },
})
</script>
