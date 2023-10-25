/* eslint-disable */
export default {
  namespaced: true,
  state: {
    index: null,
    stops: [
      {
        text: 'Список созданных стоп-факторов для службы СБ и контроля 1',
        subItems: [
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' }
        ]
      },
      {
        text: 'Список созданных стоп-факторов для службы СБ и контроля 2',
        subItems: [
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' }
        ]
      },
      {
        text: 'Список созданных стоп-факторов для службы СБ и контроля 3',
        subItems: [
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' }
        ]
      },
      {
        text: 'Список созданных стоп-факторов для службы СБ и контроля 4',
        subItems: [
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' },
          { text: 'Коэффициент оборачиваемости дебиторской задолженности' }
        ]
      }
    ]
  },
  getters: {
    getStops: state => state.stops
  },
  mutations: {
    loadStopsMutation () {
      // Тут будет запись данных с бека(mutation)
    },
    addNewStopMutation (state, stop) {
      state.stops[state.index].subItems.unshift({ text: stop.text })
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
    setIndexMutation (state, index) {
      state.index = index
    }
  },
  actions: {
    loadStopsAction () {
      // Тут будет запись данных с бека(action)
    },
    addNewGroupAction ({ commit }, group) {
      commit('addNewGroupMutation', group)
    },
    addNewStopAction ({ commit }, stop) {
      commit('addNewStopMutation', stop)
    },
    deleteStopAction ({ commit }, stop) {
      commit('deleteStopMutation', stop)
    },
    deleteGroupAction ({ commit }, stop) {
      commit('deleteGroupMutation', stop)
    },
    setIndexAction ({ commit }, index) {
      commit('setIndexMutation', index)
    }
  }
}