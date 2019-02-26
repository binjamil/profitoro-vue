<template>
  <div class="jumbotron">
    <div class="container">
      <h1>Statistics</h1>
      <p>Total Pomodoros: {{ totalPomodoros }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      totalPomodoros: 'getTotalPomodoros'
    })
  }
}
</script>
<style scoped lang="scss"></style>
