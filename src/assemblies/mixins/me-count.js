export default {
  methods: {
    addCountScript () {
      const scriptEl = document.createElement('script')
      scriptEl.id = 'me-count-script'
      scriptEl.src = 'https://s19.cnzz.com/z_stat.php?id=1274516849&web_id=1274516849'
      document.body.appendChild(scriptEl)
    },
    removeCountScript () {
      const scriptEl = document.getElementById('me-count-script')
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
