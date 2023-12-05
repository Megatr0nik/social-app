
import axios from 'axios';

const _URL = 'http://localhost:8000/person';

const registerService = (regData) => {

    const data = axios.post(_URL, regData)
        .then(respon => respon.data)
        .catch(err => console.log(err));

    return data;
}

export default registerService;