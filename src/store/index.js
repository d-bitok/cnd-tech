import { createStore } from 'vuex'

export default createStore({
  state: {
    requestModal: null,
  },
  mutations: {
    TOGGLE_REQUEST(state) {
      state.requestModal = !state.requestModal;
    },
  },
  actions: {
  },
  modules: {
  }
})
