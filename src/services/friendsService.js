import axios from "axios";

import './services.css';


const friendsService = (url, friends) => {

    const data = axios.post(`${url}friends/`, friends)
        .then(response => {
            // console.log(response.data);
            return response.data.map(user => {
                // console.log(user)
                return (
                    <div className='friend'>

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

export default friendsService;