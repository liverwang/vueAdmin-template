import * as MutationTypes from './mutation_type'

const actions = {
  ToggleSideBar: ({ commit }) => {
    commit(MutationTypes.TOGGLE_SIDEBAR)
  },
  CloseSideBar({ commit }, { withoutAnimation }) {
    commit(MutationTypes.CLOSE_SIDEBAR, withoutAnimation)
  },
  ToggleDevice({ commit }, device) {
    commit(MutationTypes.TOGGLE_DEVICE, device)
  }
}

export default actions
