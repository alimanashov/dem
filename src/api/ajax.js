import axios from "axios";
// import store from "@/store";
// import {router} from "@/router";


const ajax = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

// ajax.interceptors.request.use((config) => {
//     if (store.state.access_token) {
//         config.headers['Authorization'] = `Bearer ${store.state.access_token}`;
//     }
//     return config
// });

// ajax.interceptors.response.use(response => response, async error => {
//     console.log(error);
//     const { status } = error.response;
//
//     if (status === 401) {
//         await router.push('/login');
//     }
//     return Promise.reject(error)
// });

export default ajax;