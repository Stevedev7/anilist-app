import axios from 'axios';

export const apiCall = (query, accessToken=window.localStorage.accessToken) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }
    return new Promise((resolve, reject) => {
        return axios.post('https://graphql.anilist.co', { query }, options)
            .then(res => resolve(res.data.data))
            .catch(err => reject(err.message));
    })
}