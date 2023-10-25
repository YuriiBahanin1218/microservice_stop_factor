/* eslint-disable */
export default {
    namespaced: true,
    state: {
      index: null,
      finalArray: [],
      stops: [
        {
          name: 'ПАО “Метком Банк”',
          src: 'metcom',
          subItems: [
            { text: 'Список факторов для ПАО “Метком Банк”', codeName: 'metcom' },
            { text: 'Список факторов для ПАО “Метком Банк”', codeName: 'metcom' },
            { text: 'Список факторов для ПАО “Метком Банк”', codeName: 'metcom' }
          ]
        },
        {
          name: 'АО “Банк СГБ”',
          src: 'Severgasbank',
          subItems: [
            { text: 'Список факторов для АО “Банк СГБ”', codeName: 'sgb' },
            { text: 'Список факторов для АО “Банк СГБ”', codeName: 'sgb' }
          ]
        },
        {
          name: 'АО “Банк АТБ”',
          src: 'ATB',
          subItems: [
            { text: 'Список факторов для АО “Банк АТБ”', codeName: 'atb' },
            { text: 'Список факторов для АО “Банк АТБ”', codeName: 'atb' },
            { text: 'Список факторов для АО “Банк АТБ”', codeName: 'atb' }
          ]
        }
      ]
    },
    getters: {
      getStops: state => state.finalArray
    },
    mutations: {
      loadStopsMutation () {
        // Тут будет запись данных с бека(mutation)
      },
      chooseCurentBanksMutation (state, filters) {
        console.log(filters)
        state.finalArray = []
        state.stops.map(item => {
          const idx = filters.findIndex(filter => filter.name === item.name)
          if (idx !== -1) state.finalArray.push(item)
        })
        console.log(state.finalArray, 'state.finalArray')
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
      chooseCurentBanksAction ({ commit }, filters) {
        commit('chooseCurentBanksMutation', filters)
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