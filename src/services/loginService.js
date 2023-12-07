import axios from 'axios';

const _URL = 'http://localhost:8000';

const loginService = async (loginData) => {

    return await axios.post('/login', loginData, { baseURL: _URL })
        .then(respon => respon.data)
        .catch(err => console.log(err));
}

export default loginService;