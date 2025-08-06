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
