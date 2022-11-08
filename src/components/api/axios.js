import axios from "axios";

const instance = axios.create({
    baseURL: "https://blog-site-backend.vercel.app/api",
    timeout: 30000,
});

instance.defaults.headers.common['Authorization'] = "*";

export default instance;