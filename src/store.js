import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startAnimationEnabled: true
  },

  actions: {
    disableStartAnimation ({ commit }) {
      commit('DISABLE_START_ANIMATION')
    }
  },

  mutations: {
    DISABLE_START_ANIMATION (state) {
      setTimeout(() => {
        state.startAnimationEnabled = false
      }, 1000)
    }
  }
})
