<template>
  <div id="app">
    <h1>Welcome to Profitoro</h1>
    <landing-page></landing-page>
    <main-content></main-content>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'
import MainContent from './components/MainContent'
export default {
  name: 'app',
  components: {
    LandingPage,
    MainContent
  }
}
</script>
