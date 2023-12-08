
import './main.css';

import friendsService from '../../services/friendsService';
import { useEffect, useState } from 'react';
import User from '../user/user';
import { _BASE_URL } from '../../constant/variable';
import Gallery from '../gallery/gallery';


const Main = ({ props }) => {

    const [friendsUser, setFriends] = useState([]);
    const [gallery, setGallery] = useState(false);

    const { avatar, friends, email } = props;



    useEffect(() => {
        friendsService(`${_BASE_URL}`, friends)
            .then(item => {
                setFriends(item);
            });
    }, [friends]);
    console.log(gallery)
    return (
        <div className="main-container">

            {/* <nav className="nav-top">навігація</nav> */}
            <div className='content-container'>

                <section className="main-content">
                    {gallery ? <Gallery gallery={props.gallery} id={props._id} setGallery={setGallery} /> : null}
                </section>
                <aside className='content-right'>

                    <User props={props} url={_BASE_URL} setGallery={setGallery} gallery={gallery} />

                    <div className='friends-container'>
                        <h4>Друзі</h4>
                        {friendsUser}
                    </div>
                </aside>
            </div>

            {/* <footer className='footer'>підвал</footer> */}
        </div>
    );
}


export default Main;