
import axios from 'axios';

const _URL = 'http://localhost:8000/person';


const registerService = async (regData) => {

    return await axios.post('/person', regData, { baseURL: _URL })
        .then(respon => respon.data)
        .catch(err => console.log(err));
}

export default registerService;