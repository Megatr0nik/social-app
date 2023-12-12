

import axios from 'axios';

const _URL = 'http://localhost:8000/';


export const loginService = async (loginData) => {

    return await axios.post('/login', loginData, { baseURL: _URL })
        .then(respon => respon.data)
        .catch(err => console.log(err));
}


export const registerService = async (regData) => {

    return await axios.post('/registration', regData, { baseURL: _URL })
        .then(respon => respon.data)
        .catch(err => console.log(err));
}



export const friendsService = (url, friends) => {

    const data = axios.post(`${url}user/`, friends)
        .then(response => {
            return response.data.map((user, id) => {

                return (
                    <div className='friend' key={`u${id}`}>

                        <img
                            className="user-img"
                            src={`${url}avatars/${user.avatar}`}
                            alt="img"
                            width='50'
                            height='50'
                            title={`${user.firstName} ${user.lastName}`}
                        />

                        <div
                            className="post-info"
                        >
                            {user.post[0] ? user.post[0].title : 'Поки нема нічого'}
                        </div>
                    </div >
                )
            });
        })
        .catch(err => console.log(err));
    return data
}