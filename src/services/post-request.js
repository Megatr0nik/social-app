

import axios from 'axios';

import { _BASE_URL } from '../constant/variable';



export const postService = async (data, uri) => {
    return await axios.post(uri, data, { baseURL: _BASE_URL })
        .then(response => response.data)
        .catch(err => console.error(err))
}
