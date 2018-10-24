import FirebaseService from '@/services/FirebaseService';
import { isEmpty } from 'lodash';

export default {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    isLoggedIn(state) {
      return !isEmpty(state.user);
    }
  },
  mutations: {
    SET_USER: (state, { user }) => {
      if (user.trim() != '') {
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