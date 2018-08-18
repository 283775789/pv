import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存用户个人信息
    userData: null
  },
  mutations: {
    // 更新用户个人信息
    updateUserData (state, userData) {
      state.userData = Object.assign({}, userData)
    }
  }
})
