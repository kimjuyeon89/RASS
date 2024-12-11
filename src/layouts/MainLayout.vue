<template>
  <div id="layoutRoot">
    <Sidebar />
    <LayoutHeader />
    <PageContainer>
      <router-view />
      <LayoutFooter />
    </PageContainer>
  </div>
</template>

<script setup>
import PageContainer from '@/layouts/PageContainer.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import Sidebar from '@/components/sub/side/Sidebar.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
</script>
