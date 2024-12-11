<template>
  <header
    :class="`gisHeader ${styleClassName ? styleClassName : ''}`"
    id="gisHeader"
  >
    <div class="gisHeaderLogoArea">
      <h1>
        <router-link to="/">
          <img
            src="../../assets/gis/logo-gis.svg"
            width="114"
            height="26"
            alt="RASS"
          />
        </router-link>
      </h1>
    </div>

    <slot name="contents" />
  </header>
</template>

<script setup>
defineProps({
  styleClassName: {
    type: String,
  },
})
</script>
