<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import router from '@/router'

export default {
  router
}
</script>
<style scoped>
.container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
