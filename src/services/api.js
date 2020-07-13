import axios from "axios";

// Create axios instance here
const api = baseUrl => {
    const service = axios.create({
        baseURL: baseUrl,
        transformResponse: [
            data => {
                if (typeof data === "string") {
                    try {
                        data = JSON.parse(data);
                    } catch (e) {
                        /* Ignore */
                    }
                }
                return data;
            }
        ]
    });
    return service;
};
export default api;
