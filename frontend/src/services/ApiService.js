import Api from "../api";

export default {
    uploadMeme({ title, user_id, meme, tags }) {
        let formData = new FormData();
        formData.append("title", title);
        formData.append("user_id", user_id);
        formData.append("meme", meme);

        tags.forEach(element => {
            formData.append("tags[]", element);
        });

        return Api.post("memes", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    fetchMemes() {
        return Api.get("memes");
    },
    fetchTags() {
        return Api.get("tags");
    },
    searchMemes({ search }) {
        return Api.get(`memes?search=${search}`);
    },
};
