// import { httpPlain } from "@/libraries";
import axios from "axios";

export default {
    register(payload) {
        return axios.post(process.env.VUE_APP_API_URL + "/api/auth/register", payload);
    },
    async signin(payload) {
        return await axios.post(process.env.VUE_APP_API_URL + "/api/auth/login", payload);
    }
};