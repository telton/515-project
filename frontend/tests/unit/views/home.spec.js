import Vuex from "vuex";
import { ErrorBag, Validator } from "vee-validate";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import MockApiService from "@/__mocks__/ApiService";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
    let mocks, directives, stubs;
    let store, actions;

    beforeEach(() => {
        const errors = new ErrorBag();
        const $validator = new Validator();

        mocks = {
            errors: errors,
            $validator: $validator,
        };
        directives = {
            validate: "",
        };
        stubs = ["router-link", "fa"];
        actions = {
            "meme/FETCH_MEMES": ({ state }) => {
                const memes = MockApiService.fetchMemes();
                memes.forEach(element => {
                    state.memes.push(element);
                });
            },
        };
        store = new Vuex.Store({
            state: {
                memes: [],
            },
            actions,
            getters: {
                "meme/memes": state => {
                    return state.memes;
                },
            },
        });
    });

    it("renders", () => {
        const wrapper = shallowMount(Home, {
            mocks,
            directives,
            stubs,
            localVue,
            store,
        });
        expect(wrapper).toBeTruthy();
    });
});
