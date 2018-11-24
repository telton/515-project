import axios from 'axios';

const Api = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_API_URL}/`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default Api;