import axios from "axios";

import './services.css';


const friendsService = (url, friends) => {

    const data = axios.post(url, friends)
        .then(response => {
            console.log(response.data);
            return response.data.map(user => {
                return (
                    <div className='friend'>

                        <img
                            className="user-img"
                            style={{ pointerEvents: 'none' }}
                            src={url + user.avatar}
                            alt="img"
                            width='50'
                            height='50'
                            title={user.login}
                        />

                        <div
                            style={{ pointerEvents: 'none' }}
                            className="post-info"
                        >
                            {user.post[0].title}
                        </div>
                    </div >
                )
            });
        })
        .catch(err => console.log(err));
    return data
}

export default friendsService;