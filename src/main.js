import Vue from 'vue'
//import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store.js'
import router from './router'
import 'es6-promise/auto'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     images: [],
//   },
//   mutations: {
//     addImages(state, newImages) {
//       //reet state to empty before re-populating
//       state.images = []
//       state.images.push(newImages)
//     },
//   },
//   actions: {
//     createImages({ commit }, newImages) {
//       commit('addImages', newImages)
//     },
//   },
// })
