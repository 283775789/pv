import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseData: {
      userAccount: '',
      userName: '',
      userType: '',
      classes: [],
      portalUrl: '',
      downloadDls: '',
      deviceId: '',
      deviceType: '',
      lang: 'cn',
      teachClassId: '',
      classStatus: {
        bookId: '',
        catalogId: '',
        classId: '',
        classStatus: '0', // 班级上课状态 0:空闲中,1:上课中
        courseHourId: '' // 课例id
      },
      staticUrl: '',
      staticImg: 'static/images/',
      config: {
        allowWorksComment: '1'
      }
    },
    navigationData: null,
    navigationToClassCatalog: null,
    navigationToViewDetail: null,
    sameWorks: null,
    selectedWorks: [], // 保存选择页面没级目录下选择的作品目录id 和作品id
    sreenHeight: '0',
    worksBoxScrollTop: 0
  },
  mutations: {
    /**
     * 更新用户信息,用户信息统一由IOS客户端提供
     * @param {Object} user 详见state.baseData定义
     */
    updateBaseData (state, baseData) {
      state.user = Object.assign(state.baseData, baseData)
    }
  }
})
