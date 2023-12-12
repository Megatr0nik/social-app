

import axios from 'axios';

import { _BASE_URL } from '../constant/variable';


const getRequest = async (url) => {

    const dataArr = await axios.get(url, { baseURL: _BASE_URL })
        .then(respond => respond.data)
        .catch(err => console.log(err));

    return dataArr;
}

export default getRequest;