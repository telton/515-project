import Vue from 'vue';
import Vuex from 'vuex';
import FirebaseStore from './modules/firebase';
import MemeStore from './modules/meme';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: FirebaseStore,
        meme: MemeStore
    }
});
