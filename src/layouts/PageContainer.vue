<template>
  <div class="pageContainer">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  width: 100%;
  height: calc(100vh - 50px);
  margin-top: auto;
  padding: 20px 42px 0 42px;
  overflow-y: auto;
}
</style>
