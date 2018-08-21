export default {
  methods: {
    addCountScript () {
      const scriptEl = document.createElement('script')
      scriptEl.id = 'follower-count-script'
      scriptEl.src = 'https://s22.cnzz.com/z_stat.php?id=1274516842&web_id=1274516842'
      document.body.appendChild(scriptEl)
    },

    removeCountScript () {
      const scriptEl = document.getElementById('follower-count-script')
      document.body.removeChild(scriptEl)
    }
  },

  mounted () {
    this.addCountScript()
  },

  beforeDestroy () {
    this.removeCountScript()
  }
}
