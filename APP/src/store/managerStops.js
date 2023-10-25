/* eslint-disable */
export default {
  namespaced: true,
  state: {
    indexs: [],
    currentStop: {
      stopName: '',
      stopDescription: '',
      formula: [],
      id: null,
      factors: [],
      logicalBlocks: []
    },
    stops: [
      {
        text: 'Список стоп-факторов для Кабинета Аналитика',
        subStops: [
          { stopName: 'Срок с даты государственной регистрации Клиента', id: '33' },
          { stopName: 'Наличие Клиента в реестре недобросовестных поставщиков', id: '34' }
        ]
      },
      {
        text: 'Список стоп-факторов для Кабинета СБ (риски)',
        subStops: [
          { stopName: 'Срок с даты государственной регистрации Клиента', id: '36' },
          { stopName: 'Проверка руководителя компании', id: '38' }
        ]
      },
      {
        text: 'Список стоп-факторов для Кабинета юридической экспертизы',
        subStops: [
          { stopName: 'Срок с даты государственной регистрации Клиента', id: '39' },
          { stopName: 'Наличие Клиента в реестре недобросовестных поставщиков', id: '40' }
        ]
      },
      {
        text: 'Общая карта стоп-факторов',
        subStops: [
          { stopName: 'Срок с даты государственной регистрации Клиента', id: '41' },
          { stopName: 'Проверка руководителя компании', id: '42' }
        ]
      }
    ]
  },
  getters: {
    getStops: state => state.stops,
    getFormula: state => state.currentStop.formula
  },
  mutations: {
    loadStopsMutation () {
      // Тут будет запись данных с бека(mutation)
    },
    clearFormulaMutation (state) {
      state.currentStop = {
        stopName: '',
        stopDescription: '',
        formula: [],
        id: null,
        factors: [],
        logicalBlocks: []
      }
    },
    setCurrentStopMutation (state, item) {
      if (item.factor) {
        // state.currentStop.factors[item.customIndex][item.name] = item.value
        let idx = state.currentStop.factors.findIndex(factor => factor.customIndex === item.customIndex)
        if (idx === -1) {
          state.currentStop.factors.push({
            customIndex: item.customIndex,
            choosenResource: item.name === 'choosenResource' ? item.value : '',
            choosenOperator: item.name === 'choosenOperator' ? item.value : '',
            choosenFactor: item.name === 'choosenFactor' ? item.value : '',
            numberValue: item.name === 'numberValue' ? item.value : ''
          })
        } else {
          state.currentStop.factors[idx][item.name] = item.value
        }
        state.currentStop.formula = []
        state.currentStop.factors.map((item, index) => {
          let data = {
            choosenFactor: item.choosenFactor,
            choosenOperator: item.choosenOperator ,
            numberValue: item.numberValue 
          }
          if (state.currentStop.factors[index + 1]) {
            data.logical = state.currentStop.logicalBlocks[index].value
          }
          state.currentStop.formula.push(data)
        })
      } else {
        state[item.type][item.name] = item.value
      }
    },
    addNewStopMutation (state) {
      state.indexs.map(item => {
        state.stops[item].subStops.unshift(Object.assign({}, state.currentStop))
        state.stops[item].subStops[0].id = Math.floor(Math.random() * 10000)
      })
      state.currentStop = {
        stopName: '',
        stopDescription: '',
        formula: '',
        id: null,
        logicalBlocks: [],
        factors: []
      }
    },
    setIndexsMutation (state, idx) {
      const helpIdx = state.indexs.findIndex(item => item === idx)
      if (helpIdx === -1) {
        state.indexs.push(idx)
      } else {
        state.indexs.splice(helpIdx, 1)
      }
    },
    addNewGroupMutation (state, group) {
      state.stops.unshift({ text: group.title, subItems: [] })
    },
    deleteStopMutation (state, stop) {
      state.stops[stop.index].subItems.splice(stop.idx, 1)
    },
    deleteGroupMutation (state, stop) {
      state.stops.splice(stop.index, 1)
    },
    setOperatorMutations (state, input) {
      let helpIdx = state.currentStop.logicalBlocks.findIndex(item => item.customIndex === input.customIndex)
      if (helpIdx === -1) {
        state.currentStop.logicalBlocks.push(input)
      } else {
        state.currentStop.logicalBlocks[helpIdx].value = input.value
      }
      state.currentStop.formula = []
      state.currentStop.factors.map((item, index) => {
        let data = {
          choosenFactor: item.choosenFactor,
          choosenOperator: item.choosenOperator ,
          numberValue: item.numberValue 
        }
        if (state.currentStop.factors[index + 1]) {
          data.logical = state.currentStop.logicalBlocks[index].value
        }
        state.currentStop.formula.push(data)
      })
    }
  },
  actions: {
    loadStopsAction () {
      // Тут будет запись данных с бека(action)
    },
    setIndexsActions ({ commit }, idx) {
      commit('setIndexsMutation', idx)
    },
    setCurrentStopAction ({ commit }, item) {
      commit('setCurrentStopMutation', item)
    },
    addNewStopAction ({ commit }) {
      commit('addNewStopMutation')
    },
    deleteStopAction ({ commit }, stop) {
      commit('deleteStopMutation', stop)
    },
    setOperatorActions ({ commit }, input) {
      commit('setOperatorMutations', input)
    },
    clearFormulaAction ({ commit }) {
      commit('clearFormulaMutation')
    }
  }
}