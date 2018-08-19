import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // store user profile
    userData: null
  },
  mutations: {
    // update user profile
    updateUserData (state, userData) {
      state.userData = Object.assign({}, userData)
    }
  }
})
