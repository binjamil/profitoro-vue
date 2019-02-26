import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'
Vue.use(Vuex)

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyAtJsT9yerNMhSJSfVeET6gBJwB_jU8yQ0',
  authDomain: 'profitoro-3fd5a.firebaseapp.com',
  databaseURL: 'https://profitoro-3fd5a.firebaseio.com/'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
  state: {
    ...state,
    firebaseApp,
    configRef,
    statisticsRef
  },
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions
})
