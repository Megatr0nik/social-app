
import { useEffect, useState } from "react";
import { _BASE_URL } from "../../constant/variable.js";
import getRequest from "../../services/get-request.js";

import './gallery.css';

const Gallery = ({ gallery, id, setGallery }) => {

    const [arrGallery, setArrGallery] = useState([]);

    const onGallery = () => {
        setGallery(!gallery);
    }

    useEffect(() => {
        getRequest(`${_BASE_URL}user/${id}/gallery/`, id)
            .then(data => {

                setArrGallery(data.map((item, i) => {
                    return (
                        <img
                            key={`g${i}`}
                            src={`${_BASE_URL}user/${id}/gallery/${item}`}
                            alt="gallery_image"
                            className="img-item"
                            width='180'
                            height='200'
                        />
                    );
                }));
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="gallery-container" >
            <div className="container-title">
                <h2 className="gallery-title">Галерея</h2>
                <button
                    className="close-button"
                    onClick={onGallery}
                >Закрити</button>
            </div>
            <div className="gallery">
                {arrGallery}
            </div>

        </div>
    );
}

export default Gallery;