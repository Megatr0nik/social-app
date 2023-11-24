import axios from 'axios';


const registerService = (login, pass, reg) => {

    const obj = {
        'login': login,
        'pass': pass,
        'reg': reg
    }
    console.log(obj)
    axios({
        method: 'POST',
        url: 'http://localhost:8000',
        responseType: 'json',
        // headers: { 'Access-Control-Allow-Headers': 'content-type' },
        data: obj
    })
        .then(respon => console.log('register service', respon.data))
        .catch(err => console.log(err));
}


export default registerService;