export default {
  data () {
    return {
      userData: {}
    }
  },

  methods: {
    getProfile () {
      const storeUserData = this.$store.state.userData

      if (storeUserData) {
        this.userData = storeUserData
        return
      }

      const vm = this
      this.axios.post('/personal/profile').then(function (response) {
        if (response.data.code === 0) {
          vm.userData = response.data.data
          vm.$store.commit('updateUserData', response.data.data)
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.getProfile()
  }
}
