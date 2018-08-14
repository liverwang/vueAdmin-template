import * as MutationTypes from './mutation_type'

const mutations = {
  [MutationTypes.ADD_MUTATION]: state => {
    // change state
    state.sampleState = state.sampleState + 1
  },
  [MutationTypes.CLEAR_MUTATION]: state => {
    // change state
    state.sampleState = 0
  }
}
export default mutations
