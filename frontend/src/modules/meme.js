import ApiService from '../services/ApiService';

export default {
  namespaced: true,
  state: {
    meme: {},
  },
  getters: {},
  mutations: {},
  actions: {
    UPLOAD_MEME(store, { title, user_id, meme, tags }) {
      return ApiService.uploadMeme({
        title,
        user_id,
        meme,
        tags
      });
    }
  }
};