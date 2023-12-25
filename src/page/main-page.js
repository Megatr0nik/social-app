import { useState } from 'react';


import User from '../components/user/user';
import Gallery from '../components/gallery/gallery';
import { Friends } from '../components/widget/friends';
import { Modal } from '../components/modal/modal';
import { ModalImage } from '../components/modal/modal-image';

import { _BASE_URL } from '../constant/variable';

import './main-page.css';
import ModalPost from '../components/modal/modal-post';


const Main = ({ props }) => {

    const [gallery, setGallery] = useState(false);
    const [activeImage, setModalImage] = useState({ active: false, image: null });
    const [activePost, setModalPost] = useState(false);

    // console.log('Main', gallery)

    return (
        <div className="main-container">
            {activePost ? <Modal
                active={activePost}
                content={
                    <ModalPost
                        setModalPost={setModalPost}
                        activePost={activePost}
                        id={props._id}
                    />}

            /> : null
            }


            <section className="main-content">
                {gallery ? <Gallery
                    gallery={gallery}
                    id={props._id}
                    setGallery={setGallery}
                    setModalActive={setModalImage}
                /> : null}
            </section>
            <aside className='content-right'>

                <User
                    props={props}
                    url={_BASE_URL}
                    setGallery={setGallery}
                    gallery={gallery}
                    setModalPost={setModalPost}
                />

                <div className='friends-container'>
                    <h4>Друзі</h4>
                    <Friends friends={props.friends} url={_BASE_URL} />
                </div>
            </aside>

            {activeImage.active ?
                <Modal
                    active={activeImage.active}
                    content={<ModalImage image={activeImage.image} setModalActive={setModalImage} />}
                /> : null}
        </div>
    );
}


export default Main;