<template>
  <div>
    <count-down-timer
      @finished="togglePomodoro"
      :time="time"
    ></count-down-timer>
  </div>
</template>

<script>
import CountDownTimer from './timer/CountDownTimer'
import config from '../../../config'

export default {
  data() {
    return {
      isWorking: true,
      isShortBreak: false,
      isLongBreak: false,
      pomodoros: 0
    }
  },
  computed: {
    time() {
      let minutes

      if (this.isWorking) {
        minutes = config.workingPomodoro
      } else if (this.isShortBreak) {
        minutes = config.shortBreak
      } else if (this.isLongBreak) {
        minutes = config.longBreak
      }

      return minutes * 60
    }
  },
  components: {
    CountDownTimer
  },
  methods: {
    togglePomodoro() {
      // toggle the working state
      this.isWorking = !this.isWorking

      // reset break states
      this.isShortBreak = this.isLongBreak = false

      // we have switched to the working state, just return
      if (this.isWorking) {
        return
      }

      // we have switched to the break state, increase the number of pomodoros and choose between long and short break
      this.pomodoros++
      this.isLongBreak = this.pomodoros % config.pomodorosTillLongBreak === 0
      this.isShortBreak = !this.isLongBreak
    }
  }
}
</script>

<style scoped lang="sass"></style>
