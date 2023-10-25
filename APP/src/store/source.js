import { saveSource } from '@/api'

export default {
  namespaced: true,
  state: {
    source: {
      name: '',
      description: '',
      domain: ''
    }
  },
  mutations: {
    setCurrentInputMutation (state, data) {
      console.log(data)
      if (data.name === 'sourceName') {
        state.source.name = data.value
      } else if (data.name === 'inputDescription') {
        state.source.description = data.value
      } else if (data.name === 'domain') {
        state.source.domain = data.value
      }
    },
    setSourceDescription (state, description) {
      state.source.description = description
    },
    setSourceDomain (state, domain) {
      state.source.domain = domain
    },
    clearData (state) {
      state.source.name = ''
      state.source.description = ''
      state.source.domain = ''
    }
  },
  actions: {
    setCurrentInputAction ({ commit }, data) {
      commit('setCurrentInputMutation', data)
    },
    async saveSource ({ commit, state }) {
      const data = {
        name: state.source.name,
        description: state.source.description,
        domain: state.source.domain
      }
      // Make an API call or perform any other necessary actions to save the data
      console.log(data)
      try {
        const response = await saveSource(data)
        // Handle the response if needed
        console.log(response.data)
        // Clear the form data after saving
        commit('clearData')
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error(error)
      }
      // Clear the form data after saving
      commit('clearData')
    }

  },
  getters: {
    getSourceName: state => state.source.name,
    getSourceDescription: state => state.source.description,
    getSourceDomain: state => state.source.domain
  }
}
