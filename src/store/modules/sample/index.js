import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const sample = {
  namespaced: true,
  state: {
    sampleState: 0
  },
  mutations: mutations,
  actions: actions,
  getters: getters
}

export default sample
