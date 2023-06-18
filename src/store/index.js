import { createStore } from 'vuex'
import axios from 'axios'


export const store = createStore({
  state() {
    return {
      exampleState: 'landing-tiketing-state',
      detailGuru: '',
    }
  },
  mutations: {
    SET_DETAIL_GURU(state, data) {
      state.detailGuru = data
    }
  },
  actions: {
    setDetailGuru({ commit }, data) {
      commit('SET_DETAIL_GURU', data)
    },
  }
})
