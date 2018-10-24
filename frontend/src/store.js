import Vue from 'vue';
import Vuex from 'vuex';
import FirebaseStore from './modules/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: FirebaseStore
    }
});
