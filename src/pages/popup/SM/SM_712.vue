<template>
  <Popup :maxWidth="860" :visible="popupVisible" class="fixed">
    <SectionTitle
      title="질의응답 상세조회/수정"
      titleIcon="question"
      @close="popupVisible = false"
    />

    <PopupSectionBody>
      <BaseTable :caption="caption" class="rowType">
        <colgroup>
          <col style="width: 120px" />
          <col style="width: 146px" />
          <col style="width: 120px" />
          <col style="width: 146px" />
          <col style="width: 120px" />
          <col style="width: 146px" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center">제목</th>
            <td colspan="5" class="text-center">
              <BaseInput inputType="text" inputValue="안녕하세요" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">작성자</th>
            <td class="text-center">최**</td>
            <th scope="row" class="text-center">작성일시</th>
            <td class="text-center">2024-07-08</td>
            <th scope="row" class="text-center">조회수</th>
            <td class="text-center">216</td>
          </tr>
          <tr>
            <th scope="row" class="text-center">내용</th>
            <td colspan="5">
              <BaseTextarea inlineStyle="height: 180px" v-model="text" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BaseTable>
        <colgroup>
          <col style="width: 60px" />
          <col style="width: 60px" />
          <col style="width: auto" />
          <col style="width: 200px" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col" class="text-center">
              <span class="hidden">index</span>
            </th>
            <th scope="col" class="text-center">
              <BaseCheckbox id="check1" />
            </th>
            <th scope="col" class="text-center">파일명</th>
            <th scope="col" class="text-center">확장자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">1</td>
            <td class="text-center">
              <BaseCheckbox id="check2" />
            </td>
            <td class="text-center">기본도 갱신이력관리내역-20240507.xls</td>
            <td class="text-center">xls</td>
          </tr>
        </tbody>
      </BaseTable>

      <Pagination
        typeClassName="board"
        :currentPage="pagination.group1.currentPage"
        :totalPages="pagination.group1.totalPages"
      >
        <template v-slot:right>
          <div class="paginationRightButton">
            <BaseButton
              label="다운로드"
              styleClassName="md pd-sm bdGray i-download-gray"
            />
          </div>
        </template>
      </Pagination>

      <Comment
        :isPaging="isPaging"
        :data="commentList"
        :textareaState="textarea2"
        :pagingObject="pagination.group2"
      />
    </PopupSectionBody>
    <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
          <BaseButton label="취소" styleClassName="md pd-sm bdGray" />
          <BaseButton label="수정" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
  </Popup>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/popup/SectionTitle.vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import Pagination from '@/components/sub/paging/Pagination.vue'
import Comment from '@/components/popup/Comment.vue'

import Popup from '@/components/popup/Popup.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import PopupSectionBody from '@/components/popup/PopupSectionBody.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import BaseTextarea from '@/components/base/BaseTextarea.vue'

const popupVisible = ref(true)

const text = ref('정합계수 파일 올립니다.')

/* paging */
const pagination = ref({
  group1: {
    currentPage: 1,
    totalPages: 2,
  },
  group2: {
    currentPage: 1,
    totalPages: 2,
  },
})

const isPaging = ref(true)

const commentList = ref([
  {
    id: 1,
    username: '관리자',
    comment: '수고가 많으십니다.',
    date: '2024-07-22 17:12',
  },
])

const caption = {
  name: '질의응답 상세조회/수정',
  cell: '제목,작성자,작성일시,조회수,내용',
}
</script>
