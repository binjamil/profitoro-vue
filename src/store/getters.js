//store/getters.js
export default {
  getConfig: state => state.config,
  getTotalPomodoros: state => state.statistics.totalPomodoros
}
