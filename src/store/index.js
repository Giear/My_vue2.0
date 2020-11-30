import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { user: { userInfo: null }, toDo: null },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setToDo(state, data) {
      state.toDo = data;
    }
  },
  actions: {},
  modules: {}
});
