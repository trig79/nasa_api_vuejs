import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    addImages(state, newImages) {
      //reet state to empty before re-populating
      state.images = []
      state.images.push(newImages)
    },
  },
  // actions: {
  //   createImages({ commit }, newImages) {
  //     commit('addImages', newImages)
  //   },
  // },
})
