import axios from "axios";

import './services.css';


const friendsService = (url, friends) => {

    const data = axios.post(url, friends)
        .then(response => {
            return response.data.map(user => {
                console.log(user.post[0])
                return (
                    <div
                        className='friend'
                        bubbles='true'
                    // onMouseOver={(e) => {
                    //     // e.stopPropagation()
                    //     if (e.target.className === 'friend') {
                    //         e.target.className = 'friend red'
                    //     }
                    // }}
                    // onMouseOut={(e) => {
                    //     // e.stopPropagation()
                    //     if (e.target.className === 'friend red') {
                    //         e.target.className = 'friend'
                    //     }

                    // }}
                    >
                        {/* <div className="user-info"> */}
                        <img
                            style={{ pointerEvents: 'none' }}
                            src={url + user.avatar}
                            alt="img"
                            width='50'
                            height='50'
                            title={user.login}

                        />

                        {/* </div> */}

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