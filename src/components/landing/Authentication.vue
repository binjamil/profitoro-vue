<template>
  <div class="container">
    <div>{{ titleText }}</div>
    <form>
      <div class="form-group">
        <input
          class="form-control rounded-0 border-top-0 border-left-0 border-right-0"
          v-model="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control rounded-0 border-top-0 border-left-0 border-right-0"
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        @click="onAction"
        class="btn btn-outline-secondary btn-block rounded-0"
      >
        {{ this.actionButtonText }}
      </button>
    </form>
    <hr />
    <button
      @click="onSwitch"
      class="btn btn-outline-secondary btn-block rounded-0"
    >
      {{ this.switchButtonText }}
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

let TITLE_TEXT = {
  LOGIN: 'Already a member? Login here.',
  SIGNUP: "Don't have an account? Register here."
}
let ACTION_BUTTON_TEXT = {
  LOGIN: 'Login',
  SIGNUP: 'Register'
}
export default {
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  computed: {
    titleText() {
      return this.isLogin ? TITLE_TEXT.LOGIN : TITLE_TEXT.SIGNUP
    },
    switchButtonText() {
      return this.isLogin ? TITLE_TEXT.SIGNUP : TITLE_TEXT.LOGIN
    },
    actionButtonText() {
      return this.isLogin ? ACTION_BUTTON_TEXT.LOGIN : ACTION_BUTTON_TEXT.SIGNUP
    }
  },
  methods: {
    ...mapActions(['createUser', 'authenticate']),
    onSwitch() {
      this.isLogin = !this.isLogin
    },
    onAction(ev) {
      ev.preventDefault()
      ev.stopPropagation()
      let method = this.isLogin ? this.authenticate : this.createUser
      method({ email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped lang="scss">
.form-control:focus,
button:focus {
  border-bottom: #6d8383 solid 1px;
  box-shadow: none;
}
</style>
