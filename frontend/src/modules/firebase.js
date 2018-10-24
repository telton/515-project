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
  mutations: {},
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