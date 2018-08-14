import Cookies from 'js-cookie'
import * as MutationTypes from './mutation_type'

const mutations = {
  [MutationTypes.TOGGLE_SIDEBAR]: state => {
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  [MutationTypes.CLOSE_SIDEBAR]: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  [MutationTypes.TOGGLE_DEVICE]: (state, device) => {
    state.device = device
  }
}
export default mutations
