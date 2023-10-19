import axios from 'axios'

// const BASE_URL = 'https://parkjongsu.com:18443/api';
const BASE_URL = 'http://localhost:8080/api';

const noAuthapi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

const needAuthapi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
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
            let accessToken
            try {
                const resonse = await needAuth.post(BASE_URL + `/user/reissue`,);
                accessToken = resonse.data
                console.log(accessToken)
            }catch (error){
                return Promise.reject(error);
            }
            localStorage.removeItem("accessToken");
            await localStorage.setItem("accessToken", accessToken);
            originalRequest.headers.authorization = `Bearer ${accessToken}`;
            try {
                return axios(originalRequest);
            }catch (error){
                return error;
            }
        }
        return Promise.reject(error);
    }
);

export const noAuh = noAuthapi
export const needAuth = needAuthapi;