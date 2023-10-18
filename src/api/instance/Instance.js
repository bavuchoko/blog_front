import axios from 'axios'

// const BASE_URL = 'https://parkjongsu.com:18443/api';
const BASE_URL = 'https://localhost:8080/api';

axios.defaults.withCredentials = true;
const noAuthapi = axios.create({
    baseURL: BASE_URL,
});


const needAuthapi = axios.create({
    baseURL: BASE_URL,
});


noAuthapi.interceptors.request.use((config) => {
    return config;
});


needAuthapi.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});


// 응답 인터셉터
needAuthapi.interceptors.response.use(
    function (response) {
        // 2xx 번대 응답코드의 응답에 대한 인터셉터
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if (status === 401) {

            const originalRequest = config;
            // token refresh 요청
            const accessToken = await needAuth.post(
                BASE_URL+`/user/reissue`,
            );
            console.log(accessToken)
            // 새로운 토큰 저장
            // dispatch(userSlice.actions.setAccessToken(data.data.accessToken)); store에 저장
            localStorage.removeItem("accessToken");
            await localStorage.setItem("accessToken", accessToken);
            originalRequest.headers.authorization = `Bearer ${accessToken}`;

            return axios(originalRequest);
        }
        console.log("response error", error);
        return Promise.reject(error);
    }
);
export const noAuh = noAuthapi
export const needAuth = needAuthapi;