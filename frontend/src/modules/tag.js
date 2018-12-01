import ApiService from "../services/ApiService";

export default {
    namespaced: true,
    state: {
        tags: [],
    },
    getters: {
        tags(state) {
            return state.tags;
        },
    },
    actions: {
        FETCH_TAGS({ state }) {
            ApiService.fetchTags().then(response => {
                if (response.status === 200) {
                    response.data.data.forEach(element => {
                        state.tags.push(element);
                    });
                }
            });
        },
    },
};
