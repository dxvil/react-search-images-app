import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KMijFp1Pr3ouGmnwEmeDrabOkOLH4vjISt_A1AUk7Lo'
    }
});