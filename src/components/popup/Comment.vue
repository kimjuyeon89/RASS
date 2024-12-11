<template>
  <div class="commentArea">
    <div class="commentTop">
      <BaseTable styleClassName="commentTable">
        <colgroup>
          <col style="width: 50px" />
          <col style="width: auto" />
          <col style="width: 170px" />
        </colgroup>
        <tbody>
          <tr v-for="commentItem in data" :key="commentItem.id">
            <td>
              <span class="commentUsername">{{ commentItem.username }}</span>
            </td>
            <td>
              <p class="commentText">{{ commentItem.comment }}</p>
            </td>
            <td>
              <div class="commentRowRight">
                <time class="commentDate">{{ commentItem.date }}</time>
                <BaseButton label="삭제" styleClassName="sm bdGray" />
              </div>
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        typeClassName="board"
        :currentPage="pagingObject.currentPage"
        :totalPages="pagingObject.totalPages"
        v-if="isPaging"
      />
    </div>
    <div class="commentBottom">
      <div class="commentBottomInner">
        <BaseTextarea inlineStyle="height: 80px" />
        <BaseButton label="댓글등록" styleClassName="md pd-sm mixBlue" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Pagination from '@/components/sub/paging/Pagination.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'

defineOptions({
  name: 'PopupComment',
})

defineProps({
  data: {
    type: Array,
    required: true,
  },
  isPaging: {
    type: Boolean,
  },
  pagingObject: {
    type: Object,
  },
})
</script>
