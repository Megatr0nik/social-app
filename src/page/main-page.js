import { useState } from 'react';


import User from '../components/user/user';
import Gallery from '../components/gallery/gallery';
import { Friends } from '../components/widget/friends';

import { _BASE_URL } from '../constant/variable';

import './main-page.css';


const Main = ({ props }) => {

    const [gallery, setGallery] = useState(false);

    console.log('Main', props)

    return (
        <div className="main-container">

            {/* <nav className="nav-top">навігація</nav> */}
            <div className='content-container'>

                <section className="main-content">
                    {gallery ? <Gallery gallery={gallery} id={props._id} setGallery={setGallery} /> : null}
                </section>
                <aside className='content-right'>

                    <User props={props} url={_BASE_URL} setGallery={setGallery} gallery={gallery} />

                    <div className='friends-container'>
                        <h4>Друзі</h4>
                        <Friends friends={props.friends} url={_BASE_URL} />
                    </div>
                </aside>
            </div>


        </div>
    );
}


export default Main;