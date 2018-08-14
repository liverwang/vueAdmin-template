const getters = {
  sampleState: state => state.sampleState,
  someGetter: (state, getters, rootState, rootGetters) => {
    // state: 模块内部state
    // getters：模块内部getters
    // rootState：根模块state，可以通过rootState访问其他模块state
    // rootGetters：根模块getters，可通过rootGetters访问其他模块getters
    console.log(rootGetters)
    return 0
  }
}

export default getters
