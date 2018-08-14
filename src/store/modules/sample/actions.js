import * as MutationTypes from './mutation_type'

const actions = {
  AddAction: ({ commit }) => {
    commit(MutationTypes.ADD_MUTATION)
  },
  ClearAction: ({ commit }) => {
    commit(MutationTypes.CLEAR_MUTATION)
  }
}

export default actions
