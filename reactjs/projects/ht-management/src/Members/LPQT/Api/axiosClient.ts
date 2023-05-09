import axios from 'axios';

const baseURL = 'https://api-m.sandbox.paypal.com';

const axiosClient = axios.create({
    baseURL: baseURL,
    maxBodyLength: Infinity,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic QVFRTFN3RGt2eUZpbXJSR0pmQzV1bXY0c2l6VHhaUGM0R0M5UDdUeGZ6dE1BVDNyNXh6emJEMTdDSklLclhWY1M2Q0gwdTNmSXVwV09ta1A6RUU1cEdBakNqdEpsN3Fxbk93eUNWLWx2cEo1YWtYTnByM0NiNng1SUxQazNsSDdzTU5yLW0xVDc2T1VRRUxnc0NNbWRSSk93cHJkX0RBa3M='
    },
});

//to reset the access token
axiosClient.post('/v1/oauth2/token', {
    grant_type: 'client_credentials'
})
    .then(response => {
        const accessToken = response.data.access_token
        //store the access Token
        localStorage.setItem('paypalToken', accessToken);
    })
    .catch(error => {
        console.error('Error while obtaining access token:', error)
    })
export default axiosClient;
