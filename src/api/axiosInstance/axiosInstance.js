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
