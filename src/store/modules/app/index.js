import Cookies from 'js-cookie'
import actions from './actions'
import mutations from './mutations'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: mutations,
  actions: actions
}

export default app
