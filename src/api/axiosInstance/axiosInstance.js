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
