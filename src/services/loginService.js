import axios from 'axios';

const _URL = 'http://localhost:8000';

const loginService = (loginData) => {

    const data = axios.post(_URL, loginData)
        .then(respon => respon.data)
        .catch(err => console.log(err));

    return data;
}

export default loginService;