import ApiService from "../services/ApiService";

export default {
    namespaced: true,
    state: {
        meme: {},
        memes: [],
    },
    getters: {
        memes(state) {
            return state.memes;
        },
    },
    mutations: {
        ADD_MEME(state, meme) {
            let url = meme.photo_url;
            let fileName = url.split(
                process.env.VUE_APP_CLOUDINARY_IMAGE_URL
            )[1];
            url = `${process.env.VUE_APP_CLOUDINARY_IMAGE_URL}/${
                process.env.VUE_APP_CLOUDINARY_RESIZE
            }/${fileName}`;

            state.memes.unshift({
                url: url,
                ...meme,
            });
        },
    },
    actions: {
        UPLOAD_MEME(store, { title, user_id, meme, tags }) {
            return ApiService.uploadMeme({
                title,
                user_id,
                meme,
                tags,
            });
        },
        FETCH_MEMES({ state }) {
            return ApiService.fetchMemes()
                .then(response => {
                    if (response.status === 200) {
                        response.data.data.forEach(element => {
                            let url = element.photo_url;
                            let fileName = url.split(
                                process.env.VUE_APP_CLOUDINARY_IMAGE_URL
                            )[1];
                            url = `${
                                process.env.VUE_APP_CLOUDINARY_IMAGE_URL
                            }/${
                                process.env.VUE_APP_CLOUDINARY_RESIZE
                            }/${fileName}`;

                            state.memes.push({
                                url: url,
                                ...element,
                            });
                        });
                    }
                })
                .catch(() => {
                    this.$notify({
                        type: "error",
                        title: "Error!",
                        text: "There was an error fetching available memes.",
                        duration: 5000,
                    });
                });
        },
    },
};