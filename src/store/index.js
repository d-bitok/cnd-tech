import { createStore } from 'vuex'
import db from "../firebase/firebase-db"

export default createStore({
  state: {
    requestData: [],
    requestModal: null,
    modalActive: null,
    requestsLoaded: null,
  },
  mutations: {
    TOGGLE_REQUEST(state) {
      state.requestModal = !state.requestModal;
    },
    TOGGLE_MODAL(state){
      state.modalActive = !state.modalActive;
    },
    SET_REQUEST_DATA(state, payload) {
      state.requestData.push(payload);
    },
    REQUESTS_LOADED(state) {
      state.requestsLoaded = true;
    },
  },
  actions: {
    async GET_REQUESTS({ commit, state }) {
      const getData = db.collection("requests");
      const results = await getData.get();
      results.forEach((doc) => {
        if (!state.requestData.some((request) => request.docId === doc.id)) {
          const data = {
            docId: doc.id,
            requestId: doc.data().requestId,
            senderEmailAddress: doc.data().senderEmailAddress,
            senderCity: doc.data().senderCity,
            senderAddress: doc.data().senderAddress,
            senderCode: doc.data().senderCode,
            senderCountry: doc.data().senderCountry,
            senderPhone: doc.data().senderPhone,
            senderCompany: doc.data().senderCompany,
            requestDate: doc.data().requestDate,
            paymentDueDate: doc.data().paymentDueDate,
            paymentTerms: doc.data().paymentTerms,
            paymentMethod: doc.data().paymentMethod,
            productDescription: doc.data().productDescription,
            requestPending: doc.data().requestPending,
            requestDraft: doc.data().requestDraft,
            requestItemList: doc.data().requestItemList,
            requestTotal: doc.data().requestTotal,
          };
          commit("SET_REQUEST_DATA", data);
        }
      });
      commit("REQUESTS_LOADED");
    },
  },
  modules: {
  }
})
