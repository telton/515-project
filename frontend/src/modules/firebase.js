import FirebaseService from "@/services/FirebaseService";
import { isEmpty } from "lodash";

export default {
    namespaced: true,
    state: {
        user: {},
    },
    getters: {
        isLoggedIn(state) {
            let user = JSON.parse(localStorage.getItem("user"));

            // If there is a user in localstorage, but not in the store, set it in the store.
            if (isEmpty(state.user) && !isEmpty(user)) {
                state.user = user;
            }

            return !isEmpty(state.user) && !isEmpty(user);
        },
        user() {
            let user = JSON.parse(localStorage.getItem("user"));

            if (user && !isEmpty(user)) {
                return user;
            } else {
                return null;
            }
        },
    },
    mutations: {
        SET_USER(state) {
            let user = FirebaseService.currentUser();
            if (user != null) {
                state.user = user;
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                state.user = {};
                localStorage.setItem("user", JSON.stringify({}));
            }
        },
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
        },
        LOG_OUT() {
            localStorage.removeItem("user");
            return FirebaseService.logout();
        },
    },
};
