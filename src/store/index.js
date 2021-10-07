import { createStore } from 'vuex'

export default createStore({
  state: {
    requestModal: null,
    modalActive: null,
  },
  mutations: {
    TOGGLE_REQUEST(state) {
      state.requestModal = !state.requestModal;
    },
    TOGGLE_MODAL(state){
      state.modalActive = !state.modalActive;
    }
  },
  actions: {
  },
  modules: {
  }
})
