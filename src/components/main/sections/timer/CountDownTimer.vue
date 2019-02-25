<template>
  <div class="container">
    <div>
      <div class="row justify-content-center">
        <svg-circle-sector
          class="col-sm-12 col-md-8 col-lg-6 col-xl-4"
          :angle="angle"
          :text="text"
        ></svg-circle-sector>
      </div>
      <div class="controls text-center">
        <div class="btn-group" role="group">
          <button
            @click="start"
            type="button"
            :class="{ disabled: isStarted && !isPaused }"
            class="btn btn-link"
          >
            Start
          </button>
          <button
            @click="pause"
            type="button"
            :class="{ disabled: !isStarted || isPaused }"
            class="btn btn-link"
          >
            Pause
          </button>
          <button
            @click="stop"
            type="button"
            :class="{ disabled: !isStarted || isStopped }"
            class="btn btn-link"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgCircleSector from './SvgCircleSector'
const leftPad = require('left-pad')

export default {
  props: ['time'],
  data() {
    return {
      timestamp: this.time,
      interval: null,
      isStarted: false,
      isPaused: false,
      isStopped: true
    }
  },
  components: {
    SvgCircleSector
  },
  computed: {
    angle() {
      return 360 - (360 / this.time) * this.timestamp
    },
    minutes() {
      return Math.floor(this.timestamp / 60)
    },
    seconds() {
      return this.timestamp % 60
    },
    text() {
      return `${leftPad(this.minutes, 2, 0)}:${leftPad(this.seconds, 2, 0)}`
    }
  },
  methods: {
    start() {
      if (this.isStarted === false) {
        this.timestamp = this.time
      }
      this.isStarted = true
      this.isStopped = false
      this.isPaused = false
      if (this.interval) {
        clearInterval(this.interval)
      }
      this.interval = setInterval(() => {
        this.timestamp--
        if (this.timestamp === 0) {
          this.$emit('finished')
          this.timestamp = this.time
        }
      }, 1000)
    },
    pause() {
      clearInterval(this.interval)
      this.isPaused = true
    },
    stop() {
      clearInterval(this.interval)
      this.timestamp = this.time
      this.isStopped = true
      this.isStarted = false
      this.isPaused = false
    }
  },
  watch: {
    time() {
      this.isStarted = false
      this.start()
    }
  }
}
</script>
