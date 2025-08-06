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
