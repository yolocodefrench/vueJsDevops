import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage, // or window.sessionStorage or localForage instance.
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => ({
    jwtAccess: state.jwtAccess,
    isConnected: state.isConnected
  })
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtAccess: '',
    user_name: '',
    isConnected: false,
  },
  mutations: {
    setJwtAccess (state, token) {
      state.jwtAccess = token;
    },
    setIsConnected (state, value) {
      state.isConnected = value;
    },
    reset (state) {
      state.isConnected = false;
      state.jwtAccess = '';
      state.user_name = '';
    },
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
});
