<template>
  <div class="statisticsArea">
    <ul class="statisticsList">
      <li class="statisticsItem" v-for="(statItem, statIndex) in data" :key="statItem.id">
        <div class="statisticsLeft">
          <i :class="`ico statistics${statIndex + 1}`"></i>
        </div>
        <div class="statisticsRight">
          <span class="statisticsTitle">{{ statItem.title }}</span>
          <div class="statisticsCounter">
            <strong class="statisticsCounterText">{{ statItem.count ? statItem.count : 0 }}</strong>
            <span class="statisticsCounterText onlyText">건</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
