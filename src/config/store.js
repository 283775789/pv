import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // store user profile
    userData: null,
    pageTitle: ''
  },
  mutations: {
    // update user profile
    updateUserData (state, userData) {
      state.userData = Object.assign({}, userData)
    },
    // set the value of the header title
    updatePageTitle (state, title) {
      state.pageTitle = title
    }
  }
})
