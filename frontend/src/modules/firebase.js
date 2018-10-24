import FirebaseService from '@/services/FirebaseService';

export default {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    isLoggedIn() {
      return FirebaseService.currentUser() != null;
    }
  },
  mutations: {
    SET_USER(state) {
      let user = FirebaseService.currentUser();
      if (user != null) {
        state.user = user;
      }
    }
  },
  actions: {
    CREATE_USER(store, { email, password }) {
      return FirebaseService.createUser(email, password);
    },
    LOG_IN(store, { email, password }) {
      return FirebaseService.login(email, password);
    },
    RESET_PASSWORD(store, { email }) {
      return FirebaseService.resetPassword(email);
    }
  }
};