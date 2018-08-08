import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept(['./getters', './modules/user'], () => {
    // 获取更新后的模块
    const newGetters = require('./getters').default
    const newModuleUser = require('./modules/user').default
    // 加载新模块
    store.hotUpdate({
      mutations: newGetters,
      getters: {
        user: newModuleUser
      }
    })
  })
}

export default store
