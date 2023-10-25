import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modal'
import stops from './stops'
import adminStops from './adminStops'
import managerStops from './managerStops'
import source from './source'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    stops,
    managerStops,
    adminStops,
    source
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
