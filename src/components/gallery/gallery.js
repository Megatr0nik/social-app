
import { useEffect, useState } from "react";
import { _BASE_URL } from "../../constant/variable.js";
import { getRequest } from "../../services/request.js";

import './gallery.css';


const Gallery = ({ id, setModalActive }) => {

    const [arrGallery, setArrGallery] = useState([]);

    const onModal = (e) => {
        console.log(e.target.src)
        setModalActive({
            active: true,
            image: e.target.src
        });
    }

    useEffect(() => {
        getRequest(`users/${id}/gallery/`, id)
            .then(data => {
                setArrGallery(data.map((item, i) => {
                    return (
                        <img
                            key={`g${i}`}
                            src={`${_BASE_URL}person/${id}/gallery/${item}`}
                            alt="gallery_image"
                            className="img-item"
                            width='100'
                            height='140'
                            onClick={onModal}
                        />
                    );
                }));
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="gallery-container" >
            {/* <div className="container-title">
                <h2 className="gallery-title">Галерея</h2>
                <button
                    className="close-button"
                    onClick={onGallery}
                >Закрити</button>
            </div> */}

            {/* <div className="gallery"> */}
            {arrGallery}
            {/* </div> */}
            {/* <div className="other">Хотьшо...</div> */}
        </div>
    );
}

export default Gallery;