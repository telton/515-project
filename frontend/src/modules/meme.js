import ApiService from "../services/ApiService";

export default {
    namespaced: true,
    state: {
        meme: {},
        memes: [],
        searchMemes: [],
    },
    getters: {
        memes(state) {
            return state.memes;
        },
        searchMemes(state) {
            return state.searchMemes;
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
            return ApiService.fetchMemes().then(response => {
                if (response.status === 200) {
                    state.memes = [];

                    response.data.data.forEach(element => {
                        let url = element.photo_url;
                        let fileName = url.split(
                            process.env.VUE_APP_CLOUDINARY_IMAGE_URL
                        )[1];
                        url = `${process.env.VUE_APP_CLOUDINARY_IMAGE_URL}/${
                            process.env.VUE_APP_CLOUDINARY_RESIZE
                        }/${fileName}`;

                        state.memes.push({
                            url: url,
                            ...element,
                        });
                    });
                }
            });
        },
        SEARCH_MEMES({ state }, search) {
            return ApiService.searchMemes(search).then(response => {
                if (response.status === 200) {
                    state.searchMemes = [];

                    response.data.data.forEach(element => {
                        let url = element.photo_url;
                        let fileName = url.split(
                            process.env.VUE_APP_CLOUDINARY_IMAGE_URL
                        )[1];
                        url = `${process.env.VUE_APP_CLOUDINARY_IMAGE_URL}/${
                            process.env.VUE_APP_CLOUDINARY_RESIZE
                        }/${fileName}`;

                        state.searchMemes.push({
                            url: url,
                            ...element,
                        });
                    });
                }
            });
        },
    },
};
