export default {
  methods: {
    addCountScript () {
      const scriptEl = document.createElement('script')
      scriptEl.id = 'home-count-script'
      scriptEl.src = 's13.cnzz.com/z_stat.php?id=1274516840&web_id=1274516840'
      document.body.appendChild(scriptEl)
    },
    removeCountScript () {
      const scriptEl = document.getElementById('home-count-script')
      if (scriptEl) {
        document.body.removeChild(scriptEl)
      }
    }
  },

  mounted () {
    this.addCountScript()
  }
}
