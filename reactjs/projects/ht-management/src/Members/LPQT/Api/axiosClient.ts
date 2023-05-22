import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api-m.sandbox.paypal.com',
    maxBodyLength: Infinity,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic QVFRTFN3RGt2eUZpbXJSR0pmQzV1bXY0c2l6VHhaUGM0R0M5UDdUeGZ6dE1BVDNyNXh6emJEMTdDSklLclhWY1M2Q0gwdTNmSXVwV09ta1A6RUU1cEdBakNqdEpsN3Fxbk93eUNWLWx2cEo1YWtYTnByM0NiNng1SUxQazNsSDdzTU5yLW0xVDc2T1VRRUxnc0NNbWRSSk93cHJkX0RBa3M='
    }
});

function getAccessToken() {
    const token = localStorage.getItem('paypalToken');
    if (!token) return null;
}

axiosClient.interceptors.request.use(
    config => {
        const token = getAccessToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        const accessToken = getAccessToken();
        if (!accessToken) {
            try {
                const response = await axiosClient.post('/v1/oauth2/token', { grant_type: 'client_credentials' });
                const newAccessToken = response.data.access_token;
                localStorage.setItem('paypalToken', newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return await axiosClient(originalRequest);
            } catch (error_1) {
                console.error('Error while obtaining new access token:', error_1);
            }
        }
        return Promise.reject(error);
    }
);
export default axiosClient;
