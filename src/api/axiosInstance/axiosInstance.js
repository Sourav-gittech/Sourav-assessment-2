import axios from "axios";
import baseUrl from "../api_url/api";

const token = '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';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `token ${token}`,
    }
});

export default axiosInstance;