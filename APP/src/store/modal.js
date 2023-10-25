/* eslint-disable */
export default {
    namespaced: true,
    state: {
      open: false,
      modalName: '',
      helpParam: 0,
      width: 0,
      logicalBlocks: [],
      inputs: []
    },
    getters: {
      openInfo: state => state,
      getLogicalBlocks: state => state.logicalBlocks
    },
    mutations: {
      toogleOpenMutation (state, openParam) {
        state.helpParam = 0
        state.open = openParam.open
        state.width = openParam.width
        state.modalName = openParam.modalName || ''
        openParam.inputs ? state.inputs = [...openParam.inputs] : state.inputs = []
      },
      addInputsMutation (state, inputs) {
        if (state.helpParam) {
          state.inputs.push({type: 'logical', name: 'logicOperator', col: 12, customIndex: state.helpParam})
          state.logicalBlocks.push({type: 'logical', name: 'logicOperator', col: 12, customIndex: state.helpParam, value: ''})
        }
        state.helpParam++
        console.log(state.inputs)
        inputs.map(item => state.inputs.push(item))
      },
      setOperatorMutations (state, input) {
        state.logicalBlocks[input.customIndex] = input.value
      }
    },
    actions: {
      toogleOpenAction ({ commit }, openParam) {
        commit('toogleOpenMutation', openParam)
      },
      addInputsAction ({ commit }, inputs) {
        commit('addInputsMutation', inputs)
      },
      setOperatorActions ({ commit }, input) {
        commit('setOperatorMutations', input)
      }
    }
  }