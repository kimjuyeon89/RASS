<template>
  <section class="sectionContainer hasAccordion aifs">
    <div class="sectionBox">
      <BaseAccordion :data="menuList" v-model="openIndex" />
    </div>

    <div class="sectionBox">
      <BaseTable class="rowType">
        <colgroup>
          <col style="width: 270px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row" class="text-center required cell">메뉴 ID</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">메뉴 순서</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">메뉴명</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">상위메뉴 ID</th>
            <td>
              <div class="rowTableItem gap0 wide">
                <BaseInput inputType="text" inputValue="" />
                <BaseButton
                  label="프로그램파일명 검색"
                  styleClassName="md pd-sm bgGray"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">파일명</th>
            <td>
              <div class="wide">
                <FileInputWrapper label="파일 선택">
                  <template v-slot:left>
                    <FileInputBox />
                  </template>
                </FileInputWrapper>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">이미지명</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">이미지 URL</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-center">메뉴 설명</th>
            <td>
              <BaseInput inputType="text" inputValue="" />
            </td>
          </tr>
        </tbody>
      </BaseTable>

      <BottomArea :right="true">
        <template v-slot:right>
          <BaseButton label="초기화" styleClassName="md pd-sm bdGray" />
          <BaseButton label="삭제" styleClassName="md pd-sm bdGray" />
          <BaseButton label="수정" styleClassName="md pd-sm bgBlue" />
          <BaseButton label="등록" styleClassName="md pd-sm bgBlue" />
        </template>
      </BottomArea>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BottomArea from '@/components/sub/section/BottomArea.vue'
import BaseAccordion from '@/components/base/BaseAccordion.vue'
import FileInputWrapper from '@/components/sub/file/FileInputWrapper.vue'
import FileInputBox from '@/components/sub/file/FileInputBox.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseTable from '@/components/base/BaseTable.vue'

const openIndex = ref(0)

const menuList = ref([
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
])
</script>
