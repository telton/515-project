import Vue from "vue";
import Vuex from "vuex";
import FirebaseStore from "./modules/firebase";
import MemeStore from "./modules/meme";
import TagStore from "./modules/tag";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: FirebaseStore,
        meme: MemeStore,
        tag: TagStore,
    },
});
