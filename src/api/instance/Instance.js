import axios from 'axios'

// const BASE_URL = 'https://parjongsu.com:8080/api';
const BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    baseURL: BASE_URL,
});

const axiosApi = (options) => {
    return axios.create({ baseURL: BASE_URL, ...options })
}

const axiosAuthApi  = (options) => {
    const token= localStorage.getItem("accessToken");
    return axios.create({
        baseURL: BASE_URL,
        headers: { Authorization: 'Bearer ' + token },
        ...options,
    })
}

api.interceptors.response.use(
    function (response) {
        console.log("get response", response);
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if (status === 401) {
            if (error.response.data.message === "TokenExpiredError") {
                const originalRequest = config;
                const { data } = await axios.get(
                    BASE_URL+`/user/reissue`,
                );
                const { accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                } = data;
                await localStorage.setItem("accessToken", newAccessToken);
                originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            }
        }
        console.log("response error", error);
        return Promise.reject(error);
    }
);

export default api;

export const noAuhApi = axiosApi(BASE_URL)
export const needAuthApi = axiosAuthApi (BASE_URL)