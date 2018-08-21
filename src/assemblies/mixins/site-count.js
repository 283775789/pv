export default {
  methods: {
    addCountScript () {
      const scriptEl = document.createElement('script')
      scriptEl.id = 'site-count-script'
      scriptEl.src = 'https://s22.cnzz.com/z_stat.php?id=1274516727&web_id=1274516727'
      document.body.appendChild(scriptEl)
    },
    removeCountScript () {
      const scriptEl = document.getElementById('site-count-script')
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
