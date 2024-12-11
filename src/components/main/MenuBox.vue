<template>
  <div class="menuBoxWrapper">
    <div class="menuBoxInner">
      <ul class="menuBoxList">
        <li
          v-for="menuItem in data"
          :key="menuItem.id"
          :class="`menuBoxItem ${menuItem.color} ${menuItem.icon}`"
        >
          <router-link :to="menuItem.link" class="menuBoxItemLink"
            >{{ menuItem.title }}
            <i class="ico menuBoxArrow menuLinkNextElement" v-if="!state"></i>
          </router-link>

          <button
            type="button"
            class="btnCardItemAdd btnCardItemButton menuLinkNextElement"
            v-if="state"
          >
            <span class="hidden">추가하기</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MenuBox',
})

defineProps({
  state: {
    type: Boolean,
  },
  data: {
    type: Object,
  },
})
</script>
