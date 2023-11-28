
import './main.css';
import img from './bird.png';
import friendsService from '../services/friendsService';
import { useEffect, useState } from 'react';
import User from '../user/user';



const BASE_URL = 'http://localhost:8000/userdb/'


const Main = ({ props }) => {

    const [friendsUser, setFriends] = useState([]);

    const { avatar, friends, login } = props;

    console.log(props);

    useEffect(() => {
        friendsService(BASE_URL, friends)
            .then(item => {
                setFriends(item);
            });
    }, [friends]);

    return (

        <div className="main-container">
            <header className="title">
                <span>BiRdie </span>
                <img src={img} alt="logo" width="32" height="32" />
            </header>
            {/* <nav className="nav-top">навігація</nav> */}
            <div className='content-container'>
                {/* <aside className='content-left'>контент зліва</aside> */}
                <section className="main-content">Основний контент</section>
                <aside className='content-right'>

                    <User props={props} url={BASE_URL} />

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