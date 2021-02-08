import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    addImages(state, newImages) {
      state.images = []
      state.images.push(newImages)
    },
  },
})
