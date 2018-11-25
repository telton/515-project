import Api from "@/Api";

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
            Api.get("tags")
                .then(response => {
                    if (response.status === 200) {
                        response.data.data.forEach(element => {
                            state.tags.push(element);
                        });
                    }
                })
                .catch(() => {
                    this.$notify({
                        type: "error",
                        title: "Error!",
                        text: "There was an error fetching available tags.",
                        duration: 5000,
                    });
                });
        },
    },
};
